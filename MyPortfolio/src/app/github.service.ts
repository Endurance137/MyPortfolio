import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/publishLast';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getProject(username: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}/repos?sort=update&type=all`,
      { responseType: 'json' });
  }

  getLanguages(username: string, repo: string): Observable<any> {
    return this.http.get(`https://api.github.com/repos/${username}/${repo}/languages`,
      { responseType: 'json' });
  }

  getProjectsWithLanguages(username: string): Observable<any[]> {
    return this.getProject(username)
      .map((res: any) => {
        console.log(res, "response");
        return res;
      })
      .flatMap((projects: any[]) => {
        if (projects.length > 0) {
          return Observable.forkJoin(
            projects.map((project: any) => {
              return this.getLanguages(username, project.name)
                .map((res: any) => {
                  let languages: any = res;
                  project.languages = Object.keys(languages);
                  return project;
                });
            })
          );
        }
        return Observable.of([]);
      });
  }

}


