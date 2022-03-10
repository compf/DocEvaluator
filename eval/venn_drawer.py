from matplotlib import pyplot as plt
import numpy as np
from matplotlib_venn import venn3, venn3_circles
import argparse

parser=argparse.ArgumentParser()
parser.add_argument("--out")
parser.add_argument("--inFile")
args=parser.parse_args()

plt.figure(figsize=(7.75,7.75))
ax = plt.gca()
DE_ONLY=124
CS_ONLY=285
PMD_ONLY=377

DE_PMD=264
DE_CS=1266
CS_PMD=10
DE_CS_PMD=8400


with open(args.inFile) as f:
    lines=f.readlines()
    DE_ONLY=int(lines[0])
    CS_ONLY=int(lines[1])
    PMD_ONLY=int(lines[2])
    DE_PMD=int(lines[3])
    DE_CS=int(lines[4])
    CS_PMD=int(lines[5])
    DE_CS_PMD=int(lines[6])


subsets=(DE_ONLY,CS_ONLY,DE_CS,PMD_ONLY,DE_PMD,CS_PMD,DE_CS_PMD)
patches=["Abc", "aBc", "ABc", "abC", "AbC", "aBC", "ABC"]
patches=[ ("".join( ["0" if y.islower() else "1"  for y in x]))  for x in patches]
titles=["{DE}",	"{CS}","{DE, CS}","{PMD}","{DE, PMD}","{CS, PMD}","{DE, CS, PMD}"]

v = venn3(subsets=subsets, set_labels = ('DE', 'CS', 'PMD'),set_colors=("red","green","blue"))
for i,s in enumerate(v.subset_labels):
    v.subset_labels[i].set_visible(False)
v.get_patch_by_id('111').set_color('black')
c=venn3_circles(subsets=subsets)
c[0].set_lw(1.0)
c[1].set_lw(1.0)
c[2].set_lw(1.0)

l=[]
h=[]
cnt=0
for p in patches:
    # remove label by setting them to empty string:
    #v.get_label_by_id(i).set_text("")
    # append patch to handles list
    h.append(v.get_patch_by_id(p))
    # append count to labels list
    l.append(titles[cnt])
    cnt+=1
ax.legend(handles=h, labels=l, title="Legende",loc=(-0.15,0))
plt.savefig(args.out)