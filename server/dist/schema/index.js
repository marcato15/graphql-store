'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _rootQuery = require('./rootQuery');

var _rootQuery2 = _interopRequireDefault(_rootQuery);

var _mutations = require('./mutations');

var _mutations2 = _interopRequireDefault(_mutations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = new _graphql.GraphQLSchema({
  query: _rootQuery2.default,
  mutation: _mutations2.default
});

exports.default = schema;