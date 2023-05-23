import { Component, OnInit } from '@angular/core';
import { LoginformService } from '../loginform.service';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private LoginFormService: LoginformService) { }

  ngOnInit() {
  }

}
