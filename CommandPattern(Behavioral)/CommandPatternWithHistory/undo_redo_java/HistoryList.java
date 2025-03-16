import java.util.ArrayList;
import java.util.List;

public class HistoryList {
    private final List<Command> commandList = new ArrayList<>();
    private final List<Command> undoList = new ArrayList<>();

    public void undo() {
        if (!commandList.isEmpty()) {
            Command lastCommand = commandList.removeLast();
            lastCommand.unExecute();
            undoList.add(lastCommand);
        }
    }

    public void redo() {
        // if undo list is empty it will do nothing
        if (!undoList.isEmpty()) {
            Command lastCommand = undoList.removeLast();
            lastCommand.execute();
            commandList.add(lastCommand);
        }
    }

    public void addCommand(Command command) {
        commandList.add(command);
    }
}
