"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
var IndexController = /** @class */ (function () {
    function IndexController() {
    }
    IndexController.prototype.index = function (req, res) {
        res.send({ Text: 'API Is /api/games' });
    };
    return IndexController;
}());
exports.indexController = new IndexController();
