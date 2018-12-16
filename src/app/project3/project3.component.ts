import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ViewEncapsulation } from '@angular/core';
import { GithubService } from '../github.service';
import { Project } from '../gitProject';
import { Observable } from 'rx';

@Component({
  selector: 'app-project3',
  templateUrl: './project3.component.html',
  styleUrls: ['./project3.component.css']
})
export class Project3Component implements OnInit, AfterViewInit {

  projects: Project[];
  username: string;

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
    this.username = 'Samin-Asnaashari';
    this.getProjectsWithLanguages(this.username);
  }

  @ViewChildren('projectLoop') things: QueryList<any>;
  ngAfterViewInit() {
    this.things.changes.subscribe(t => {
      this.ngForRendred();
    })
  }

  ngForRendred() {
    // define variables
    var items = document.querySelectorAll(".timeline li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  }

  public getProjectsWithLanguages(username: string) {
    return this._githubService.getProjectsWithLanguages(username).subscribe((data) => {
      this.projects = data;
    });
  }

}