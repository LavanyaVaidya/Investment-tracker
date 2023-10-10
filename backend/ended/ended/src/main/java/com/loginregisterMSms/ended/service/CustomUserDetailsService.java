package com.loginregisterMSms.ended.service;

import com.loginregisterMSms.ended.model.CustomUser;
import com.loginregisterMSms.ended.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class CustomUserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        CustomUser user = userRepository.findByUserName(username);

        if (user == null) {
            throw new UsernameNotFoundException("User not found with Username: " + username);
        }

        // You can return an empty list of authorities (roles) since you don't have any roles
        return new org.springframework.security.core.userdetails.User(
                user.getUserName(),
                user.getPassword(),
                Collections.emptyList() // Empty list of authorities
        );
    }
}
