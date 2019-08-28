import { Component, OnInit } from '@angular/core';
import { CourseListService } from '../services/course-list.service';
import { ICourse } from '../defines/ICourse.interface';


@Component({
  selector: 'course-list-component',
  templateUrl: './../template/course-list.component.html'
})
export class CourseListComponent implements OnInit {

  courses: ICourse[];
  selectedCourse: ICourse;

  constructor(
    private _courseListService: CourseListService
  ) { }

  ngOnInit() {
    this.getAllCourses()
  }

  getAllCourses() {
    this._courseListService.getAllCourses().subscribe(
      (data: ICourse[]) => this.courses = data
    )
  }

  changeToFree(course: ICourse) {
    course.free = !course.free;
    this.editItem(course);
  }


  editItem(course: ICourse) {
    this._courseListService.editItem(course).subscribe(
      (data: ICourse) => this.updateCourseFromArray(data)
    )
  }

  deleleCourse(id: number) {
    this._courseListService.deleteCourse(id).subscribe(
      (data: ICourse) => this.removeCourseFromArray(id)
    )
  }

  addCourse(name:string,description: string, isFree: boolean){
    let course:ICourse = {
      name: name,
      description: description,
      free:isFree
    }
    this._courseListService.addItem(course).subscribe(
      (data: ICourse) => this.pushCourseToArray(data)
    )
    
  }

  editCourse(id:number, name:string,description: string, isFree: boolean){
    let course:ICourse = {
      id:id,
      name:name,
      description: description,
      free:isFree
    }
    this._courseListService.editItem(course).subscribe(
      (data: ICourse) => this.updateCourseFromArray(data)
    ) 
    this.selectedCourse = null;
  }


  private pushCourseToArray(course: ICourse) {
      this.courses.push(course)
  }


  private updateCourseFromArray(course: ICourse) {
    let length = this.courses.length;
    for (let i = 0; i < length; i++) {
      if (this.courses[i].id == course.id) {
        this.courses[i] = course;
        break;
      }
    }
  }

  private removeCourseFromArray(id: number) {
    let length = this.courses.length;
    for (let i = 0; i < length; i++) {
      if (this.courses[i].id == id) {
        this.courses.splice(i,1);
        break;
      }
    }
  }


}
