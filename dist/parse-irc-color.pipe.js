var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import IrcColor from './irc-color';
var ParseIrcColorPipe = /** @class */ (function () {
    function ParseIrcColorPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ParseIrcColorPipe.prototype.transform = function (input) {
        var strings = input.split(String.fromCharCode(3));
        if (strings.length > 1) {
            var parseColor = {};
            var indexWord = 0;
            for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
                var string = strings_1[_i];
                var color = string.substr(0, 5);
                var colorSplit = color.split(' ')[0];
                var colorMatch = colorSplit.match(/^\D*(\d+(?:\,\d+)?)/gm);
                var isAColor = colorMatch ? colorMatch[0] : null || '';
                var colorCodes = isAColor.split(',');
                var indexCode = 0;
                for (var _a = 0, colorCodes_1 = colorCodes; _a < colorCodes_1.length; _a++) {
                    var colorCode = colorCodes_1[_a];
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
                            var wordWithoutColorCode = string.replace(parseColor.ircColorCode, '');
                            strings[indexWord] = "<span style=\"color:" + parseColor.htmlColorCode + ";";
                            if (parseColor.htmlColorCodeBackground) {
                                strings[indexWord] += "background-color:" + parseColor.htmlColorCodeBackground + ";";
                            }
                            strings[indexWord] += "\">" + wordWithoutColorCode + "</span>";
                        }
                    }
                    indexCode++;
                }
                indexWord++;
            }
            return this.sanitizer.bypassSecurityTrustHtml(strings.join(''));
        }
        else {
            return input;
        }
    };
    ParseIrcColorPipe = __decorate([
        Pipe({ name: 'ircColor' }),
        __metadata("design:paramtypes", [DomSanitizer])
    ], ParseIrcColorPipe);
    return ParseIrcColorPipe;
}());
export { ParseIrcColorPipe };
//# sourceMappingURL=parse-irc-color.pipe.js.map