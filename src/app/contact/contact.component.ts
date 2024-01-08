import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public goToHome(){
    window.scrollTo(0, 0);
  }
  public goToCar(){
    window.scrollTo(0, 950);
  }
  public goToAbout(){
    window.scrollTo(0, 2650);
  }
  public goToContact(){
    window.scrollTo(0, 3600);
  }
}
