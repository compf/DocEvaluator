from matplotlib import pyplot as plt
import numpy as np

import argparse
from matplotlib import rcParams
parser=argparse.ArgumentParser()
parser.add_argument("--out")
parser.add_argument("--inFile")
args=parser.parse_args()

labelsize = 16
rcParams['xtick.labelsize'] = labelsize
rcParams['ytick.labelsize'] = labelsize 

plt.figure(figsize=(7.75,7.75))
tool_times=[]
with open(args.inFile) as f:
    for line in f.readlines():
        tool_times.append([float(s) for s in line.split(",")])
plt.boxplot(tool_times,labels=["DE","CS","PMD"])
plt.ylabel("Laufzeit [s]",fontsize=labelsize)
tool_times=np.array(tool_times)

mn=np.mean(tool_times,axis=1).transpose()
med=np.median(tool_times,axis=1).transpose()
std=np.std(tool_times,axis=1).transpose()

print("Mean",mn)
print("Median",med)
print("Std",std)
print()
for t in tool_times.transpose():
    print("&".join([str(x) for x in t]),r"\\\hline")
#print(tool_times.transpose())
plt.savefig(args.out)