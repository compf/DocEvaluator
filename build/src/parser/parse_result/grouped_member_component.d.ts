import { SingleMemberComponent } from "./single_member_component";
/**
 * This class defines fields that are declared in the same line.
 * e.g. "int a,b" in java
 */
export declare class GroupedMemberComponent extends SingleMemberComponent {
    private child_names;
    getName(): string;
    addChildName(name: string): void;
    getChildNames(): string[];
}
