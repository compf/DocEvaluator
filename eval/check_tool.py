import urllib.request
import os
import zipfile
import argparse
import time
import shutil
from collections import namedtuple
from typing import List,Tuple
from abc import abstractmethod
import subprocess
from enum import Enum,auto
LogLine=namedtuple("LogLine","path line_range msg_code")
class MessageCodes(Enum):
    CheckstyleSpecific=0
    PMDSpecific=1
    DocEvaluatorSpecific=2 
    MissingDoc=3
    IllegalTerm=4
    MethodNotFullyDocumented=5
    JavadocStyle=6
class AbstractCheckTool:
  
    @abstractmethod
    def download(self):
        """
        downloads the neccessary files to execute tthe check took
        """
        pass

    def measure_time(self)->float:
        start_time=time.time_ns()
        self._run_tool(subprocess.DEVNULL)
        elapsed=time.time_ns()-start_time
        return elapsed
    @abstractmethod
    def get_ruleset_path(self)->str:
        pass
    def _run_tool(self,out):
        subprocess.run(self.get_command(),stdout=out,stderr=subprocess.STDOUT)
        pass
    @abstractmethod
    def get_command(self)->List[str]:
        pass

    @abstractmethod
    def get_out_path(self)->str:
        pass
    def run(self):
        with open(self.get_out_path(),"w") as f:
            self._run_tool(f)
    def parse_output(self,)->List[LogLine]:
        with open(self.get_out_path()) as f:
            return [self.parse_line(l) for l in f if self.is_valid_line(l) ]
    def is_valid_line(self,line:str)->bool:
        pass

        
    @abstractmethod
    def parse_line(self,line:str)->LogLine:
        pass
class CheckStyleTool(AbstractCheckTool):
    JAR_NAME="checkstyle.jar"
    def __init__(self,project_path:str) -> None:
        super().__init__()
        self.project_path=project_path
    def get_out_path(self) -> str:
        return "checkstyle_out.txt"
    def get_command(self) -> List[str]:
        #java -jar checkstyle-9.3-all.jar -c ./rulesets/checkstyle.xml ~/data/uni/sem7/github_projects/argouml-VERSION_0_24 >out_checkstyle.txt
        return ["java","-jar",CheckStyleTool.JAR_NAME,"-c",self.get_ruleset_path(),self.project_path]
    def get_ruleset_path(self) -> str:
        return  "checkstyle.xml"
    def download(self):
        if not os.path.exists(CheckStyleTool.JAR_NAME):
            urllib.request.urlretrieve("https://github.com/checkstyle/checkstyle/releases/download/checkstyle-9.3/checkstyle-9.3-all.jar","checkstyle.jar")
    def parse_line(self, line: str) -> LogLine:
        #print(line)
        splitted=line.split(":")
        path=splitted[0].split()
        path=" ".join(path[1:])
 
        
        line_nr=int(splitted[1])
        line_range=(line_nr,line_nr)
      

        error_code=line.split()[-1]
        error_code=error_code[1:-1]
        error_code=self.parse_code(error_code.strip())
        return LogLine(path,line_range,error_code)
    def is_valid_line(self,line:str)->bool:
        return not (line.startswith("Starting") or line.startswith("Audit")  or line.startswith("Checkstyle")  )
    def parse_code(self,code:str)->int:
        if code=="MissingJavadocMethod" or code=="MissingJavadocType" or code=="JavadocVariable":
            return MessageCodes.MissingDoc
        elif code=="JavadocStyle":
            return MessageCodes.JavadocStyle
        elif code=="JavadocMethod":
            return MessageCodes.MissingDoc
        else:
            return MessageCodes.CheckstyleSpecific




class PMDTool(AbstractCheckTool):
    ZIP_NAME="pmd.zip"
    DIR_NAME="pmd-bin-6.42.0"
    def __init__(self,project_path:str) -> None:
        super().__init__()
        self.project_path=project_path
    def get_out_path(self) -> str:
        return "pmd_out.txt"
    def get_command(self) -> List[str]:
        #./run.sh pmd --rulesets ../../rulesets/pmd.xml --dir ~/data/uni/sem7/github_projects/argouml-VERSION_0_24
        return ["pmd-bin-6.42.0/bin/run.sh","pmd", "--rulesets",self.get_ruleset_path(),"--dir",self.project_path]
    def download(self):
        urllib.request.urlretrieve(" https://github.com/pmd/pmd/releases/download/pmd_releases%2F6.42.0/pmd-bin-6.42.0.zip","pmd.zip")
        with zipfile.ZipFile(PMDTool.ZIP_NAME, 'r') as zip_ref:
            zip_ref.extractall(".")
    def get_ruleset_path(self) -> str:
        return "pmd.xml"
    def parse_line(self, line: str) -> LogLine:
        #print(line)
        #print(line)
        splitted=line.split(":")
        path=splitted[0]
        
        line_nr=int(splitted[1])
        line_range=(line_nr,line_nr)

        error_code=splitted[2]

        error_code=self.parse_code(error_code.strip())
        
        return LogLine(path,line_range,error_code)
    def is_valid_line(self,line:str)->bool:
        return not("This analysis" in line)
    def parse_code(self,code:str)->int:
        if code=="CommentContent":
            return MessageCodes.IllegalTerm
        elif code=="CommentRequired":
            return MessageCodes.MissingDoc
        else:
            return MessageCodes.PMDSpecific


class DocTool(AbstractCheckTool):
    def __init__(self,project_path:str) -> None:
        super().__init__()
        self.project_path=project_path
        self.found_log_message=False
    def get_out_path(self) -> str:
        return "doc_out.txt"
    def get_command(self) -> List[str]:
        #./run.sh pmd --rulesets ../../rulesets/pmd.xml --dir ~/data/uni/sem7/github_projects/argouml-VERSION_0_24
        return ["node","DocEvaluator/build/index.js",self.project_path]
    def download(self):
        shutil.rmtree("DocEvaluator")
        shutil.copy("comment_conf.json",self.project_path)
        subprocess.run(["git","clone", "-b","action","https://github.com/compf/DocEvaluator.git"])

    def get_ruleset_path(self) -> str:
        return None
    def parse_line(self, line: str) -> LogLine:
        #print(line)
        #print(line)
        splitted=line.split(":")
        #print(splitted)
        path=os.path.join(self.project_path,splitted[0])

        component_line=splitted[1].split()
        line_range=component_line[-1].replace(")","")
        line_range=line_range.split("-")
        line_range=(int(line_range[0]),int(line_range[1]))
        
       

        error_code=splitted[2].strip().replace("[","").replace("]","")
        
        error_code=self.parse_code(error_code.strip())
        return LogLine(path,line_range,error_code)
    def is_valid_line(self,line:str)->bool:
        if line.startswith("The result"):
            return False
        elif self.found_log_message:
            return True
        elif line.startswith("Log messages"):
            self.found_log_message=True
            return False
        else:
            return False
    def parse_code(self,code:str)->int:
        if code.startswith("simple_comment") or code.startswith("public_members"):
            return MessageCodes.MissingDoc
        elif code.startswith("method_fully"):
            return MessageCodes.MethodNotFullyDocumented
        elif code.startswith("formatting_good"):
            return MessageCodes.JavadocStyle
        elif code.startswith("certain_terms"):
            return MessageCodes.IllegalTerm
        else:
            return MessageCodes.DocEvaluatorSpecific