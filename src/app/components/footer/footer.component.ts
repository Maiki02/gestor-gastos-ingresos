import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NAVEGATION } from 'src/app/shared/const/navegation';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public NAVEGATION=NAVEGATION;
  constructor(private router:Router){}

  goTo(route:string){
    this.router.navigate(['/'+route]);
  }
}
