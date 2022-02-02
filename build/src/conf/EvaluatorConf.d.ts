import { MetricManager } from "../metric_analysis/metric_manager";
export declare const MiniMatchConf: {
    dot: boolean;
    matchBase: boolean;
};
/**
 * This class contains the configuration information for the tool
 */
export declare class EvaluatorConf {
    /**
     * All file names that should be included in the analysis should be defined here.
     * Use common Linux syntax (*) to indicate that a filename should start or end with a specific string
     */
    include: string[];
    /**
     * Similary as include but used to exclude specific files,
     * should be a subset of include
     */
    exclude: string[];
    /**
     * define all metrics and their respective weights here
     */
    metrics: {
        weight: number;
        metric_name: MetricManager.MetricNames;
        params: any;
        unique_name: string;
    }[];
    /**
     * the global threshold that the average of all metrics should meet to pass the documentation check
     */
    global_threshold: number;
    /**
     * The result builder for the metrics
     */
    metric_result_builder: string;
    /**
 * The result builder for the files
 */
    file_result_builder: string;
    /**
     * The result builder for the components
     */
    component_result_builder: string;
    /**
     * the parser to be used/ the programming languages to be analyzed
     */
    parser: string;
    /**
     * An array of pairs of a glob pattern and a weight that will be used to make some paths more or less important for evaluation
     */
    path_weights: {
        path: string;
        weight: number;
    }[];
    /**
 * An array of pairs of the component  class name (for example MethodComponent) and a weight that will be used to make some components more  or less important for evaluation
 */
    component_weights: {
        name: string;
        weight: number;
    }[];
    /**
     * The default weight for a given path
     */
    default_path_weight: number;
    /**
     * The default weight for a given component
     */
    default_component_weight: number;
    /**
     * The state manager to store the result of the last run
     */
    state_manager: string;
    /**
     * max tolerable absolute difference from current to last run
     */
    max_diff_last_run: number;
    constructor();
}
/**
     * load the configuration from the comment_conf.json file
     * @returns A valid DirectoryTraverserConfig that is set to default values if no config file is found
     */
export declare function loadConf(basePath: string): EvaluatorConf;
export interface ConfLoader {
    updateConf(conf: EvaluatorConf): void;
}
export declare class JSONCommentConfLoader implements ConfLoader {
    private basePath;
    constructor(basePath: string);
    updateConf(conf: EvaluatorConf): void;
}
export declare class EnvCommentConfLoader implements ConfLoader {
    updateConf(conf: EvaluatorConf): void;
}
