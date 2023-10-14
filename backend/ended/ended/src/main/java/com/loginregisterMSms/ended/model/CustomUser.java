package com.loginregisterMSms.ended.model;


import lombok.Generated;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Service;
@Getter
@Setter
@ToString
@Document(collection = "User")
public class CustomUser {

    @Id
    private int id;

    private String userName;
    private String email;
    private String password;
    public static final String SEQUENCE_NAME = "customuser_sequence";
}
