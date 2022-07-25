import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit{
    
    course: Course = new Course;

    constructor(private activateRoute: ActivatedRoute, private courseService: CourseService) {}
    
    ngOnInit(): void {
        
        const id: number = this.activateRoute.snapshot.paramMap.get('id') as string 
            ? Number(this.activateRoute.snapshot.paramMap.get('id')) : -1;

        this.courseService.retrieveById(id).subscribe({
            next: course => this.course = course,
            error: err => console.log('Error', err)
        });
    }

    save(): void {
        this.courseService.save(this.course).subscribe({
            next: course => console.log('Saved with success', course),
            error: err => console.log('Error', err)
        });
    }
}