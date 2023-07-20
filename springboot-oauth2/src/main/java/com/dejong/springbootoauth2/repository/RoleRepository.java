package com.dejong.springbootoauth2.repository;

import com.dejong.springbootoauth2.models.ERole;
import com.dejong.springbootoauth2.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
