package com.example.FeedbackMS.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Feedback")
public class feedback {
    @Id
    private String id;
    private String email;
    private String feedback;
}
