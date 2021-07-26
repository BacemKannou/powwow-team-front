import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  public host: string ="http://localhost:8080/";
  message: string;
  headers
  constructor(private httpClient : HttpClient) {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
   }

  uploadPicture(uploadImageData : FormData){
    this.httpClient.post('http://localhost:8080/Picture/upload',{ uploadImageData ,headers :this.headers}, { observe: 'response' })
    .subscribe((response) => {
      if (response.status === 200) {
        this.message = 'Image uploaded successfully';
      } else {
        this.message = 'Image not uploaded successfully';
      }
    }
    );
  }

  getPicture(){
    let params = new HttpParams().set('userId','5'); //Create new HttpParams
  
    return this.httpClient.get('http://localhost:8080/Picture/get',  { headers :this.headers,params:params  });
  }
}
