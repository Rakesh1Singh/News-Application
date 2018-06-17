import { Component, OnInit } from '@angular/core';

import { NewsService } from 'src/app/Service/news.service';
import { Observable, of } from 'rxjs';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
constructor(private newservice : NewsService) { }

 sectionItem = ['home','opinion','world','national','politics','business','technology','science','health','sports','arts','books','movies','theater','fashion','food','travel','magazine'];
 	news;
  // vm = this;
   //this.news = [];

  loadNews(sectionName){
  
  	this.newservice.getNews(sectionName).subscribe(data => this.news = data);
  	console.log(this.news);
  }

  //news={};
  //news: Observable<any[]>;
 // news;
  ngOnInit() {
  
 
   var sectionName = 'home';
  	this.newservice.getNews(sectionName).subscribe(data => {this.news = data;  console.log(data);});

  	console.log(this.news);
 
  }

}
