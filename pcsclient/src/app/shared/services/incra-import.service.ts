import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { TokenmanagemnetService } from './tokenmanagemnet.service';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/constant/data.constant';

@Injectable({
  providedIn: 'root'
})
export class IncraImportService {

  constructor(private httpClient:HttpClient,private tokenManagement:TokenmanagemnetService,private contants:Constants) { }

  doIncraImport(file:string,value,id:string,scheduleName,parameterGot:string):Observable<HttpEvent<{}>>{
    let formData:FormData=new FormData();
    formData.append('incraFile',file);
    formData.append('schedule',scheduleName);
    formData.append('remarks',value.remarks);
    formData.append('job',value.job);
    formData.append('idFetc',id);
    formData.append('parameters',parameterGot);
    
    let token=this.getToken();
    const header=new HttpHeaders({
      'Authorization':token
    });
    const req=new HttpRequest('POST',this.contants.INCRA_IMPORT_WIZARD_UPLOAD_INCRAFILE,formData,{
      headers:header,
      reportProgress:true,
      responseType:'text'
    });

    return this.httpClient.request(req);
  }

  getParameter(file:File,filename){
    let formDatas:FormData=new FormData();
    formDatas.append('incraFile',file);
    formDatas.append('filename',filename);
    let token=this.getToken();
    const header=new HttpHeaders({
      'Authorization':token
    });
    return this.httpClient.post(this.contants.INCRA_IMPORT_WIZARD_GET_PARAMETER,formDatas,{headers:header});
  }

  cancelIncra(file:string,id:string){
    let formDatas:FormData=new FormData();
    formDatas.append('incraFile',file);
    formDatas.append('idFetc',id);
    let token=this.getToken();
    const header=new HttpHeaders({
      'Authorization':token
    });
    return this.httpClient.post(this.contants.INCRA_IMPORT_WIZARD_DELETE_INCRATEMP_FILE,formDatas,{headers:header});
  }

  getToken(){
    let token=this.tokenManagement.getToken();
    return "Bearer "+token;
  }
}
