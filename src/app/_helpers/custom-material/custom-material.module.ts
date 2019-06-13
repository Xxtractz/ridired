import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule, MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CustomMaterialModule { }
