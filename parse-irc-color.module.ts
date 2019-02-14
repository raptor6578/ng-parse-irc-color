import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParseIrcColorPipe } from './parse-irc-color.pipe';

@NgModule({
  declarations: [ParseIrcColorPipe],
  imports: [
    CommonModule
  ],
  exports: [ParseIrcColorPipe]
})
export class ParseIrcColorModule { }
