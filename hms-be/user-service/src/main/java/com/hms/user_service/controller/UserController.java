package com.hms.user_service.controller;

import com.hms.user_service.dto.ResponseDto;
import com.hms.user_service.dto.UserDto;
import com.hms.user_service.exception.HmsException;
import com.hms.user_service.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@Validated
@CrossOrigin
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<ResponseDto> registerUser(@Valid @RequestBody UserDto userDto) throws HmsException {
        userService.registerUser(userDto);
        return new ResponseEntity<>(new ResponseDto("User registered successfully"), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<UserDto> loginUser(@Valid @RequestBody UserDto userDto) throws HmsException {
        return new ResponseEntity<>(userService.loginUser(userDto), HttpStatus.OK);
    }

}
