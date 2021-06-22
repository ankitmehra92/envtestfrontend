import { Component } from '@angular/core';
import { CrudService } from './app.service';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'envtestfrontend';
  envVar:String = "";
  constructor(private service:CrudService)
  {

  }

  ngOnInit()
  {
    this.service.getData().subscribe(data =>{
      this.envVar = moment().format('DD/MM/YYYY hh:mm')+ " " +data;
    });
  }
}
