"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressGraphql = require("express-graphql");

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _mongodb = require("mongodb");

var _schema = require("./schema");

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MONGO_URL = 'mongodb://store:store@ds163796.mlab.com:63796/products';

var start = function _callee() {
    var db, app;
    return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return regeneratorRuntime.awrap(_mongodb.MongoClient.connect(MONGO_URL));

                case 3:
                    db = _context.sent;
                    app = (0, _express2.default)();


                    app.use((0, _cors2.default)());
                    app.use(_bodyParser2.default.json());

                    app.use('/graphql', (0, _expressGraphql2.default)({
                        schema: _schema2.default,
                        graphiql: true,
                        context: {
                            db: db
                        }
                    }));

                    app.listen(4000, function () {
                        console.log("Server listening on port 4000");
                    });

                    _context.next = 14;
                    break;

                case 11:
                    _context.prev = 11;
                    _context.t0 = _context["catch"](0);

                    console.log(_context.t0);

                case 14:
                case "end":
                    return _context.stop();
            }
        }
    }, null, undefined, [[0, 11]]);
};

exports.default = start;