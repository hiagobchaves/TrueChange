import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'trueChange-Challenge';

  blogs: any[] = [
    { foto: '../assets/image/image-place.svg', titulo: 'News Title', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    { foto: '../assets/image/image-place.svg', titulo: 'News Title', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    { foto: '../assets/image/image-place.svg', titulo: 'News Title', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  ]

}
