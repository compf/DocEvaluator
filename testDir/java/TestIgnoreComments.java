package main;
/**
 * This is a class to test whether ignore comment workd
 */
public class IgnoreComments{
    private void uncommented(){

    }
    /**
     * %ignore_this%
     */
    private void uncommentedIgnore(){

    }
    /**
     * %ignore_node%
     */
    public class UncommentedClass{
        private void uncommented1(){

        }
        private void uncommented2(){
            
        }
        private void uncommented3(){
            
        }
    }
}