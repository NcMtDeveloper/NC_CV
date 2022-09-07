import { Component, OnInit } from '@angular/core';
import { AddressService } from '../Services/address.service';
import { themeService } from '../Services/themeService';

@Component({
  selector: 'app-mobile-bar',
  templateUrl: './mobile-bar.component.html',
  styleUrls: ['./mobile-bar.component.scss']
})
export class MobileBarComponent implements OnInit {

  IsLight: boolean = false;

  constructor(private address: AddressService,
    private theme:themeService) { }

  mainAddress = this.address.router.main

  ngOnInit(): void {
    this.IsLight = this.theme.themeChanger();
  }

  addTheme(){
    this.theme.addTheme();
    window.location.reload();
  }
}
