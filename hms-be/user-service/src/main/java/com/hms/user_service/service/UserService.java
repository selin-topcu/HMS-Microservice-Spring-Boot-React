package com.hms.user_service.service;

import com.hms.user_service.dto.UserDto;
import com.hms.user_service.exception.HmsException;

public interface UserService {
    public void registerUser(UserDto userDto) throws HmsException;
    public UserDto loginUser(UserDto userDto)  throws HmsException;
    public UserDto getUserById(Long id) throws HmsException;
    public void updateUser(UserDto userDto);
}
