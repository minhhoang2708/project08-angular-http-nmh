import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// component 
import { AlbumComponent } from './components/album.component';
import { SearchComponent } from './components/search.component';
import { ArtistComponent } from './components/artist.component';

//service
import { SpotifyService } from './services/spotify.service';
import { SpotifyRoutingModule } from './sporify-routing.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        SpotifyRoutingModule
        ],
    declarations: [
        AlbumComponent,
        SearchComponent,
        ArtistComponent
    ],
    exports: [SearchComponent],
    providers: [SpotifyService],
})
export class SpotifyModule { }