import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { userInterface } from 'src/app/modelos/user.interface';
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.sass']
})
export class NuevoComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  createUser(form:userInterface){
    this.api.createUser(form)
  }

}
