import Node from './node.js';

export default class LinkedList {
  constructor(node) {
    this.firstNode = node;
  }

  append(value) {
    let tmp = this.head();
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    tmp.nextNode = new Node(value);
  }

  prepend(value) {
    let tmp = this.head();
    this.firstNode = new Node(value, tmp);
  }

  size() {
    let tmp = this.head();
    let length = 1;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
      length++;
    }

    return length;
  }

  head() {
    return this.firstNode;
  }

  tail() {
    let tmp = this.head();
    while (tmp.nextNode != null) {
      tmp = tmp.nextNode;
    }

    return tmp;
  }

  at(index) {
    let tmp = this.head();
    console.log(tmp);
    let pointer = 0;

    while (pointer < index) {
      tmp = tmp.nextNode;
      pointer++;

      if (tmp === null) {
        return null;
      }
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
console.log();
console.log(linkedList.at(5));
