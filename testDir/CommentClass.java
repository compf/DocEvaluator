public class CommentClass {
    /**
     * Sums up the two numbers given by parameters
     * @param firstNumber The first number which will be used
     * @param secondNumber the second number which will be added to the first number
     * @return a floating point number that is the sum and I
     */
    public double commented(int firstNumber,double secondNumber){
        return firstNumber+secondNumber;
    }
    /**
     * Hello
     */
    public void noParamsVoid(){

    }
    /**
     * constructor
     */
    CommentClass(){

    }

    /**
     * Repeats a character repeatCount times
     * @param characterToRepeat An ascii character to be repeated
     * @return the repeated String plus another digit
     */
    public String commentedPartly(char characterToRepeat,int repeatCount){
        String result="1";

        for(int i=0;i<repeatCount;i++){
            result+=characterToRepeat;
        }
        return result+uncommentedPrivate(0);
    }
    public boolean notCommennted(double num,double denom){
        return num/denom>Math.PI+1;
    }
    private int uncommentedPrivate(int identity){
        return  identity;
    }
}
