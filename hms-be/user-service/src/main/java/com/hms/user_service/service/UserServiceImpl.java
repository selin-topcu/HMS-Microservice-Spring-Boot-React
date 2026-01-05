package com.hms.user_service.service;

import com.hms.user_service.dto.UserDto;
import com.hms.user_service.entity.Users;
import com.hms.user_service.exception.HmsException;
import com.hms.user_service.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service("userService")
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void registerUser(UserDto userDto) throws HmsException {
        Optional<Users> user = userRepository.findByEmail(userDto.getEmail());
        if (user.isPresent()) {
            throw new HmsException("USER_ALREADY_EXISTS");
        }
        userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
        userRepository.save(userDto.toEntity());
    }

    @Override
    public UserDto loginUser(UserDto userDto) throws HmsException {
        Users user = userRepository.findByEmail(userDto.getEmail()).orElseThrow(() -> new HmsException("USER_NOT_FOUND"));
        if (!passwordEncoder.matches(userDto.getPassword(), user.getPassword())) {
            throw new HmsException("INVALID_CREDENTIALS");
        }
        user.setPassword(null);

        return user.toDto();
    }

    @Override
    public UserDto getUserById(Long id) throws HmsException {
        return userRepository.findById(id).orElseThrow(() -> new HmsException("USER_NOT_FOUND")).toDto();
    }

    @Override
    public void updateUser(UserDto userDto) {

    }
}
