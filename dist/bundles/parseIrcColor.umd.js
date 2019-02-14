(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/platform-browser'], factory) :
    (global = global || self, factory(global['parse-irc-color'] = {}, global.vendor._angular_core, global.vendor._angular_common, global.vendor._angular_browser));
}(this, function (exports, core, common, platformBrowser) { 'use strict';

    var IrcColor = /** @class */ (function () {
        function IrcColor() {
        }
        IrcColor.parseColor = function (colorCode) {
            switch (colorCode) {
                case 0:
                    return 'white';
                case 1:
                    return 'black';
                case 2:
                    return 'navy';
                case 3:
                    return 'green';
                case 4:
                    return 'red';
                case 5:
                    return 'maroon';
                case 6:
                    return 'purple';
                case 7:
                    return 'orange';
                case 8:
                    return 'yellow';
                case 9:
                    return 'lime';
                case 10:
                    return 'teal';
                case 11:
                    return 'aqua';
                case 12:
                    return 'blue';
                case 13:
                    return 'fuchsia';
                case 14:
                    return 'gray';
                case 15:
                    return 'silver';
            }
        };
        return IrcColor;
    }());

    var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (undefined && undefined.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
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
                    var isAColor = colorMatch ? colorMatch[0] : '';
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
            core.Pipe({ name: 'ircColor' }),
            __metadata("design:paramtypes", [platformBrowser.DomSanitizer])
        ], ParseIrcColorPipe);
        return ParseIrcColorPipe;
    }());

    var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var ParseIrcColorModule = /** @class */ (function () {
        function ParseIrcColorModule() {
        }
        ParseIrcColorModule = __decorate$1([
            core.NgModule({
                declarations: [ParseIrcColorPipe],
                imports: [
                    common.CommonModule
                ],
                exports: [ParseIrcColorPipe]
            })
        ], ParseIrcColorModule);
        return ParseIrcColorModule;
    }());

    exports.ParseIrcColorModule = ParseIrcColorModule;
    exports.ParseIrcColorPipe = ParseIrcColorPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
