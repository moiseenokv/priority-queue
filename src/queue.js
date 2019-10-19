const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if(!maxSize){
			this.maxSize=30
		}else{
			this.maxSize=maxSize;
		}
		this.heap = new MaxHeap();
		this.items = []; 
	}

	push(data, priority) {
	if(this.items.length >=this.maxSize){
		throw new Error('error')
	}	

	return this.items.push({
		item:data,
		priority:priority
	});
	}

	shift() {
		return this.items.shift();
	}

	size() {
		return this.items.length;
	}

	isFull() {
		return this.items.length >= this.maxSize;
	 }

	isEmpty() {
		return this.items.length==0;
	}
}

module.exports = PriorityQueue;
