import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerSerivce : HeaderService) { }

  ngOnInit(): void {
  }

  get title() : string {
    return this.headerSerivce.headerData.title
  }

  get icon() : string {
    return this.headerSerivce.headerData.icon
  }

  get routeUrl() : string {
    return this.headerSerivce.headerData.routeUrl
  }

}
