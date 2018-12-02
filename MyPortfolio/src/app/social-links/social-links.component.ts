import { Component, OnInit, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
    selector: 'social-links',
    templateUrl: './social-links.component.html',
    styleUrls: ['./social-links.component.css']
})

export class SocialLinksComponent implements OnInit {
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
            'github',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
        iconRegistry.addSvgIcon(
            'linkedin',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
        iconRegistry.addSvgIcon(
            'telegram',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/telegram.svg'));
        iconRegistry.addSvgIcon(
            'skype',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/skype.svg'));
        iconRegistry.addSvgIcon(
            'microsoftoutlook',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/microsoftoutlook.svg'));
        iconRegistry.addSvgIcon(
            'youtube',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/youtube.svg'));
        iconRegistry.addSvgIcon(
            'facebook',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook.svg'));
        iconRegistry.addSvgIcon(
            'instagram',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg'));
    }

    ngOnInit() {
    }

    socialBtnNavTo(link: string) {
        window.location.href = link;
    }

}
