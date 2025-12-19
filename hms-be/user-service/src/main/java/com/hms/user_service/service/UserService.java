package com.hms.user_service.service;

import com.hms.user_service.dto.UserDto;

public interface UserService {
    public void registerUser();
    public UserDto loginUser();
    public UserDto getUserById(Long id);
    public void updateUser(UserDto userDto);
}
