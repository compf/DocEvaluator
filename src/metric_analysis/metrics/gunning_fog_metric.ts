import { RelevantVariables } from "../NLP_Helper";
import { FleschMetric } from "./flesch_metric";
interface ParamsType {

    /**If true also calculate the flesh score for the block tags of the components and calculate the average of them */
    consider_tags: boolean
}
/**
 * Calculates the gunning fog index of a text
 */
export class GunningFogMetric extends FleschMetric {

    protected calcReadability(vars: RelevantVariables): number {
        return 0.4 * (vars.numWords / vars.numSentences + 100 * (vars.numHardWords / vars.numWords));
    }
    public processResult(score: number, msgs: string[]): number {
        let finalScore = 0;
       
         if (score <= 8) {
            finalScore = (15 / 8) * score + 85;
            if (score <= 4) {
                msgs.push("The comment is maybe a little bit to easy");
            }
        }
        else if (score <= 16) {
            finalScore = (-25 / 16) * score * (score - 16);
        }
        else {
            msgs.push("The comment is maybe a little bit to hard");
            finalScore = 0;
        }
        return finalScore;
    }


}