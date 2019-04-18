import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenmanagemnetService } from './tokenmanagemnet.service';

@Injectable({
  providedIn: 'root'
})
export class FsdSchedulingServicesService {

  constructor(private httpClient:HttpClient,private tokenManagement:TokenmanagemnetService) { }

  getAllFsdSchedulingData(from:number,to:number){
    let token=this.getToken();
    const header=new HttpHeaders({
      'Authorization':token
    })
    console.log("http://localhost:9000/batchscheduling/fsdschedule/"+from+"/"+to);
    return this.httpClient.get("http://localhost:9000/batchscheduling/fsdschedule/"+from+"/"+to,{headers:header});
  }

  getToken(){
    let token=this.tokenManagement.getToken();
    return "Bearer "+token;
  }

  getFsdRowCount(){
    let token=this.getToken();
    const header=new HttpHeaders({
      'Authorization':token
    })
    return this.httpClient.get("http://localhost:9000/batchscheduling/fsdcount",{headers:header});
  }
}
