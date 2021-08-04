"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeConstant = exports.sortOrderConstant = exports.localConstant = exports.densityConstant = void 0;
const densityConstant = {
  compact: 'compact',
  default: 'default',
  comfort: 'comfort'
};
exports.densityConstant = densityConstant;
const localConstant = {
  en: 'en',
  de: 'de'
};
exports.localConstant = localConstant;
const sortOrderConstant = {
  asc: 'asc',
  desc: 'desc'
};
exports.sortOrderConstant = sortOrderConstant;
const typeConstant = {
  text: 'text',
  number: 'number',
  date: 'date',
  dateTime: 'dateTime',
  boolean: 'boolean',
  select: 'select'
};
exports.typeConstant = typeConstant;