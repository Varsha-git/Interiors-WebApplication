package com.prograd.interior.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.prograd.interior.dao.CategoryRepository;
import com.prograd.interior.model.Category;

@CrossOrigin(origins = "http://localhost:4500")
@RestController

public class CategoryController 
{
	
	@Autowired
	CategoryRepository categoryRepository;

	@GetMapping("/test")
	public String demo() {
		System.out.println(categoryRepository);
		return "testing";
	}
	
	
	@PostMapping("addCategory")
	public String addCategory(@RequestBody Category category) {
		categoryRepository.save(category);
		return "Category Added SuccessFully";
	}

	
	@GetMapping("/getCategorys")
	public List<Category> getCategorys() {
		return categoryRepository.findAll();
	}

	
	@GetMapping("/getCategory/{id}")
	public Category getCategoryById(@PathVariable("id") int id) {
		return categoryRepository.findById(id).orElse(null);
	}
	
	
	@PutMapping("updateCategory")
	public String updateCategory(@RequestBody Category category) {
		Optional<Category> existingCategory = categoryRepository.findById(category.getCategoryId());
		if (existingCategory.isPresent()) {
			existingCategory.get().setCategoryName(category.getCategoryName());
			return "Category Updated SuccessFully";
		} else
			return "Category Not Found With that id";
	}
	
	
	@DeleteMapping("/deleteCategory/{id}")
	public String deleteCategoryById(@PathVariable("id") int id) 
	{
		categoryRepository.deleteById(id);
		return "Category Deleted Successfully";
	}

	
	@DeleteMapping("/emptyCategory")
	public String emptyCategorys() 
	{
		categoryRepository.deleteAll();
		return "Categorys Deleted Successfully";
	}
	
}
