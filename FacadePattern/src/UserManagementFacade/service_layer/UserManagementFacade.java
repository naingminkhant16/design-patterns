package UserManagementFacade.service_layer;

import UserManagementFacade.business_logic_layer.UserManager;
import UserManagementFacade.data_access_layer.UserRepository;
import UserManagementFacade.entity.User;
import UserManagementFacade.integration_layer.EmailService;

public class UserManagementFacade {
    private final UserManager userManager;

    public UserManagementFacade() {
        UserRepository userRepository = new UserRepository();
        EmailService emailService = new EmailService();
        this.userManager = new UserManager(userRepository, emailService);
    }

    public User createUser(String name) {
        return userManager.createUser(name);
    }

    public User getUserById(String id) {
        return userManager.getUserById(id);
    }

    public void deleteUser(String id) {
        userManager.deleteUser(id);
    }
}
