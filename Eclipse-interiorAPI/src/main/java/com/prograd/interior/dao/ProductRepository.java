package com.prograd.interior.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prograd.interior.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

}
