package com.example.QuestionsMS.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Questions")
public class Question {
    @Id
    private String id;
    private String email;
    private String name;
    private String question;
}

