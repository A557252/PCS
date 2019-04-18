import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenmanagemnetService } from './tokenmanagemnet.service';

@Injectable({
  providedIn: 'root'
})
export class PcsSchedulingServicesService {

  constructor(private httpClient:HttpClient,private tokenManagement:TokenmanagemnetService) { }

  getAllPcsSchedulingData(){
    let token=this.getToken();
    const header=new HttpHeaders({
      'Authorization':token
    })
    this.httpClient.get("http://localhost:9000/batchscheduling/pcsschedule",{headers:header}).subscribe(
      (response:any)=>{
        return response.result;
      }
    )
  }

  getToken(){
    let token=this.tokenManagement.getToken();
    return "Bearer "+token;
  }

  getPcsRowCount(){
    let token=this.getToken();
    const header=new HttpHeaders({
      'Authorization':token
    })
    return this.httpClient.get("http://localhost:9000/batchscheduling/pcscount",{headers:header});
  }

}
