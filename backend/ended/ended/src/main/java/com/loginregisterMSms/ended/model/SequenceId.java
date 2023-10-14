package com.loginregisterMSms.ended.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "sequence")
public class SequenceId {
    @Id
    private String id;
    private int seq;

    public int getSeq() {
        return seq;
    }
}
