package com.prograd.interior.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prograd.interior.model.Cart;

public interface CartRepository extends JpaRepository<Cart, Integer> {

}
