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
export default IrcColor;
//# sourceMappingURL=irc-color.js.map