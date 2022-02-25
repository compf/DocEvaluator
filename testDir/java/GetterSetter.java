public class GetterSetter {
    /**
     * A commented field
     */
    private int value;

    public int getValue(){
        return value;
    }
    public void setValue(int val){
        this.value=val;
    }

    public void uncommentedMethodNoSetter(){

    }
    public int uncommentedMethodNoGetter(int g){
        return 1;
    }
    /**
     * This getter checks whether value is large
     * @return true if value >100
     */
    public boolean isLarge(){
        return value>100;
    }

  
}
