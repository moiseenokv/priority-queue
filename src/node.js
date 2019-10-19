class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right =null;
	}

	appendChild(node) {
		if(this.left && this.right){
			return false;
		}
		
		if(this.left == null){
			this.left = node;
		}else{
			this.right = node;
		}
		
	}

	removeChild(node) {
		if(node!==this.left && node!==this.right){
			throw new Error();
		}
		if(node = this.left){
			this.left = null
		}

		if(node = this.right){
			this.right = null
		}
	}

	remove() {
		this.parent = null
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
