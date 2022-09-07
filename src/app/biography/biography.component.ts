import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from '../Services/address.service';
import { themeService } from '../Services/themeService';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss',
    '../cssAnimations/SingleFlip.scss',]
})
export class BiographyComponent implements OnInit {

  IsLight: boolean = false;

  constructor(private address: AddressService,
    private activeRoute: ActivatedRoute,
    private renderer: Renderer2,
    private router: Router,
    private theme: themeService) { }

  selectedLanguage;
  textChangeLanguage;
  BioText;
  BioTitle;
  changeLanguage = this.address.router.biography;
  @ViewChild('bioMain', { static: true }) bioMain: ElementRef
  @ViewChild('bioTop', { static: true }) bioTop: ElementRef
  @ViewChild('bioTopTranslate', { static: true }) bioTopTranslate: ElementRef
  @ViewChild('profile', { static: true }) profile: ElementRef

  ngOnInit(): void {

    this.IsLight = this.theme.themeChanger();

    this.changingLanguage()


  }
  changingLanguage() {
    let language;
    this.activeRoute.queryParams.forEach((member) => {
      language = member['language']
    });

    if (language === "Per") {
      this.BioText = this.address.BioPer
      this.BioTitle = this.address.bioPerTitle;
      this.textChangeLanguage = "Change to English!"
      this.changeLanguage = this.address.router.biography
      this.selectedLanguage = "Eng"
      this.renderer.addClass(this.bioMain.nativeElement, "cv-bio-persian")
      this.renderer.addClass(this.bioTopTranslate.nativeElement, "cv-bio-english")
      this.renderer.addClass(this.bioTop.nativeElement, "cv-bio-persian")
      this.renderer.addClass(this.profile.nativeElement, "profile-image-reflect")
    } else if (language === "Eng") {
      this.BioText = this.address.BioEng
      this.BioTitle = this.address.bioEngTitle
      this.textChangeLanguage = "تغییر به فارسی!"
      this.selectedLanguage = "Per"
      this.renderer.addClass(this.bioMain.nativeElement, "cv-bio-english")
      this.renderer.addClass(this.bioTopTranslate.nativeElement, "cv-bio-persian")
      this.renderer.addClass(this.bioTop.nativeElement, "cv-bio-english")
      this.renderer.removeClass(this.profile.nativeElement, "profile-image-reflect")
    }
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.address.router.biography], { queryParams: { language: this.selectedLanguage } });
  }

}
