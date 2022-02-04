public class EdgeCaseTest{
    /**
     * This method does something
     * @param a first parameter
     * @param b second parameter
     */
    public void onlyNonNull(int a,int b){

    }
    /**
     * 
     * @param obj the first parameter. shall not be null
     * @param test the second parameter
     */
    public void oneMentionNull(Object obj,String test){

    }
    /**
     * 
     * @return null if something is wrong
     */
    public String mentionNullReturn(){
        return "";
    }
    /**
     * 
     * @return any value
     */
    public Object notMentionNullReturn(){
        return null;
    }
    /**
     * 
     * @param o any value
     */
    private void privateMethod(Object o){
        
    }
}