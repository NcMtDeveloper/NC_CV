import { Injectable } from '@angular/core';
import { contains } from 'jquery';

@Injectable({
    providedIn: 'root'
})
export class themeService {

    constructor() { }

    public themeChanger() {
        let currentKey = localStorage.getItem("theme");
        if (currentKey == "dark") {
            return false;
        } else if (currentKey == "light") {
            return true
        } else {
            localStorage.setItem("theme", "dark");
            return false;
        }
    }

    public addTheme() {
        // console.log(localStorage.getItem("theme"));
        let currentKey = localStorage.getItem("theme");
        if (currentKey == "light") {
            // localStorage.removeItem("theme");
            localStorage.setItem("theme", "dark");
        } else if (currentKey == "dark") {
            // localStorage.removeItem("theme");
            localStorage.setItem("theme", "light");
        }else{
            // localStorage.removeItem("theme");
            localStorage.setItem("theme", "dark");
        }
    }
}
