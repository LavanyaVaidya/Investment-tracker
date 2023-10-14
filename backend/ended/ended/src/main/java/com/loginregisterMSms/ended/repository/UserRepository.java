package com.loginregisterMSms.ended.repository;

import com.loginregisterMSms.ended.model.CustomUser;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.bson.types.ObjectId;

public interface UserRepository extends MongoRepository<CustomUser,Integer> {
    CustomUser findByUserName(String username);
}
