import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { CarousselComponent } from "../caroussel/caroussel.component";
import { ServicesComponent } from "../services/services.component";
import { CoursesComponent } from "../courses/courses.component";
import { CategoriesComponent } from "../categories/categories.component";

@Component({
  selector: 'app-home',
  imports: [AboutComponent, CarousselComponent, ServicesComponent, CoursesComponent, CategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
