public class LargeMethodTest {
    /**
     * This method prints hello world
     */
    public void shortCommentedMethod() {
        System.out.println("Hello World");
    }

    public void shortUncommentedMethod() {
        System.out.println("Have a great day!!");
    }

    /**
     * This method activates some effects
     */
    public void longCommentedMethod() {
        if (!effect.isEnabled())
            return;
        switch (time) {
        case POKEMON_DEFEATED:
            effect.pokemonDefeated(inf);
            break;
        case POKEMON_SWITCHED:
            effect.pokemonSwitched(inf);
            break;
        case ROUND_STARTING:
            effect.roundBeginning(inf);
            break;
        case ROUND_ENDING:
            effect.roundEnding(inf);
            break;
        case ATTACK:
            effect.attack(inf);
            break;
        case DEFEND:
            effect.defend(inf);
            break;

        }
    }

    public void longUncommentedMethod() {
        if (!effect.isEnabled())
            return;
        switch (time) {
        case POKEMON_DEFEATED:
            effect.pokemonDefeated(inf);
            break;
        case POKEMON_SWITCHED:
            effect.pokemonSwitched(inf);
            break;
        case ROUND_STARTING:
            effect.roundBeginning(inf);
            break;
        case ROUND_ENDING:
            effect.roundEnding(inf);
            break;
        case ATTACK:
            effect.attack(inf);
            break;
        case DEFEND:
            effect.defend(inf);
            break;

        }
    }
}