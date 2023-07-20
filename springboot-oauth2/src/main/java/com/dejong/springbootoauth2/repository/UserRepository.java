package com.dejong.springbootoauth2.repository;


import com.dejong.springbootoauth2.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UserRepository extends JpaRepository<User,Long>{

    Optional<User>findByEmail(String email);
}
