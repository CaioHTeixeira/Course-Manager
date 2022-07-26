import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
   templateUrl: './course-add.component.html' 
})

export class CourseAddComponent {

    course: Course = new Course;

    constructor(private activateRoute: ActivatedRoute, private courseService: CourseService) {}

    saveCourse(): void {
        this.courseService.saveCourse(this.course).subscribe({
            next: course => console.log('Added with success', course),
            error: err => console.log('Error', err)
        })
    }
}