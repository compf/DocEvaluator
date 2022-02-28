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
def find_covered_component(to_search,covered_components)->CoveredComponent:
    for c in covered_components:
        if c.cover_same_component(to_search):
            return c
    return None
all_covered_components=[]
def main(args):
    result=dict()
    project=args.project
    rulesets=args.rulesets
    tools=[DocTool(project,rulesets),CheckStyleTool(project,rulesets),PMDTool( project,rulesets)]
    de,cs,pmd=[t.get_abbrev() for t in tools]
    if not args.debug:

        for t in tools:
            t.download()
            t.run()
        output=t.parse_output()
        result[t.get_abbrev()]=output

    for t in tools:
        output=t.parse_output()
        result[t.get_abbrev()]=output
    for t in tools:
        abbrev=t.get_abbrev()
        for c in result[abbrev]:
            covered_component=CoveredComponent(c.path,c.line_range,c.msg_code)
            similar_component=find_covered_component(covered_component,all_covered_components)
            if similar_component!=None:
                similar_component.covered_by.add(abbrev)
            else:
                all_covered_components.append(covered_component)
                covered_component.covered_by.add(abbrev)
    
    for cov in all_covered_components:
        print(cov.path,cov.line_range,cov.error_code,cov.covered_by)
 
    relevant_subsets=[{de},{cs},{pmd},{pmd,de},{cs,de},{cs,pmd},{de,pmd,cs}]
    table_order=["|DE|","|CS|","|PMD|"]
    table_order+=[str(item) for item in relevant_subsets]
    result_dict=dict()
    for t in tools:
        ele=[c for c in all_covered_components if t.get_abbrev() in c.covered_by]
        count=len(ele)
        abbrev="|"+t.get_abbrev()+"|"
        print(abbrev,count)
        result_dict[abbrev]=count
    print()
    for subset in relevant_subsets:
        matched=[c for c in all_covered_components if c.covered_by==subset]
        count=len(matched)
        result_dict[str(subset)]=count
        print(subset,count)
    print()
   



if __name__=="__main__":
    parser=argparse.ArgumentParser()
    parser.add_argument("--project",help="The project to analyze")
    parser.add_argument("--rulesets",help="folder with rulesets")
    parser.add_argument("--debug",default=None,required=False)
    args=parser.parse_args()

    main(args)
