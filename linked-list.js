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

  pop() {
    let tmp = this.head();
    while (tmp.nextNode.nextNode !== null) {
      tmp = tmp.nextNode;
    }

    tmp.nextNode = null;
  }

  contains(value) {
    let tmp = this.head();
    while (tmp !== null) {
      if (tmp.value === value) {
        return true
      };
      tmp = tmp.nextNode;
    }

    return false;
  }

  find(value) {
    let tmp = this.head();
    let i = 0;
    while (tmp !== null) {
      if (tmp.value === value) {
        return i;
      };
      tmp = tmp.nextNode;
      i++;
    }

    return null;
  }

  toString() {
    let tmp = this.head();
    let string = '';
    while (tmp !== null) {
      string += `( ${tmp.value} ) -> `;
      tmp = tmp.nextNode
    }
    string += 'null';
    return string;
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
console.log();
console.log(linkedList.pop());
console.log();
console.log(linkedList.contains('Second'));
console.log(linkedList.contains('Value'));
console.log();
console.log(linkedList.find('Third'));
console.log(linkedList.at(3));
console.log();
console.log(linkedList.toString());
