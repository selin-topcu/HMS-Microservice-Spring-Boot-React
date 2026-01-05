package com.hms.user_service.entity;

import com.hms.user_service.dto.Roles;
import com.hms.user_service.dto.UserDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    @Column(unique = true)
    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Roles role; // e.g., ADMIN, DOCTOR, PATIENT

    public UserDto toDto() {
        return new UserDto(this.id, this.username, this.email, this.password, this.role);
    }
}
