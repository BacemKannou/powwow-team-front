import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PictureService } from 'src/app/services/picture.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  imageSource;
  headers;

  constructor(private sanitizer: DomSanitizer, private httpClient : HttpClient, private auth : AuthenticationService, private pictureService: PictureService) {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
   }
  selectedFile: File; 
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.pictureService.uploadPicture(uploadImageData);
  }
    //Gets called when the user clicks on retieve image button to get the image from back end
    async getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.pictureService.getPicture().subscribe(
      res => {
        console.log(res);
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse?.picByte;
        this.retrievedImage = 'data:image/png;base64,' + this.base64Data;
      }
    );
  }

  async ngOnInit () {
    await this.getImage();
    console.log(this.retrievedImage);
    this.imageSource =this.retrievedImage;
  }

}
