import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';



@Component({
  selector: 'github-component',
  templateUrl: './../template/album.component.html'
})
export class AlbumComponent implements OnInit {




  constructor(
    private _githubService: SpotifyService
  ) { }

  ngOnInit() {

  }


  

}
