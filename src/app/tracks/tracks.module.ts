import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TracksRoutingModule,
        FormsModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent
    ]
})
export class TracksModule { }