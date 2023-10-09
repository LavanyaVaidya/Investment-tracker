package com.loginregisterMSms.ended.resource;

import com.loginregisterMSms.ended.model.CustomUser;
import com.loginregisterMSms.ended.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.loginregisterMSms.ended.service.SequenceGeneratorService;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3002")
public class UserResource {
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
    public Optional<CustomUser> getUser(@PathVariable int id){
        {return userRepository.findById(id);}
    }
}