

import { Component } from "../../parser/parse_result/component";
import { FileComponent } from "../../parser/parse_result/file_component";
import { MethodComponent } from "../../parser/parse_result/method_component";
import { SimpleCommentPresentMetric } from "./simple_comment_present_metric";
interface ParamsType{getterPattern:string,setterPattern:string}
/**
 * This metric works the same as the simple comment present metric but ignores getter/setters
 */
export class IgnoreGetterSetterMetric extends  SimpleCommentPresentMetric{
    override shallConsider(component:Component):boolean{
        let params=this.getParams();

        if((!super.shallConsider(component))){
            return false;
        }
        else if(component instanceof MethodComponent){
            let method=component as MethodComponent;
            return !this.isGetter(method,params as ParamsType) && !this.isSetter(method,params as ParamsType);
        }
        else{
            return true;
        }
    }
    private isGetter(component:MethodComponent,params:ParamsType):boolean{
        let name=component.getName();
       let nameValid=name.match(params.getterPattern)!=null;
       let noParameter=component.getParams().length==0;
       let hasReturnType=component.getReturnType()!="void";
       return nameValid && noParameter && hasReturnType;
    }
    private isSetter(component:MethodComponent,params:ParamsType):boolean{
        let name=component.getName();
       let nameValid=name.match(params.setterPattern)!=null;
       let oneParameter=component.getParams().length==1;
       let hasNoReturnType=component.getReturnType()=="void";
       return nameValid && oneParameter && hasNoReturnType;
    }
}