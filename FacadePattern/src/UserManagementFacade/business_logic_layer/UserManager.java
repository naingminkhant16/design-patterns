package UserManagementFacade.business_logic_layer;

import UserManagementFacade.data_access_layer.UserRepository;
import UserManagementFacade.entity.User;
import UserManagementFacade.integration_layer.EmailService;

public class UserManager {
    private final UserRepository userRepository;
    private final EmailService emailService;

    public UserManager(UserRepository userRepository, EmailService emailService) {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }

    public User createUser(String name) {
        User newuser = new User();
        newuser.setId("RandomId");
        newuser.setName(name);

        // Save user in database
        User savedUser = userRepository.saveUser(newuser);

        // Send welcome email to user
        emailService.sendWelcomeEmail(savedUser);

        return savedUser;
    }

    public User getUserById(String id) {
        return userRepository.getUserById(id);
    }

    public void deleteUser(String id) {
        userRepository.deleteUser(id);
    }
}
