import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import {NavService} from './nav.service';
import { Menu }           from './menu';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers : [NavService]
})
export class NavComponent implements OnInit {
  menuLeft : Menu[];
  isNavbarCollapsed : boolean;
  constructor(private navService : NavService,private translate: TranslateService) { 
    this.isNavbarCollapsed = true;
  }
  toggleMenu() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
    var a = document.getElementsByTagName("audio")[0];
    a.play();
  }

}
