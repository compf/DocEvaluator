import { fstat, rmSync } from "fs";
import { env } from "process";
import { json } from "stream/consumers";
import { EnvCommentConfLoader, EvaluatorConf, JSONCommentConfLoader, loadConf, sanitize } from "../../src/conf/EvaluatorConf"
import { StateManagerFactory } from "../../src/conf/state_manager_factory";
import { MetricManager } from "../../src/metric_analysis/metric_manager";

test("test github action conf loading",()=>{
    let conf1=new EvaluatorConf();
    let conf2=new EvaluatorConf();
    let envLoader=new EnvCommentConfLoader();
    let conf1_any=conf1 as any;
    let conf2_any=conf2 as any;
  
    for(let name of Object.keys(conf1)){
        let val=conf1_any[name];
        if(typeof(val)=="object"){
            val=JSON.stringify(val);
        }
        env["INPUT_"+name.toUpperCase()]=val;
    }
    envLoader.updateConf(conf2);
    for(let name of Object.keys(conf1)){
        let val1=conf1_any[name];
        let val2=conf2_any[name];
       expect(val1).toEqual(val2)
    }

});
test("test json conf loading",()=>{
    let conf1=new EvaluatorConf();
    for(let m of conf1.metrics){
        m.unique_name=m.metric_name+"_0";
    }
    let conf1_any=conf1 as any;
    let conf2=loadConf(".")
    let conf2_any=conf2 as any;
    for(let name of Object.keys(conf1)){
        let val1=conf1_any[name];
        let val2=conf2_any[name];
       expect(val2).toEqual(val1)
    }
});
test("test sanitizing conf",()=>{
    let brokenConf=new EvaluatorConf();
    let metrics=[{unique_name:undefined,weight:undefined,name:MetricManager.MetricNames.simple_comment,params:undefined}];
    (brokenConf.metrics as any)=metrics!;
    for(let m of brokenConf.metrics){
        expect(m.params).toBeUndefined();
        expect(m.unique_name).toBeUndefined();
        expect(m.weight).toBeUndefined();

    }
    sanitize(brokenConf);
    for(let m of brokenConf.metrics){
        expect(m.params).toBeDefined();
        expect(m.unique_name).toBeDefined();
        expect(m.weight).toBeDefined();

    }

});
test("test state saving",()=>{
    let stateManager=StateManagerFactory.createStateManager("file","testDir");
    expect(stateManager.load()).toBeNull();
    const expected=50;
    stateManager.save(expected);
    expect(stateManager.load()).toBe(expected);
    rmSync("testDir/.evaluator_last_state.txt");

    expect(()=>{
        StateManagerFactory.createStateManager("",".");
    }).toThrow();
});
