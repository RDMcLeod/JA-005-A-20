export default class TodoList {
  constructor() {
    this._list = [];
  }
  getList() {
    return this._list;
  }
  clearList() {
    this._list = [];
  }
  addItemToList(itemOgj) {
    this._list.push(itemObj);
  }
  removeItemFromList(id) {
    const list = this._list;
    for (let i = 0; i < list.length; i++) {
      if (list[i]._id == id) {
        list.splice(i, 1);
        break;
      }
    }
  }
}