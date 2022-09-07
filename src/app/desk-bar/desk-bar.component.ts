import { Component, OnInit } from '@angular/core';
import { AddressService } from '../Services/address.service';
import { themeService } from '../Services/themeService';

@Component({
  selector: 'app-desk-bar',
  templateUrl: './desk-bar.component.html',
  styleUrls: ['./desk-bar.component.scss']
})
export class DeskBarComponent implements OnInit {

  IsLight = false;

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
