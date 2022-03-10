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
import numpy as np
def main(args):
    project=args.project
    rulesets=args.rulesets
    times_by_abbrev=dict()
    count=10
    tools=[DocTool(project,rulesets),CheckStyleTool(project,rulesets),PMDTool( project,rulesets)]
    for t in tools:
        times_by_abbrev[t.get_abbrev()]=[]
    for i in range(count):

    
        for t in tools:
            elapsed=t.measure_time()/1e9
            times_by_abbrev[t.get_abbrev()].append(elapsed)
    for t in tools:
        print(",".join([str(x) for x in times_by_abbrev[t.get_abbrev()]]))





if __name__=="__main__":
    parser=argparse.ArgumentParser()
    parser.add_argument("--project",help="The project to analyze")
    parser.add_argument("--rulesets",help="folder with rulesets")
    args=parser.parse_args()

    main(args)
