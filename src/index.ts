import chalk from "chalk";
import internal from "stream";
import {DirectoryTraverser} from "./directory_traverser/directory_traverser";
function main(args:Array<string>){
    var workingDirectory="";
    if(args.length<1){
        console.log(chalk.yellow("No directory provided. Using current directory"));
        workingDirectory=".";
    }
    else{
        workingDirectory=args[0];
    }
    let traverser= new DirectoryTraverser(workingDirectory);
    traverser.getRelevantFiles();
}
export function small_test(a:number,b:number){
    return a+b;
}
main(process.argv.slice(2))