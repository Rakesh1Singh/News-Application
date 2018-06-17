import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
  	  private http: Http
  	  //HttpClient
  	) { }

  getNews(sectionName){
  	
  	var url = 'https://api.nytimes.com/svc/topstories/v2/';
  	var end = '.json?api-key=315a5a51483b469a918246dc2753b339';
  	url = url + sectionName + end;

  	return this.http
  	.get(url)
    .map((res: Response) => res.json().results)
    .catch(error => Observable.throw("Error in x service"));;
  }
  
}
