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


def main(project):
    result=dict()
    tools=[CheckStyleTool(project),PMDTool(project),DocTool( project)]
    for t in tools:
        t.download()
        t.run()
        output=t.parse_output()
        result[t.get_out_path()]=output
    for t in tools:
        tm=t.measure_time()
        print(tm)

if __name__=="__main__":
    parser=argparse.ArgumentParser()
    parser.add_argument("--project",help="The project to analyze")
    args=parser.parse_args()

    main(args.project)
