package com.fatoriais.apirest.models;
import java.math.BigInteger;

public class Fatorial {
	
	private int id;
	
	private int number;
	private BigInteger factorial;
	
	public int getId() {
		return id;
	}
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	public BigInteger getFactorial() {
		return factorial;
	}
	public void setFactorial(BigInteger factorial) {
		this.factorial = factorial;
	}
}
