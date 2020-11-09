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
import com.prograd.interior.dao.ProductRepository;
import com.prograd.interior.model.Category;
import com.prograd.interior.model.Product;



@CrossOrigin(origins = "http://localhost:4500")
@RestController
public class ProductController {

	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	CategoryRepository categoryRepository;

	
	@PostMapping("/addProduct/{id}")
	public String addProduct(@RequestBody Product product, @PathVariable("id") int categoryId ) {
		Optional<Category> category = categoryRepository.findById(categoryId);
		if (category.isPresent()) {
			product.setCategory(category.get());
			productRepository.save(product);
			return "Product Added SuccessFully";
		} else
			return "Category Not Found,So Product Cannot be Added";
	}
	
	
	@GetMapping("/getProducts")
	public List<Product> getProducts() {
		System.out.println(productRepository);
		System.out.println(productRepository.findAll());
		return productRepository.findAll();
	}
	
	@GetMapping("/getProducts/{id}")
	public Product getProductById(@PathVariable("id") int id) {
		return productRepository.findById(id).orElse(null);
	}
	
	
	@PutMapping("/updateProduct")
	public String updateProduct(@RequestBody Product product) {
		Optional<Product> existingProduct = productRepository.findById(product.getProductId());
		if (existingProduct.isPresent()) {
			existingProduct.get().setName(product.getName());
			existingProduct.get().setQuantity(product.getQuantity());
			existingProduct.get().setImageUrl(product.getImageUrl());
			return "Product Updated SuccessFully";
		} else
			return "Product Not Found With that id";
	}
	
	@DeleteMapping("/deleteProduct/{id}")
	public String deleteProductById(@PathVariable("id") int id) {
		productRepository.deleteById(id);
		return "Product Deleted Successfully";
	}

	@DeleteMapping("/emptyProduct")
	public String emptyProduct() {
		productRepository.deleteAll();
		return "Products Deleted Successfully";
	}

}
