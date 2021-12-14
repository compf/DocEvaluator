

import { Component } from "../../parser/parse_result/component";
import { FileComponent } from "../../parser/parse_result/file_component";
import { MethodComponent } from "../../parser/parse_result/method_component";
import { SimpleCommentPresentMetric } from "./simple_comment_present_metric";

export class IgnoreGetterSetterMetric extends  SimpleCommentPresentMetric{
    override shallConsider(component:Component,params:any):boolean{
        if((component instanceof FileComponent)){
            return false;
        }
        else if(component instanceof MethodComponent){
            let method=component as MethodComponent;
            return !this.isGetter(method,params) && !this.isSetter(method,params);
        }
        else{
            return true;
        }
    }
    private isGetter(component:MethodComponent,params:any):boolean{
        let name=component.getName();
       let nameValid=name.match(params.getterPattern)!=null;
       let noParameter=component.getParams().length==0;
       let hasReturnType=component.getReturnType()!="void";
       return nameValid && noParameter && hasReturnType;
    }
    private isSetter(component:MethodComponent,params:any):boolean{
        let name=component.getName();
       let nameValid=name.match(params.setterPattern)!=null;
       let oneParameter=component.getParams().length==1;
       let hasNoReturnType=component.getReturnType()=="void";
       return nameValid && oneParameter && hasNoReturnType;
    }
}