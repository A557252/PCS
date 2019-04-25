import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationServiceMock } from './AuthenticationServiceMock';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { TokenmanagemnetService } from 'src/app/shared/services/tokenmanagemnet.service';
import { TokenManagementServiceMock } from './TokenManagementServiceMock';

@NgModule({

    imports:[
        ReactiveFormsModule,FormsModule,HttpClientTestingModule,RouterTestingModule
    ],
    declarations:[],
    providers:[
        {provide:AuthenticationService,useClass:AuthenticationServiceMock},
        {provide:TokenmanagemnetService,useClass:TokenManagementServiceMock}
    ],
    exports:[
        ReactiveFormsModule,FormsModule,HttpClientTestingModule,RouterTestingModule
    ]

})

export class TestModule{}