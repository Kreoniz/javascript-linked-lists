import Node from './node.js';

export default class LinkedList {
  constructor(node) {
    this.firstNode = node;
  }

  append(value) {
    let tmp = this.firstNode;
    while (tmp.nextNode != null) {
      tmp = tmp.nextNode;
    }
    tmp.nextNode = new Node(value);
  }

  prepend(value) {
    let tmp = this.firstNode;
    this.firstNode = new Node(value, tmp);
  }

  size() {
    let tmp = this.firstNode;
    let length = 1;
    while (tmp.nextNode != null) {
      tmp = tmp.nextNode;
      length++;
    }

    return length;
  }

  head() {
    return this.firstNode;
  }

  tail() {
    let tmp = this.firstNode;
    while (tmp.nextNode != null) {
      tmp = tmp.nextNode;
    }

    return tmp;
  }
}

const linkedList = new LinkedList(new Node('First'));
linkedList.append('Second');
linkedList.append('Third');

linkedList.append('Appended');
linkedList.prepend('Prepended');

console.log(linkedList.size());
console.log(linkedList);
console.log();
console.log(linkedList.head(), linkedList.tail());
