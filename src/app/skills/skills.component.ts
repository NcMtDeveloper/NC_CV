import { Component, OnInit } from '@angular/core';
import { AddressService } from '../Services/address.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss',
    '../cssAnimations/EscapeRevealing.scss',
    '../cssAnimations/FlipUpEachWord.scss',
    '../cssAnimations/imageAndText.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private address: AddressService) { }

  detailsAddress = this.address.router.details;

  frontEndAbilities = this.address.frontEndAbilities;
  backEndAbilities = this.address.backEndAbilities;
  SQLAbilities = this.address.SQLAbilities;

  ngOnInit(): void {
  }

}
