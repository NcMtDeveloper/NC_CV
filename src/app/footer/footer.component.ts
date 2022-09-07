import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AddressService } from '../Services/address.service';
import { themeService } from '../Services/themeService';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public currentRoute;

  IsLight: boolean = false;

  constructor(private address: AddressService,
    private theme:themeService) { }

  detailsAddress = this.address.router.details;
  chatAddress = this.address.router.chat;
  skillAddress = this.address.router.skill;
  homeAddress = this.address.router.main;

  ngOnInit(): void { 
    this.IsLight = this.theme.themeChanger();
  }

}
