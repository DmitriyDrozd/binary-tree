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
		while (nodeCurrent){

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
		var nodeCurrent = this.root
		while(nodeCurrent)
		{
			if (nodeCurrent.data == data)
				return true;
			else if (nodeCurrent.data > data)
				nodeCurrent = nodeCurrent.left? nodeCurrent.left : false;
			else if (nodeCurrent.data < data) 
				nodeCurrent = nodeCurrent.right? nodeCurrent.right : false;
		}
		return false;
	}

	remove(data) {
		
	}

	size() {

	}

	isEmpty() {

	}
}
