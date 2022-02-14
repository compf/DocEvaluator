import { LogMessage } from "./log_message";
import { MAX_SCORE, MIN_SCORE } from "./metrics/documentation_analysis_metric";
import { InvalidMetricResult, MetricResult } from "./metric_result";
import { MetricResultBuilder } from "./metric_result_builder";
enum NormalizationDirection { Tool_To_ISO = 1, ISO_To_Tool }
/**
 * A builder that uses the squale model
 * @see  https://ieeexplore.ieee.org/abstract/document/4812772
 */
export class SqualeResultBuilder extends MetricResultBuilder {
    override getAggregatedResult(logMessages:LogMessage[]): number {
        let sum = 0;
        let lambda = 9;
        if (this.params != undefined && this.params.lambda != undefined) {
            lambda = this.params.lambda;
        }
        if (this.resultList.length == 0) return 0;
        for (let partialResult of this.resultList) {
            let result = this.normalizeResult(partialResult.getResult(), NormalizationDirection.Tool_To_ISO);
            sum += Math.pow(lambda, -result);
            this.putAllLogMessages(partialResult.getLogMessages(), logMessages)

        }
        let averaged = sum / this.resultList.length;
        let finalResult = -Math.log(averaged) / Math.log(lambda);
        finalResult = this.normalizeResult(finalResult, NormalizationDirection.ISO_To_Tool);
        return   finalResult;

    }
    normalizeResult(result: number, toDirection: NormalizationDirection): number {
        const minScoreTool = MIN_SCORE;
        const minScoreISO = 0;
        const maxScoreTool = MAX_SCORE;
        const maxScoreISO = 3;
        let finalResult = 0;
        if (toDirection == NormalizationDirection.Tool_To_ISO) {
            finalResult = (result / (maxScoreTool - minScoreTool)) * (maxScoreISO - minScoreISO);
        }
        else {
            finalResult = (result / (maxScoreISO - minScoreISO)) * (maxScoreTool - minScoreTool);
        }
        return finalResult;
    }
    private params: { lambda: number } = { lambda: 9 };
    constructor(params: any) {
        super();
        this.params = params;
    }


}