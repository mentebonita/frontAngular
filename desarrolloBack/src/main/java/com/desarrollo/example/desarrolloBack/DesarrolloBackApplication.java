package com.desarrollo.example.desarrolloBack;

import com.desarrollo.example.desarrolloBack.Component.ComponentPersona;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DesarrolloBackApplication implements CommandLineRunner {

	private ComponentPersona compPersona;
	public DesarrolloBackApplication(ComponentPersona compPersona){
		this.compPersona= compPersona;
	}
	public static void main(String[] args) {
		SpringApplication.run(DesarrolloBackApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		compPersona.agregar();
	}
}
