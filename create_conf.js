const EvaluatorConf=require("./build/src/conf/EvaluatorConf.js");
const commandLineArgs = require('command-line-args');
const YAML = require('yaml');
const fs=require("fs");
const path=require("path");
const CONF_FILENAME = "comment_conf.json";

const yamlTemplate={
    name:"Check documentation",
    on:{
        workflow_dispatch:{},
        push:{branches:["master","main"]},
        pull_request:{branches:["master","main"]},
    },
    jobs:{
        build:{
            "runs-on":"ubuntu-latest",
            steps:[
                {uses:"actions/checkout@v2"},
                {
                    name:"DocEvaluator",
                    uses:"compf/DocEvaluator@action",
                    with:{}
                },
                {
                    name:"Add & commit",
                    if:"always()",
                    uses:"EndBug/add-and-commit@v7.5.0",
                    with:{add:".evaluator_last_state.txt"}
                }

            ]
        }
    }
}


const options=[
{name:"out"},
{name:"type"}
];
let args=commandLineArgs(options);
let conf=new EvaluatorConf.EvaluatorConf();
if(args.type=="yaml"|| args.type=="yml"){
    let confObj=yamlTemplate.jobs.build.steps[1].with
    for(let key of Object.keys(conf)){
        if(typeof(conf[key])=="object"){
            confObj[key]=JSON.stringify(conf[key],null,2);
        }
        else{
            confObj[key]=conf[key];
        }
    }
   let output= YAML.stringify(yamlTemplate);
   let outPath=args.out;
   fs.writeFileSync(outPath,output);
}
else{
    let output=JSON.stringify(conf,null,2);
    let outPath="";
    if(args.out.endsWith(".json")){
        outPath=args.out;
    }
    else{
        outPath=path.join(args.out,CONF_FILENAME);
    }
    fs.writeFileSync(outPath,output);
}