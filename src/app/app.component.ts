import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestAngular';
   ableGod = "Able God of All gods"
  gabriel = {
      name :'Gabriel Nzete',
      age : '42 years',
      office:'Computer Technology'
  }

  name:any;
  parentReceiveFromChild(data)
  {
    this.name= data
  }

}
