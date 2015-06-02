/*
Fill in your own code where you see "your code here".
You can insert new lines at those locations, but you
will not need to edit the lines above and below them.
*/

//-----------------------------------------
// Queues

function Queue() {
  this.data = [];
}

Queue.prototype.add = function(item) {
  this.data.push(item);
  return this; // for chaining, do not edit
};

Queue.prototype.remove = function() {
  return this.data.shift();
};

//-----------------------------------------
// Stacks

function Stack() {
  this.data = [];
}

Stack.prototype.add = function(item) {
  this.data.push(item);
  return this; // for chaining, do not edit
};

Stack.prototype.remove = function() {
  return this.data.pop();
};

//-----------------------------------------
// Linked lists

function LinkedList () {
  this.head = this.tail = null;
}

function ListNode (item, prev, next) {
  this.item = item;
  this.prev = prev || null;
  this.next = next || null;
}

LinkedList.prototype.addToTail = function(item) {
  var newNode = new ListNode(item, this.tail, null)
  if(this.tail) {this.tail.next = newNode};
  this.tail = newNode;
  if(!this.head) this.head = this.tail;
  return this; // for chaining, do not edit
};

LinkedList.prototype.removeFromTail = function() {
  var temp = this.tail;
  if (!this.tail) return;
  if(temp.prev){
    this.tail = temp.prev;
    this.tail.next = null;
  }else{
    this.tail = null;
    this.head = null;
  }
  return temp.item;
};

LinkedList.prototype.forEach = function(iterator) {
  var temp = this.head;
  while(temp.next){
    iterator(temp.item);
    temp = temp.next;
  }
  iterator(this.tail.item);
  //console.log('for each',this.head)
};

//-----------------------------------------
// Hash tables

function _hash (key) {
  var hashedKey = 0;
  for (var i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i);
  }
  return hashedKey % 20;
}

function HashNode (key, value) {
  this.key = key;
  this.value = value;
}

function Hash () {
  this.buckets = Array(20);
  for (var i = 0; i < this.buckets.length; i++) {
    this.buckets[i] = new LinkedList();
  };
}

Hash.prototype.set = function(key, value) {
  var bucketNum = _hash(key)
  this.buckets[bucketNum].addToTail({key:key, value: value})
  return this; // for chaining, do not edit
};

var temp = [];

Hash.prototype.get = function(key) {
  var bucketNum = _hash(key)
  var bucket = this.buckets[bucketNum]
  bucket.forEach(searchNode);
  var ans = temp.pop();
  return ans.value;
};


function searchNode(node){
  temp.push(node)
  // console.log(temp)
  return temp;
}
