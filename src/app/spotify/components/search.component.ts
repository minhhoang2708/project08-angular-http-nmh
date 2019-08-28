import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { IArtist } from '../defines/IArtist.interface';


@Component({
  selector: 'github-component',
  templateUrl: './../template/search.component.html'
})
export class SearchComponent implements OnInit {
  userName: string;
  isDisableButton: boolean =  true;
  artists: IArtist[];


  constructor(
    private _spotifyService: SpotifyService
  ) { }

  ngOnInit() {

  }
  updateActiveButton(name: string){
    this.isDisableButton = true;
    if(name.length > 4){
      this.isDisableButton = false;
    }
  }

  loadArtist(){
    console.log("loadArtist()");
    this.searchArtist();

  }

  searchArtist(){
    this._spotifyService.searchArtist(this.userName).subscribe(
      (data: any) => this.artists= data
    )
  }



  
}
