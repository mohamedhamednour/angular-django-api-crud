import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  footerAbout: any = [
    '../assets/img/silk-tie-2846862_960_720.jpg',
    '../assets/img/silk-tie-2846862_960_720.jpg',
    '../assets/img/silk-tie-2846862_960_720.jpg',
  ];
  textDiv: any = [
    {
      text: 'what we Do',
      title:
        'It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using  that it has a more-or-less normal.',
      buttonText: 'Our Concept',
      image: '../assets/img/cardss2.jpg',
      nested: {
        text: 'The End Result',
        title:
          'It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using  that it has a more-or-less normal.',
        buttonText: 'Our profile',
        image: '../assets/img/song.png',
      },
    },
  ];
}
