import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery'
import { AddressService } from '../Services/address.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['../cssAnimations/animate.scss',
    './details.component.scss',
    './timeline.scss',
    './details.mediaQuery.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private router: ActivatedRoute,
    private address: AddressService) { }

  public logoAddress = this.address.logos

  ngOnInit(): void {
    let queryParams;

    // debugger;

    this.router.queryParams.forEach((member) => {
      queryParams = member['selected']
    })
    var active = document.getElementsByClassName(queryParams);
    active[0].classList.add('active')
    active[0].classList.remove('deactive')

    var option = [].slice.call(document.getElementsByClassName('option'));
    option.forEach((element) => {
      element.classList.add('deactive')
      if (element.classList.contains('active')) {
        element.classList.remove('active')
        element.classList.add('cv-blend')
        element.querySelector('.option-content').classList.add('cv-showing');
      }
      if (element.classList.contains(queryParams)) {
        element.classList.add('active')
        // .add('displayNotActive')
        element.children.item(0).classList.remove('displayNotActive');
        element.children.item(1).classList.add('position-sticky');


        element.classList.remove('deactive')

      }
    });
    document.querySelectorAll('.deactive').forEach(element => {
      element.children.item(0).classList.add('displayNotActive');
      element.children.item(1).classList.remove('position-sticky');
    });

  }

  openUrl(event: Event) {
    let img = event.target as HTMLElement;
    let linkTag = img.parentNode as HTMLElement;
    let link = linkTag.getAttribute('href');

    window.open(link, "_blank")

  }

  optionActive(event: Event) {

    let target = event.target as HTMLElement;

    if (!target.classList.contains('active') && !target.classList.contains('break')) {
      return false;
    }

    var option = [].slice.call(document.getElementsByClassName('option'));

    option.forEach(element => {
      element.classList.remove('cv-blend')
    });
    target.classList.add('cv-blend')
    target.classList.remove('deactive')


    document.querySelectorAll(".option").forEach((member) => {
      member.classList.remove('active')
      member.classList.add('deactive')
      member.querySelectorAll('.option-content').forEach((child) => {
        child.classList.remove('cv-showing')
      });
    })




    target.classList.add("active")
    target.classList.remove('deactive')
    setTimeout(() => {
      target.querySelector('.option-content').classList.add('cv-showing');
    }, 1);

    document.querySelectorAll(".active").forEach((member) => {
      member.children.item(1).classList.remove('position-sticky')
      setTimeout(() => {
        member.children.item(0).classList.remove('displayNotActive')
        member.children.item(1).classList.add('position-sticky')
      }, 500);
    })
    document.querySelectorAll(".deactive").forEach((member) => {
      member.children.item(1).classList.add('position-sticky')
      member.children.item(0).classList.add('displayNotActive')
      setTimeout(() => {
        member.children.item(1).classList.remove('position-sticky')
      }, 500);
    })
    return true
  }

  public AdditionalCard = this.address.AdditionalCard
  public expTimeline = this.address.expTimeline
  public timeLine = this.address.timeLine
}
