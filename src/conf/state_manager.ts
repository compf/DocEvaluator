export interface StateManager{
    save(num:number):void;
    load():number|null;
}