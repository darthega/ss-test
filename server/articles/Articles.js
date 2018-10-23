const fs = require('fs-extra');
const path = require('path');
const data = require('./data.json');

class Articles {
  constructor() {
    this.getAll = this.getAll.bind(this);
    this.getOne = this.getOne.bind(this);
    this.set = this.set.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);

    this.data = data;
  }

  getAll() {
    return this.data;
  }

  getOne(id) {
    return this.data.find(item => item.id === id);
  }

  set(item) {
    item.created = Date.now();
    item.id = this.data[this.data.length].id + 1;

    this.data.push(item);

    return item;
  }

  delete(id) {
    const pos = this.data.findIndex(item => item.id === id);

    this.data.splice(pos);

    return true;
  }

  edit(item) {
    const tmpItem = this.getOne(item.id);
    const newItem = Object.assign(tmpItem, item);
    const pos = this.data.findIndex(item => item.id === id);

    this.data[pos] = newItem;

    return newItem;
  }
}

module.exports = Articles;
