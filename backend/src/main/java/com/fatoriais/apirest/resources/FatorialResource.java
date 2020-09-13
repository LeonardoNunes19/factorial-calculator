package com.fatoriais.apirest.resources;

import java.math.BigInteger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fatoriais.apirest.models.Fatorial;
import com.fatoriais.apirest.repository.FatorialRepository;

@RestController
@RequestMapping(value="/api")
@CrossOrigin(origins="*")
public class FatorialResource {
	
	@PostMapping("/fatorial")
	public Fatorial realizaFatorial(@RequestBody Fatorial factorial) {
		int number = factorial.getNumber();
		
		int i = 1;
		BigInteger fact = BigInteger.ONE;
		
		for(i= 1 ;i<=number;i++) {
			fact = fact.multiply(BigInteger.valueOf(i));
		}
		factorial.setFactorial(fact);
		return factorial;
	}
}
