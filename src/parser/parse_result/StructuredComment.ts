export class StructuredComment{  
    private generalDescription:string  |null;
    private tags:StructuredCommentTag[]=[]
    constructor(generalDescription:string,tags:StructuredCommentTag[]){
       this.generalDescription=generalDescription;
       this.tags=tags;
    }
    getGeneralDescription():string|null{
        return this.generalDescription;
    }
    getTags():StructuredCommentTag[]{
        return this.tags;
    }
   
}
export class StructuredCommentTag{
    private kind:string|null;
    private param:string|null;
    private description:string|null;

    constructor(kind:string|null,param:string|null,description:string|null){
        this.kind=kind;
        this.param=param;
        this.description=description;
    }
    getKind():string|null{
        return this.kind;
    }
    getParam():string|null{
        return this.param;
    }
    getDescription():string|null{
        return this.description;
    }
     
}
