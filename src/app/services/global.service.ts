import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  getResponse: any;
  eventResponse: any;
  eventBySlug: any;

  constructor(private http: HttpClient) { }

  getEvents(params: any){
    const apiUrl = 'https://api.trlkrosaki.com/v1/media-and-publications/events';
    
    let httpParams = new HttpParams();
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.set(key, params[key]);
      }
    }
    return new Promise((resolve,reject)=>{
      this.getResponse = this.http.get(apiUrl, { params: httpParams });
      this.getResponse.subscribe((data: any)=>{
        this.eventResponse = data;
        resolve(this.eventResponse);
      }, (error: any)=>{
        reject(error);
      }
    )
    })
  }

  getEventBySlug(slug: string){
    const detailsApi = 'https://api.trlkrosaki.com/v1/media-and-publications/event-details';
    const params = new HttpParams().set('slug', slug).set('language', 'en');

    return new Promise((resolve,reject)=>{
       this.http.get(detailsApi, { params: params }).subscribe(
        (response: any)=>{                
          resolve(response);
        }, (error: any) => {
          reject(error)
        }
       );
      });
    } 

}
