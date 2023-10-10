package com.loginregisterMSms.ended.resource;

import com.loginregisterMSms.ended.model.AuthRequest;
import com.loginregisterMSms.ended.model.CustomUser;
import com.loginregisterMSms.ended.repository.UserRepository;
import com.loginregisterMSms.ended.util.JwtUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import com.loginregisterMSms.ended.service.SequenceGeneratorService;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3002")
public class UserResource {private static final Logger logger = LoggerFactory.getLogger(UserResource.class);

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;

    @PostMapping("/addUser")
    private String saveUser(@RequestBody CustomUser customuser)
    {
        customuser.setId(sequenceGeneratorService.generateSequence(CustomUser.SEQUENCE_NAME));
        userRepository.save(customuser);
        return "User registration successful!!";
    }

    @GetMapping("/getUsers")
    private List<CustomUser> getUsers()
    {
        return userRepository.findAll();
    }

    @GetMapping("/getUsers/{id}")
    public Optional<CustomUser> getUserName(@PathVariable int id){
        {return userRepository.findById(id);}
    }
    @PostMapping("/authenticate")
    public String generateToken(@RequestBody AuthRequest authRequest) throws Exception{
        logger.debug("Received authentication request for username: {}", authRequest.getUserName());
        logger.debug("Received authentication request with password: {}", authRequest.getPassword());

        try{
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUserName(),authRequest.getPassword()
                    ));
        }
        catch (Exception e) {
            throw  new Exception("Invalid Username/Password");
        }

        return jwtUtil.generateToken(authRequest.getUserName());

    }
}