import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
const materialComponents = [MatInputModule,MatFormFieldModule,MatIconModule]

@NgModule({
  exports: [materialComponents],
  imports: [ materialComponents]
})
export class MaterialModule { }
