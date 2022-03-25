import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import {RouterModule} from '@angular/router';
import{ HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable'; import { map } from 'rxjs/operators';



const Routes = [
  {
    path: '',
    redirecTo: 'posts',
    pathMatch: 'full'
  },
    {
      path:'posts', component: PostsComponent
    }
];
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    Observable,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(Routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
