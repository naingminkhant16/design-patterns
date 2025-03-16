import java.util.Stack;

public class PopCommand implements Command {
    private final Stack<Integer> stack;
    private Integer i = null;

    public PopCommand(Stack<Integer> stack) {
        this.stack = stack;
    }

    @Override
    public void execute() {
        if (!stack.isEmpty()) {
            i = stack.pop();
        }
    }

    @Override
    public void unExecute() {
        if (i != null) {
            stack.push(i);
        }
    }
}
