import { Component, OnInit } from '@angular/core';
import { ICourse } from '../defines/course.interface';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'courselist',
  templateUrl: './../template/courses-list.component.html'
})
export class CoursesListComponent implements OnInit {
  courses: ICourse[] = [];
  course: ICourse;


  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getItems()
  }

  getItems() {

    this._httpService.getItems().subscribe(
      (data: ICourse[]) => this.courses = data
    )

  }

  getItem(id: number) {
    this._httpService.getItemById(id).subscribe(
      (data: ICourse) => console.log(data)
    )
  }

  addItem() {
    let courseItem = {
      name: 'abcs',
      description: 'xyzssss'
    }

    this._httpService.addItem(courseItem).subscribe(
      (data: ICourse) => this.courses.push(data)
    )

  }

  editItem(id: number) {
    let courseItems = {
      name: 'abcs- editname',
      description: 'edit-description'
    }

    this._httpService.editItem(id, courseItems).subscribe(
      (data: ICourse) => {
        let vitri = this.getViTriCourseInCoursesList(data);
        this.courses[vitri] = data;
      }
    )

  }

  deleteItem(id: number) {
    this._httpService.deleteItem(id).subscribe(
        (data: ICourse) => { this.getItems();
          // let id = data.id;
          // let total = this.courses.length;
          // for (let i = 0; i < total; i++) {
          //   if (this.courses[i].id === id ) {
          //     this.courses.slice(1, i);
          //       break;
          //     }
          // } 
        }
    )
  }

  getViTriCourseInCoursesList(item) {
    let total = this.courses.length;
    for (let i = 0; i < total; i++) {
      if (this.courses[i].id === item.id) { return i}
    }
    return -1;
  }




}
