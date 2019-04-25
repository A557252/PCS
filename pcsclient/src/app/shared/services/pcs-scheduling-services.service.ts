import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenmanagemnetService } from './tokenmanagemnet.service';
import { Constants } from 'src/app/constant/data.constant';

@Injectable({
  providedIn: 'root'
})
export class PcsSchedulingServicesService {

  constructor(private httpClient:HttpClient,private tokenManagement:TokenmanagemnetService,private constants:Constants) { }

  getAllPcsSchedulingData(from:number,to:number){
    let token=this.getToken();
    const header=new HttpHeaders({
      'Authorization':token
    });
    return this.httpClient.get(this.constants.PCS_BATCH_SCHEDULING_DATA+"/"+from+"/"+to,{headers:header});

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
    return this.httpClient.get(this.constants.PCS_BATCH_SCHEDULING_COUNT,{headers:header});
  }

}
