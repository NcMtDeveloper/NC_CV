import { Component, OnInit } from '@angular/core';
import { themeService } from '../Services/themeService';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})
export class BottomComponent implements OnInit {

  constructor(private theme: themeService) { }

  IsLight: boolean = false;

  ngOnInit(): void {
    this.IsLight = this.theme.themeChanger();

  }

}
