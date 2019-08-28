import { Component, OnInit } from '@angular/core';
// import { IProfile } from '../defines/IProfile.interface';
import { SpotifyService } from '../services/spotify.service';


@Component({
  selector: 'github-component',
  templateUrl: './../template/artist.component.html'
})
export class ArtistComponent implements OnInit {

  constructor(
    private _spotifyService: SpotifyService
  ) { }

  ngOnInit() {

  }

  

}
