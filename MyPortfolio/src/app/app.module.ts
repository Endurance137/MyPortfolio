import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ImageComponent } from './image/image.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { Project3Component } from './project3/project3.component';
import { SkillsComponent } from './skills/skills.component';

/**
 * Services
 */
import { GithubService } from './github.service';
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import {MatGridListModule,MatGridTile} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { D3Service } from 'd3-ng2-service';
import { ArtsComponent } from './arts/arts.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    SocialLinksComponent,
    Project3Component,
    TabsComponent,
    SkillsComponent,
    ArtsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatSidenavModule,
    MatTabsModule
  ],
  providers: [GithubService, D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
