
// Decorator class
import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

// Selector is a custom HTML tag. Template has the HTML code 
@Component({
    selector: 'courses',
    template: '<h2>{{title}}</h2><ul>{{courses}}</ul>'
})


// Main class of component, you can define attributes and methods here
export class CoursesComponent{
    title="List of courses opted";
    courses;
    constructor (service: CoursesService){
        this.courses=service.getCourseList();
    }
}