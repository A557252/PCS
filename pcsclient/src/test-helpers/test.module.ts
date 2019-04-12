import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationServiceMock } from './AuthenticationServiceMock';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@NgModule({

    imports:[
        ReactiveFormsModule,FormsModule,HttpClientTestingModule,RouterTestingModule
    ],
    declarations:[],
    providers:[
        {provide:AuthenticationService,useClass:AuthenticationServiceMock}
    ],
    exports:[
        ReactiveFormsModule,FormsModule,HttpClientTestingModule,RouterTestingModule
    ]

})

export class TestModule{}