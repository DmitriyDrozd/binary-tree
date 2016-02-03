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
			// in case of match needless to do anything
		}
	}

	contains(data) {		
		var nodeCurrent = this.root;
		while(nodeCurrent) {
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
		var nodeCurrent = this.root;
		var nodePrev = this.root;
		while (nodeCurrent) {
			if (nodeCurrent.data == data) {
				 if (!nodeCurrent.right && !nodeCurrent.left){
					if (this.root.data == data)
						this.root = null;
					else if (nodePrev.right.data == nodeCurrent.data)
						nodePrev.right = null;
					else if (nodePrev.left.data == nodeCurrent.data)
						nodePrev.left = null;
					break;
				}
				else if (!nodeCurrent.right) { 
					if (nodePrev.left.data == nodeCurrent.data)
						nodePrev.left = nodeCurrent.left;
					else if (nodePrev.right.data == nodeCurrent.data)
						nodePrev.right = nodeCurrent.left;
					break;
				}
				else { // if right daughter exists
					if (!nodeCurrent.right.left) {
						nodeCurrent.data = nodeCurrent.right.data;
						nodeCurrent.right = null;
					}
					else {
						var nodeReplacement = nodeCurrent.right;
						while (nodeReplacement.left.left)
							nodeReplacement = nodeReplacement.left;
						nodeCurrent.data = nodeReplacement.left.data;
						nodeReplacement.left = null;
					}
					break;
				}
			}
			else {
				nodePrev = nodeCurrent;
				if (nodeCurrent.data > data) 
					nodeCurrent = nodeCurrent.left? nodeCurrent.left : false;
				else if (nodeCurrent.data < data) 
					nodeCurrent = nodeCurrent.right? nodeCurrent.right : false;
			}
		}
	}

	size() {
		if (!this.root) return 0;
		return this.countDaughters(this.root);
	}

	countDaughters(nodeCurrent) {
		var count = 1;
		if (nodeCurrent.left)
			count += this.countDaughters(nodeCurrent.left);
		if (nodeCurrent.right)
			count += this.countDaughters(nodeCurrent.right);
		return count;
	}

	isEmpty() {
		return (!this.root)? true : false;
	}
}