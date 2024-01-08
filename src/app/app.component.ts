import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  public goToCar() : void{
    window.scrollTo(0, 950);
  }
  public goToAbout() : void{
    window.scrollTo(0, 2470);
  }
  public goToContact() : void{
    window.scrollTo(0, 3600);
  }
}

