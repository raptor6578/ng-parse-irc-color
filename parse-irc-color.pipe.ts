import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import IrcColor from './irc-color';
import {IParseColor} from './parse-irc-color';

@Pipe({name: 'ircColor'})

export class ParseIrcColorPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(input: string) {
    const strings = input.split(String.fromCharCode(3));
    if (strings.length > 1) {
      const parseColor: IParseColor = {};
      let indexWord = 0;
      for (const string of strings) {
        const color = string.substr(0, 5);
        const colorSplit = color.split(' ')[0];
        const colorMatch = colorSplit.match(/^\D*(\d+(?:\,\d+)?)/gm);
        const isAColor = colorMatch ? colorMatch[0] : null || '';
        const colorCodes = isAColor.split(',');
        let indexCode = 0;
        for (const colorCode of colorCodes) {
          if (colorCode) {
            if (indexCode === 0) {
              parseColor.ircColorCode = colorCodes[0];
              parseColor.htmlColorCode = IrcColor.parseColor(Number(colorCode));
            }
            if (indexCode === 1) {
              parseColor.ircColorCode = colorCodes[0] + ',' + colorCodes[1];
              parseColor.htmlColorCodeBackground = IrcColor.parseColor(Number(colorCode));
            }
            if (colorCodes.length === indexCode + 1 && parseColor.ircColorCode) {
              const wordWithoutColorCode = string.replace(parseColor.ircColorCode, '');
              strings[indexWord] = `<span style="color:${parseColor.htmlColorCode};`;
              if (parseColor.htmlColorCodeBackground) {
                strings[indexWord] += `background-color:${parseColor.htmlColorCodeBackground};`;
              }
              strings[indexWord] += `">${wordWithoutColorCode}</span>`;
            }
          }
          indexCode++;
        }
        indexWord++;
      }
      return this.sanitizer.bypassSecurityTrustHtml(strings.join(''));
    } else {
      return input;
    }
  }
}
