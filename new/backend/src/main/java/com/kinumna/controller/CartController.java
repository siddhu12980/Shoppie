package com.kinumna.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kinumna.service.CartService;

@RestController
@RequestMapping("/api/v1/cart")
public class CartController {
    
    @Autowired
    private CartService cartService;

    
}
