package com.desarrollo.example.desarrolloBack.Component;

import org.springframework.stereotype.Component;

@Component //Siempre en la clase
public class ComponentPersona implements ImplementPersona {
    @Override
    public void agregar() {
        System.out.println("Agregando Persona");
    }
}
