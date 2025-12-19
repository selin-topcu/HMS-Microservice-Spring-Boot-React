package com.hms.user_service.service;

import com.hms.user_service.dto.UserDto;
import com.hms.user_service.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void registerUser() {

    }

    @Override
    public UserDto loginUser() {
        return null;
    }

    @Override
    public UserDto getUserById(Long id) {
        return null;
    }

    @Override
    public void updateUser(UserDto userDto) {

    }
}
