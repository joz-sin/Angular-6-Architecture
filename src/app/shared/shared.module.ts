import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileSizePipe } from './pipes/file-size.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FileSizePipe]
})
export class SharedModule { }
