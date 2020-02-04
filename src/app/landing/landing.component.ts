import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
      private matIconRegistry: MatIconRegistry,
      private safeUrl: DomSanitizer
  ) { 
    this.matIconRegistry.addSvgIcon(
      "jamtechlogo",
      this.safeUrl.bypassSecurityTrustResourceUrl("../../assets/images/jamtech-logo-blue.svg")
    );
  }

  ngOnInit() {
  }

}
