import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenmanagemnetService } from './tokenmanagemnet.service';

@Injectable({
  providedIn: 'root'
})
export class PcsSchedulingServicesService {

  constructor(private HttpClient:HttpClient,private tokenManagement:TokenmanagemnetService) { }

  getAllPcsSchedulingData(){
    let token=this.getToken();
    const header=new HttpHeaders({
      'Authorization':token
    })
    return this.HttpClient.get("http://localhost:9000/batchscheduling/pcsschedule",{headers:header});
  }

  getToken(){
    let token=this.tokenManagement.getToken();
    return "Bearer "+token;
  }
}
