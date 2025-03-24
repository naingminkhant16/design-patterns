import java.util.Stack;

public class PushCommand implements Command {
    private Stack<Integer> stack;
    private Integer i;

    public PushCommand(Stack<Integer> stack, Integer i) {
        this.stack = stack;
        this.i = i;
    }

    @Override
    public void execute() {
        stack.push(i);
    }

    @Override
    public void unExecute() {
        if (!stack.isEmpty()) stack.pop();
    }
}
