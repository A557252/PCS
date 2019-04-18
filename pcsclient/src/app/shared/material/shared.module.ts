import { NgModule } from '@angular/core';
import { CardLayoutComponent } from '../components/card-layout/card-layout.component';
import { MaterialModule } from './material.module';
import { TableComponent } from '../components/table-klm/table.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CardLayoutComponent,
        TableComponent
    ],
    exports: [
        CardLayoutComponent,
        MaterialModule,
        CommonModule,
        TableComponent
    ],
    imports: [
        MaterialModule,
        CommonModule
    ]
})
export class SharedModule { }