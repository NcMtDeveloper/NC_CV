import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { animationService } from '../cssAnimations/animation.service';
import { AddressService } from '../Services/address.service';

@Component({
    selector: 'app-main-cv',
    templateUrl: './main-cv.component.html',
    styleUrls: ['./main-cv.component.scss',
        '../cssAnimations/rotatingWords.scss',
        '../cssAnimations/TextReveal.scss',
        '../cssAnimations/hoverToShow.scss',
        '../cssAnimations/gradientColor.scss',
        '../cssAnimations/SingleFlip.scss',
        '../cssAnimations/AnyAnimations.scss']
})
export class MainCVComponent implements OnInit {

    constructor(private animService: animationService, private renderer: Renderer2,
        private address: AddressService) { }

    biographyAddress = this.address.router.biography
    skillsAddress = this.address.router.skill

    private false = "JHJHvkh527GFHGxHG27FGfHGF45578hgf";
    falsing() {
        return this.false
    }

    public isDesktop: boolean = this.address.isDesktop;
    public detailsAddress = this.address.router.details;
    public skillLogo = this.address.logos.filter(c => c.Type === "front" || c.Type === "back");

    public profession: string[] = [
        'FullStack Developer',
        '.NET programmer',
        'T-SQL Programmer',
        'FrontEnd Developer',
        'Google lover',
        'PhotoShop Designer',
        'Javascript fan',
        'BackEnd Developer',
        'C# programmer',
        'Unity Student'
    ]
    //don`t forget changing "rotatingWords.scss" ----> "count"

    //   @ViewChild('words', { static: true }) words: ElementRef;
    @ViewChild('words', { static: true }) words: ElementRef;
    @ViewChild('introProMain', { static: true }) introProMain: ElementRef;
    @ViewChild('introIam', { static: true }) introIam: ElementRef;

    /*brands */
    @ViewChild('linkedin', { static: true }) linkedin: ElementRef;
    @ViewChild('email', { static: true }) email: ElementRef;
    @ViewChild('instagram', { static: true }) instagram: ElementRef;


    ngOnInit(): void {
        var height = this.introIam.nativeElement.offsetHeight
        this.renderer.setStyle(this.introProMain.nativeElement, "height", height + "px")
    }


    // hoverLink(event: Event, value: string) {
    //     let nativeElement
    //     switch (value) {
    //         case 'linkedin':
    //             nativeElement = this.linkedin.nativeElement
    //             break;
    //         case 'email':
    //             nativeElement = this.email.nativeElement
    //             break;
    //         case 'instagram':
    //             nativeElement = this.instagram.nativeElement
    //             break;
    //         default:
    //             break;
    //     }
    //     this.renderer.removeClass(nativeElement, 'unhover')
    //     this.renderer.addClass(nativeElement, 'AnimHG')
    // }

    // unhoverLink(event: Event, value: string) {
    //     let nativeElement
    //     switch (value) {
    //         case 'linkedin':
    //             nativeElement = this.linkedin.nativeElement
    //             break;
    //         case 'email':
    //             nativeElement = this.email.nativeElement
    //             break;
    //         case 'instagram':
    //             nativeElement = this.instagram.nativeElement
    //             break;
    //         default:
    //             break;
    //     }
    //     this.renderer.addClass(nativeElement, 'unhover')
    //     this.renderer.removeClass(nativeElement, 'AnimHG')
    // }
}
