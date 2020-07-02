import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  HEROES: Hero[] = [
    { id: 11, name: 'Tony Stark', img: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2020/06/avengers-endgame-real-reason-behind-iron-man-robert-downey-jrs-death-after-wearing-thanos-gauntlet-will-leave-you-teary-eyed-yet-again-0001.jpg", img2: "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/06/All-19-Iron-Man-Suit-Versions-Tony-Stark-Wore-In-The-MCU.jpg?q=50&fit=crop&w=960&h=500" },
    { id: 12, name: 'Steve Rogers', img: "https://cdn.vox-cdn.com/thumbor/Z4yyRrPenLpg0ExhHpetrveJiuY=/0x0:2034x1356/1200x800/filters:focal(0x0:2034x1356)/cdn.vox-cdn.com/uploads/chorus_image/image/46293074/Avengers254d1158022f16-2040.0.0.jpg", img2: "https://cdns.klimg.com/kapanlagi.com/p/headline/476x238/ini-alasan-kenapa-captain-america-dibua-87ae07.jpg" },
    { id: 13, name: 'Thor', img: "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/08/21/Pictures/_3e50f016-a53a-11e8-8a41-d1a200222336.jpg", img2: "https://www.slashfilm.com/wp/wp-content/images/avengers-endgame-thor-hammer-axe.jpg" },
    { id: 14, name: 'Hulk', img: "https://cdn.flickeringmyth.com/wp-content/uploads/2018/09/hulk-hiding-1126252-1280x0-600x338.jpg", img2: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Frobcain%2Ffiles%2F2017%2F07%2FHulk.jpg" },
    { id: 15, name: 'Black Widow', img: "https://www.hindustantimes.com/rf/image_size_1200x900/HT/p2/2019/11/29/Pictures/_66d491ea-1272-11ea-a64f-e20fcd3bbcc8.jpg", img2: "https://www.hindustantimes.com/rf/image_size_1200x900/HT/p2/2020/05/03/Pictures/_91ad5416-8d0f-11ea-8bae-d48e751bd032.jpg" },
    { id: 16, name: 'Hawkeye', img: "https://cnet4.cbsistatic.com/img/dGRCHAdIfeevaIO3PPumCgneQ2Y=/940x0/2017/08/03/26d21d88-1244-4704-a426-7a09c2b7ece0/marvelinfinitywar-hawkeye.jpg", img2: "https://www.hindustantimes.com/rf/image_size_1200x900/HT/p2/2019/04/14/Pictures/_b928d83c-5ea1-11e9-93dc-bd285d0e4b85.jpg" },
    { id: 17, name: 'Doctor Strange', img: "https://i.gadgets360cdn.com/large/Doctor_Strange_review_2016_Marvel_Benedict_Cumberbatch_1478164719257.jpeg", img2: "https://i.guim.co.uk/img/media/1775b026f630c019a2955b35d991c996be4bf0c9/0_0_5359_3215/master/5359.jpg?width=1200&quality=85&auto=format&fit=max&s=17e7de2844b370aefbdd1e6194985836" },
    { id: 18, name: 'Captain Marvel', img: "https://m.media-amazon.com/images/M/MV5BODlhOGM4MGMtYjBjMi00MWQ2LTk4OWUtYzQ2YzE0NWZkODlkXkEyXkFqcGdeQW1yb3NzZXI@._V1_CR251,0,1419,798_AL_UY268_CR84,0,477,268_AL_.jpg", img2: "https://img.cinemablend.com/quill/8/3/e/9/5/4/83e9540e7e76943e0df2689b1fcfcc54efbe2602.jpg" },
    { id: 19, name: 'Spiderman', img: "https://images.indianexpress.com/2019/07/spidey-far-from-home-1200.jpg", img2: "https://img.cinemablend.com/filter:scale/quill/6/6/2/0/1/7/6620174df16feed666145b18f4596a0b8a421467.jpg?fw=1200" },
    { id: 20, name: 'Thanos', img: "https://thumbs-prod.si-cdn.com/yxWBFyE-K5y94iPJZ2ixYKfQd-Q=/1072x720/filters:no_upscale():focal(582x120:583x121)/https://public-media.si-cdn.com/filer/d6/7d/d67d186f-f5f3-4867-82c5-2c772120304f/thanos-snap-featured-120518-2.jpg", img2: "https://sc01.alicdn.com/kf/HTB15BJIX4rvK1RjSszeq6yObFXaR/228714741/HTB15BJIX4rvK1RjSszeq6yObFXaR.jpg_.webp" }
  ];

    heroes = this.HEROES;
    selectedHero: Hero;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
