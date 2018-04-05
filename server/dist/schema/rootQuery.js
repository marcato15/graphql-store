"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require("graphql");

var _mongodb = require("mongodb");

var _product = require("./product");

var _product2 = _interopRequireDefault(_product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RootQuery = new _graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: function fields() {
        return {
            products: {
                type: new _graphql.GraphQLList(_product2.default),
                resolve: function resolve(obj, args, _ref) {
                    var db = _ref.db;
                    var cursor, docs;
                    return regeneratorRuntime.async(function resolve$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return regeneratorRuntime.awrap(db.collection("documents").find());

                                case 2:
                                    cursor = _context.sent;
                                    _context.next = 5;
                                    return regeneratorRuntime.awrap(cursor.toArray());

                                case 5:
                                    docs = _context.sent;
                                    return _context.abrupt("return", docs);

                                case 7:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, null, this);
                }
            },
            product: {
                type: _product2.default,
                args: { id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) } },
                resolve: function resolve(obj, _ref2, _ref3) {
                    var id = _ref2.id;
                    var db = _ref3.db;
                    var doc;
                    return regeneratorRuntime.async(function resolve$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.next = 2;
                                    return regeneratorRuntime.awrap(db.collection("documents").findOne({ "_id": new _mongodb.ObjectID(id) }));

                                case 2:
                                    doc = _context2.sent;
                                    return _context2.abrupt("return", doc);

                                case 4:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, null, this);
                }
            }
        };
    }
});

exports.default = RootQuery;