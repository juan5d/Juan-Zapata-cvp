import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { userInterface } from 'src/app/modelos/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  usuarios:userInterface[] | any;

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAllUser().subscribe(data =>{
      this.usuarios=data;
      console.log(data)
    });
  }


}
