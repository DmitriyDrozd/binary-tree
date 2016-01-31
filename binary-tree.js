'use strict';

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		var nodeNew = new Node(data)

		if (!this.root){
			this.root = nodeNew;
			return;
		}
		
		var nodeCurrent = this.root;
		while (true){

			if (nodeCurrent.data > data) // case of left
				if (!nodeCurrent.left) {
					nodeCurrent.left = nodeNew;
					break;
				}
				else 
					nodeCurrent = nodeCurrent.left;

			else if (nodeCurrent.data < data) // case of right
				if (!nodeCurrent.right) {
					nodeCurrent.right = nodeNew;
					break;
				}
				else 
					nodeCurrent = nodeCurrent.right;
			// in case if match needless to do anything
		}
	}

	contains(data) {
		
	}

	remove(data) {

	}

	size() {

	}

	isEmpty() {

	}
}
