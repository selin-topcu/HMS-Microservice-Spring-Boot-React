package com.hms.user_service.dto;

import com.hms.user_service.entity.Users;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private Long id;
    private String username;
    private String email;
    private String password;
    private String role;

    public Users toEntity() {
        return new Users(this.id, this.username, this.email, this.password, this.role);
    }
}
