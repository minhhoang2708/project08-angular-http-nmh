import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { GithubComponent } from './components/github.component';
import { GithubRoutingModule } from './github-routing.module';
import { GithubService } from './services/github.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        GithubRoutingModule,
        FormsModule,
        HttpClientModule,
        ],
    declarations: [
        GithubComponent

    ],
    exports: [GithubComponent],
    providers: [GithubService],
})
export class GitHubModule { }