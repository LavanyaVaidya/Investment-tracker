package com.loginregisterMSms.ended.service;

import com.loginregisterMSms.ended.model.SequenceId;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

@Service
public class SequenceGeneratorService {

    private final MongoOperations mongoOperations;

    public SequenceGeneratorService(MongoOperations mongoOperations) {
        this.mongoOperations = mongoOperations;
    }

    public int generateSequence(String seqName) {
        Query query = new Query(Criteria.where("_id").is(seqName));
        Update update = new Update().inc("seq", 1);
        FindAndModifyOptions options = new FindAndModifyOptions().returnNew(true);

        SequenceId sequenceId = mongoOperations.findAndModify(query, update, options, SequenceId.class);

        if (sequenceId == null) {
            sequenceId = new SequenceId();
            sequenceId.setId(seqName);
            sequenceId.setSeq(1);
            mongoOperations.save(sequenceId);
        }

        return sequenceId.getSeq();
    }
}
