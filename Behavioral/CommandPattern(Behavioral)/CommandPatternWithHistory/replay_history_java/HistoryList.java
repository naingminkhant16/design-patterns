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
        if (!undoList.isEmpty()) {
            Command lastCommand = undoList.removeLast();
            lastCommand.execute();
            commandList.add(lastCommand);
        }
    }

    public void replay() {
        for (Command command : commandList) {
            command.execute();
        }
    }

    public void addCommand(Command command) {
        commandList.add(command);
        command.execute();
    }
}
