import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

  formulario = this.fb.group({
    usuario:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required]]
  });

  enviarDatos(){
    if (this.formulario.valid) {
      console.log(this.formulario.value)
    }
  }
 

}
