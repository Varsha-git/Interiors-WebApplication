package com.prograd.interior.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prograd.interior.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
