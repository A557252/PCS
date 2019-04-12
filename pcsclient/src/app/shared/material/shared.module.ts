import { NgModule } from '@angular/core';
import { CardLayoutComponent } from '../components/card-layout/card-layout.component';
import { MaterialModule } from './material.module';

@NgModule({
    declarations: [
        CardLayoutComponent
    ],
    exports: [
        CardLayoutComponent,
        MaterialModule,
    ],
    imports: [
        MaterialModule,
    ]
})
export class SharedModule { }
