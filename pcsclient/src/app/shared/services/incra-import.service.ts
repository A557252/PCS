import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { TokenmanagemnetService } from './tokenmanagemnet.service';

@Injectable({
  providedIn: 'root'
})
export class IncraImportService {

  constructor(private httpClient:HttpClient,private tokenManagement:TokenmanagemnetService) { }

  doIncraImport(file:File){
    let formData:FormData=new FormData();
    formData.append('incraFile',file);

    let token=this.getToken();
    const header=new HttpHeaders({
      'Authorization':token
    });
    return this.httpClient.post('http://localhost:9000/wizards/incraupload',formData,{
      headers:header,
      reportProgress:true,
      responseType:'text'
    })

  }

  getToken(){
    let token=this.tokenManagement.getToken();
    return "Bearer "+token;
  }
}
