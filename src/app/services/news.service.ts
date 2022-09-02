import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsReponse } from '../interfaces';

const apiKey = environment.apiKey;
const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getTopHeadLines (page:number,category:string){
   return this.http.get<NewsReponse>(`${url}/top-headlines`,{
    params : { 
apiKey:apiKey,
category:category,
country: `us`,
page:page
    }
    })
 }

}
