import Node from './node.js';

export default class LinkedList {
  constructor(head) {
    this.head = head;
  }

  append(value) {
    let tmp = this.head;
    while (tmp.nextNode != null) {
      tmp = tmp.nextNode;
    }
    tmp.nextNode = new Node(value);
  }

  prepend(value) {
    let tmp = this.head;
    this.head = new Node(value, tmp);
  }

  size() {
    let tmp = this.head;
    let length = 1;
    while (tmp.nextNode != null) {
      tmp = tmp.nextNode;
      length++;
    }

    return length;
  }
}

const linkedList = new LinkedList(new Node('First'));
linkedList.append('Second');
linkedList.append('Third');

linkedList.prepend('Prepended');

console.log(linkedList.size());
console.log(linkedList);
