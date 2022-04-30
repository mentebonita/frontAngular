import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicioPeru',
  templateUrl: './inicioPeru.component.html',
  styleUrls: ['./inicioPeru.component.scss']
})
export class InicioPeruComponent implements OnInit {
  crearUsuario: FormGroup;
  submitted = false;
  constructor(private fb:FormBuilder) {
    this.crearUsuario= this.fb.group({
      nombres: ['',Validators.required],
      apellidos: ['',Validators.required],
      correo: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  ngOnInit() {
  }

  agregarUsuario(){
    console.log(this.crearUsuario);
  }
}
