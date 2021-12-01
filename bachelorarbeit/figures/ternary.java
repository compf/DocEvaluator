/**
 * This method simulates a ternary operator
 * @param condition The condition that decides which param will be returned
 * @param ifTrue will be returned if {@code condition} is true
 * @param ifFalse will be returned if {@code condition} is true
 * @return either {@code ifTrue} or {@code ifFalse} depending on the condition
 */
Object ternary(boolean condition,Object ifTrue,Object ifFalse){
    return condition ? ifTrue :ifFalse;
}