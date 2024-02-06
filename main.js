import Node from './node.js';
import LinkedList from './linked-list.js';

// Creating and populating a linked list
const linkedList = new LinkedList(new Node('First'));
linkedList.append('Second');
linkedList.append('Third');
linkedList.append('Appended');
linkedList.prepend('Prepended');

// Printing out current visual representation of the linked list
console.log(linkedList.toString());

// Printing out the current size of the linked list
const size = linkedList.size();
console.log(`Current size: ${size}`);
console.log();

// Printing out the first and last elements of the list
const head = linkedList.head();
const tail = linkedList.tail();
console.log(`Head: ${head.value}`);
console.log(`Tail: ${tail.value}`);
console.log();

// Printing out the element at a given index
const atIndex = linkedList.at(2);
console.log(`Element at index 2: ${atIndex.value}`);
console.log();

// Removing the last element
linkedList.pop();
console.log('Linked list after removing the last element:');
console.log(linkedList.toString());
console.log();

// Checking if the list contains given values
const containsSecond = linkedList.contains('Second');
const containsMoon = linkedList.contains('Moon');
console.log(`The list contains string 'Second': ${containsSecond}`);
console.log(`The list contains string 'Moon': ${containsMoon}`);
console.log();

// Getting an index of an element with given value
const findThird = linkedList.find('Third');
console.log(`Value 'Third' is at index: ${findThird}`);
console.log();

// Inserting an element in a list
console.log("List before inserting 'Inserted' at index 2:");
console.log(linkedList.toString());
console.log();

linkedList.insertAt('Inserted', 2);

console.log('List after inserting:');
console.log(linkedList.toString());
console.log();

// Removing an element from the list
console.log('List before removing an element at index 2:');
console.log(linkedList.toString());
console.log();

linkedList.removeAt(2);

console.log('List before removing an element:');
console.log(linkedList.toString());
