import { Component, OnInit, ElementRef } from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

    skills: any[];
    // private d3: D3;
    // private parentNativeElement: any;

    // constructor(element: ElementRef, d3Service: D3Service) { // <-- pass the D3 Service into the constructor
    //     this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
    //     this.parentNativeElement = element.nativeElement;
    // }

    constructor(){}

    ngOnInit() {
        this.skills = [
            { name: "JavaScript", percent: "c100 p90 small", value: "90" },
            { name: "Angular (Js & 6+)", percent: "c100 p60 small", value: "60" },
            { name: "HTML & CSS", percent: "c100 p90 small", value: "90" },
            { name: "Bootstrap", percent: "c100 p80 small", value: "80" },
            { name: "Ionic", percent: "c100 p60 small", value: "60" },
            { name: "Docker", percent: "c100 p30 small", value: "30" },
            { name: "Java", percent: "c100 p90 small", value: "90" },
            { name: "Spring Boot Framework", percent: "c100 p70 small", value: "70" },
            { name: "C#", percent: "c100 p70 small", value: "70" },
            { name: "SQL, NoSQL", percent: "c100 p90 small", value: "90" },
            { name: "Git", percent: "c100 p70 small", value: "70" },
            { name: "Python", percent: "c100 p30 small", value: "30" },
            { name: "SAPUI5", percent: "c100 p80 small", value: "80" },            
            { name: "Web Development", percent: "c100 p80 small", value: "80" },
            { name: "Microsoft Azure Env", percent: "c100 p60 small", value: "60" }
        ];

        // let d3 = this.d3;
        // let d3ParentElement: Selection<any, any, any, any>;
        
        // if (this.parentNativeElement !== null) {

        //     d3ParentElement = this.d3.select(this.parentNativeElement);

        //     console.log(this.d3, "d3");

        //     // Do more D3 things 

        // }
    }
}
