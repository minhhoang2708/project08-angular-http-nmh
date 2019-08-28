import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { IProfile } from '../defines/IProfile.interface';


@Component({
  selector: 'github-component',
  templateUrl: './../template/github.component.html'
})
export class GithubComponent implements OnInit {

  userName: string;
  isDisableButton: boolean = true;
  profileInFo: any;
  listRepos: any[];


  constructor(
    private _githubService: GithubService
  ) { }

  ngOnInit() {

  }

  loadUser() {
    this.getUser();
    this.getRepos();
  }

  getUser() {
    this._githubService.getUser(this.userName).subscribe(
      (data: any) => {
        console.log(data);
        this.profileInFo = data
      }
    )
  }

  getRepos() {
    this._githubService.getRepo(this.userName).subscribe(
      (data: any) => {
        this.listRepos = data
        console.log(this.listRepos)
      }
    )
  }

  updateActiveButton() {
    this.isDisableButton = true;
    if (this.userName.length > 5) {
      this.isDisableButton = false
    }

  }






}
