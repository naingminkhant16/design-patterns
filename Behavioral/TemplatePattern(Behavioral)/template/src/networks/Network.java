package networks;

public abstract class Network {
    String username;
    String password;

    Network() {
    }

    //steps
    abstract boolean login(String username, String password);

    abstract boolean sendData(byte[] data);

    abstract void logout();

    //template method  - template method cannot be override by subclasses
    public final boolean post(String message) {
        if (login(username, password)) {
            boolean result = sendData(message.getBytes());
            logout();
            return result;
        }
        return false;
    }
}
