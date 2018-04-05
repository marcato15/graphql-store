"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require("graphql");

var _mongodb = require("mongodb");

var _product = require("./product");

var _product2 = _interopRequireDefault(_product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mutations = new _graphql.GraphQLObjectType({
    name: 'Mutations',
    fields: function fields() {
        return {
            addProduct: {
                type: _product2.default,
                args: {
                    title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
                    desc: { type: _graphql.GraphQLString },
                    price: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLFloat) }
                },
                resolve: function resolve(obj, product, _ref) {
                    var db = _ref.db;
                    var products, newProduct, doc;
                    return regeneratorRuntime.async(function resolve$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    products = db.collection("documents");
                                    _context.next = 3;
                                    return regeneratorRuntime.awrap(products.insertOne(product));

                                case 3:
                                    newProduct = _context.sent;
                                    _context.next = 6;
                                    return regeneratorRuntime.awrap(products.findOne({ "_id": new _mongodb.ObjectID(newProduct.insertedId) }));

                                case 6:
                                    doc = _context.sent;
                                    return _context.abrupt("return", doc);

                                case 8:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, null, this);
                }
            },
            updateProduct: {
                type: _product2.default,
                args: {
                    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
                    title: { type: _graphql.GraphQLString },
                    desc: { type: _graphql.GraphQLString },
                    price: { type: _graphql.GraphQLFloat }
                },
                resolve: function resolve(obj, product, _ref2) {
                    var db = _ref2.db;
                    var products, updateResult, doc;
                    return regeneratorRuntime.async(function resolve$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    products = db.collection("documents");

                                    console.log("product", product);
                                    _context2.next = 4;
                                    return regeneratorRuntime.awrap(products.updateOne({ "_id": new _mongodb.ObjectID(product.id) }, { $set: product }));

                                case 4:
                                    updateResult = _context2.sent;
                                    _context2.next = 7;
                                    return regeneratorRuntime.awrap(products.findOne({ "_id": new _mongodb.ObjectID(product.id) }));

                                case 7:
                                    doc = _context2.sent;
                                    return _context2.abrupt("return", doc);

                                case 9:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, null, this);
                }
            },
            deleteProduct: {
                type: _graphql.GraphQLString,
                args: { id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) } },
                resolve: function resolve(obj, _ref3, _ref4) {
                    var id = _ref3.id;
                    var db = _ref4.db;
                    var products, deleteResult;
                    return regeneratorRuntime.async(function resolve$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    products = db.collection("documents");
                                    _context3.next = 3;
                                    return regeneratorRuntime.awrap(products.deleteOne({ "_id": new _mongodb.ObjectID(id) }));

                                case 3:
                                    deleteResult = _context3.sent;
                                    return _context3.abrupt("return", deleteResult.result.ok);

                                case 5:
                                case "end":
                                    return _context3.stop();
                            }
                        }
                    }, null, this);
                }
            }
        };
    }
});

exports.default = Mutations;