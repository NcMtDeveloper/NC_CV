import { AfterContentChecked,  Component, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector'
import { AddressService } from './Services/address.service';
import { themeService } from './Services/themeService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../fonts.scss']
})
export class AppComponent implements OnInit, AfterContentChecked {
  title = 'Amir';

  showOverlay: boolean = true

  currentRoute: string;
  constructor(private deviceDetect: DeviceDetectorService,
    private router: Router,
    private address: AddressService,
    private theme: themeService) {


    this.currentRoute = this.address.router.main;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        this.SetPreviousRoute(this.currentRoute)
        this.currentRoute = event.url;

      }
    });

  }
  ngAfterContentChecked(): void {
      this.showOverlay = false;
  }

  private previousRoute

  allowDesk: boolean = false;
  allowMobile: boolean = false;

  SetPreviousRoute(data) {
    this.previousRoute = data;
  }
  public GetpreviousRoute() {
    return this.previousRoute;
  }

  IsLight: boolean = false;

  ngOnInit(): void {

    this.IsLight = this.theme.themeChanger();

    if (this.IsLight) {
      document.getElementsByTagName("body")[0].classList.add("light", "lightColor", "lightBackGround");
    } else {
      document.getElementsByTagName("body")[0].classList.add("dark", "darkColor", "darkBackGround");
    }


    if (this.deviceDetect.isDesktop()) {
      this.allowMobile = false
      this.allowDesk = true
      this.address.isDesktop = true;
    } else {
      this.allowMobile = true
      this.allowDesk = false
      this.address.isDesktop = false;
    }
  }

  GoBack() {

    let questionIndex = this.previousRoute.indexOf('?')
    let queryParams: string
    let queryParamName: string
    let queryParamVal: string
    let routerPure: string

    if (questionIndex !== undefined && questionIndex !== -1) {
      routerPure = this.previousRoute.substring(0, questionIndex)
      queryParams = this.previousRoute.substring(questionIndex + 1, 200);
      queryParamName = queryParams.substring(0, queryParams.indexOf('='));
      queryParamVal = queryParams.substring(queryParams.indexOf('=') + 1, 200);
    }
    if (queryParamVal !== undefined) {
      if (routerPure === '/biography') {

        if (this.currentRoute === '/biography') {
          this.router.navigate(['/main'])
        } else {
          this.router.navigate(['/biography'], { queryParams: { language: queryParamVal } })
        }
      } else {
        this.router.navigate([routerPure], { queryParams: { selected: queryParamVal } })
      }
    } else {
      this.router.navigate([this.previousRoute])
    }
  }
}
