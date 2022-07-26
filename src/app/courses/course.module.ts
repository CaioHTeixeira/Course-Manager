import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReplacePipe } from "../pipe/replace.pipe";
import { StarComponent } from "../star/star.component";
import { CourseAddComponent } from "./course-add.component";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
        CourseAddComponent,
        ReplacePipe,
        StarComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
            },
            {
                path: 'courses/add', component: CourseAddComponent
            },
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            }
        ])
    ]
})

export class CourseModule {}