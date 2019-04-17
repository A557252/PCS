import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { TokenmanagemnetService } from './tokenmanagemnet.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncraImportService {

  constructor(private httpClient:HttpClient,private tokenManagement:TokenmanagemnetService) { }

  doIncraImport(file:File,value,id:string):Observable<HttpEvent<{}>>{
    let formData:FormData=new FormData();
    formData.append('incraFile',file);
    formData.append('schedule',value.scheduleName);
    formData.append('remarks',value.remarks);
    formData.append('job',value.job);
    formData.append('idFetc',id);
    
    let token=this.getToken();
    const header=new HttpHeaders({
      'Authorization':token
    });
    const req=new HttpRequest('POST','http://localhost:9000/wizards/incraupload',formData,{
      headers:header,
      reportProgress:true,
      responseType:'text'
    });

    return this.httpClient.request(req);
  }

  getParameter(file:File){
    let formDatas:FormData=new FormData();
    formDatas.append('incraFile',file);
    let token=this.getToken();
    const header=new HttpHeaders({
      'Authorization':token
    });
    return this.httpClient.post('http://localhost:9000/wizards/incraGetParameters',formDatas,{headers:header});
  }

  getToken(){
    let token=this.tokenManagement.getToken();
    return "Bearer "+token;
  }
}
