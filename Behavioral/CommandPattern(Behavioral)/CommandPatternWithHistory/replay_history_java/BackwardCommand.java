public class BackwardCommand implements Command {
    @Override
    public void execute() {
        System.out.println("moving backward");
    }

    @Override
    public void unExecute() {
        System.out.println("undo moving backward");
    }
}
