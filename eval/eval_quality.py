import urllib.request
import os
import zipfile
import argparse
import time
from collections import namedtuple
from typing import List,Tuple
from abc import abstractmethod
import subprocess
from check_tool import *
class CoveredComponent:
    def __init__(self,path,line_range,error_code) -> None:
        self.path=path
        self.line_range=line_range
        self.error_code=error_code
        self.covered_by=set()
    def cover_same_component(self,other)->bool:
        same_line_range=(self.line_range[0]>=other.line_range[0] and self.line_range[1]>=other.line_range[1]) or \
            (self.line_range[0]<=other.line_range[0] and self.line_range[1]<=other.line_range[1])
        return self.path==other.path and same_line_range and self.error_code==other.error_code
def find_covered_component(to_search,tool_out_path,covered_components)->CoveredComponent:
    for c in covered_components:
        if c.cover_same_component(to_search):
            return c
    return None
all_covered_components=[]
def main(args):
    result=dict()
    project=args.project
    tools=[CheckStyleTool(project),PMDTool(project),DocTool( project)]
    cs,pmd,de=[t.get_out_path() for t in tools]
    if not args.debug:

        for t in tools:
            t.download()
            t.run()
        output=t.parse_output()
        result[t.get_out_path()]=output

    for t in tools:
        output=t.parse_output()
        result[t.get_out_path()]=output
    for t in tools:
        tool_out_path=t.get_out_path()
        for c in result[tool_out_path]:
            covered_component=CoveredComponent(c.path,c.line_range,c.msg_code)
            similar_component=find_covered_component(covered_component,tool_out_path,all_covered_components)
            if similar_component!=None:
                similar_component.covered_by.add(tool_out_path)
            else:
                all_covered_components.append(covered_component)
                covered_component.covered_by.add(tool_out_path)
    
    for cov in all_covered_components:
        print(cov.path,cov.line_range,cov.error_code,cov.covered_by)
 
    relevant_subsets=[set([pmd]),set([cs]),set([de]),set([pmd,de]),set([cs,de]),set([cs,pmd,de]),set([pmd,cs])]
    for subset in relevant_subsets:
        matched=[c for c in all_covered_components if c.covered_by==subset]
        print(subset,count)
    print()
    for t in tools:
        ele=[c for c in all_covered_components if t.get_out_path() in c.covered_by]
        count=len(ele)
        print(t.get_out_path(),count)


if __name__=="__main__":
    parser=argparse.ArgumentParser()
    parser.add_argument("--project",help="The project to analyze")
    parser.add_argument("--debug",default=None,required=False)
    args=parser.parse_args()

    main(args)
