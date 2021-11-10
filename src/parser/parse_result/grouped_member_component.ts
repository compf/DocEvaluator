import { SingleMemberComponent } from "./single_member_component";

export class GroupedMemberComponent extends SingleMemberComponent{
    private child_names:string[]=[]
    override getName():string{
        return this.child_names.join(",")
    }
    public addChildName(name:string){
        this.child_names.push(name);
    }
    public getChildNames():string[]{
        return this.child_names;
    }
}