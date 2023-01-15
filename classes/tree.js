const internal = require('stream');
const { Node } = require('./nodes');

class BinaryTree{

    constructor(value){
        this.root = new Node("1", value, null)

    }

    
    //generator function to recursively find node
    *preOrderTraversal(node = this.root) {
        //return node
        yield node;

        //if node left branch
        if (node.left){
            yield* this.preOrderTraversal(node.left);
        }

        //if node has right branch
        if (node.right){
            yield* this.preOrderTraversal(node.right);
        }

    }


    /**
     * Insert into the binary tree
     * @param {String} parentKey - The key of the parent
     * @param {String} value - The value to be inserted
     * @param {{left: true, right: true}=} - Optional left or right for the node insertion from parent
     * @returns {Boolean} - true or false for status of insertion
     */
    insert(parentKey, value, { left, right } = {left: true, right: true}){

        //loops through nodes to find parent
        for (let node of this.preOrderTraversal()) {

            //if parent
            if(parentKey == node.key){

                //checking availability of left node insertion
                let CanInsertLeft = (left && node.left === null);
                
                //checking availability of right node insertion
                let CanInsertRight = (right && node.right === null);

                //generates key for new node
                let key = String(parentKey) + String((CanInsertLeft ? '1' : '2')) 

                //test if can insert left or right
                switch(true){
                    //if left
                    case CanInsertLeft:
                        node.left = new Node(key, value, node.key);
                        return true;

                    //if right
                    case CanInsertRight:
                        node.right = new Node(key, value, node.key);
                        return true;

                    //if no nodes are available
                    default:
                        return false;
                }
            }
        }

    }


    /**
     * remove node and all sub trees
     * @param {String} key - The key of the node
     * @returns {Boolean} - true or false for status of deletion
     */
    remove(key){

        //loops through nodes to find parent
        for (let node of this.preOrderTraversal()) {

            //if left node
            if(node.left.key == key){

                //sets node to null
                node.left = null;

                //return true to end function
                return true;
            }


            //if right node
            if(node.right.key == key){

                //sets node to null
                node.right = null;

                //return true to end function
                return true;
            }

        }

        //default return if node could not be found
        return false;

    }


    /**
     * Finds key from of value
     * @param {String} value - The value to be searched for
     * @returns {Node|undefined} - node or undefined if none found
     */
    getNodeFromValue(value){

        //loops through nodes
        for (let node of this.preOrderTraversal()) {

            //if node value
            if(value == node.value){

                //returns the found node
                return node;

            }
        }

        //returns undefined if non found
        return undefined;

    }


    /**
     * Finds key from of value
     * @param {String} key - The key to be searched for
     * @returns {Node|undefined} - node or undefined if none found
     */
    getNodeFromKey(key){

        //loops through nodes
        for (let node of this.preOrderTraversal()) {

            //if node key
            if(key == node.key){

                //returns the found node 
                return node;

            }
        }

        //returns undefined if non found
        return undefined;

    }



    /**
     * @returns {Number} - number of nodes in tree
     */
    get size(){

        //stores size value
        let size = 0;

        //loops through nodes
        for (let node of this.preOrderTraversal()) {

            size++;

        }

        //returns size
        return size;

    }


    /**
     * @returns {Number} - the number of nodes along the longest path from the root node down to the farthest leaf nod
     */
    get maxDepth(){

        //stores longest key
        let maxKey = "";

        //loops through nodes
        for (let node of this.preOrderTraversal()) {

            //test if key is longer than currently held key
            if(node.key.length > maxKey.length){

                maxKey = node.key

            }

        }

        //returns longest path
        return maxKey.length;

    }

    //inverts key
    invertKey(key){
        
        //converts key into array
        let arr = key.split("")

        //loops through the array
        for (let i = 1; i < arr.length; i++) {

            //inverts key
            arr[i] = (arr[i] == "1" ? "2" : "1");

        }

        //returns inverted key
        return String(arr.join(""));
    }


    /**
     * @returns {BinaryTree} - returns new mirrored binary tree object
     */
    get mirror(){

        //creates new tree to be returned later
        let newTree = new BinaryTree(this.root.value);

        //loops through nodes
        for (let node of this.preOrderTraversal()) {

            //verify current node is not root 
            if(node.parent !== null){

                //inverts parent node key for new insert location
                let invertParent = this.invertKey(node.parent)

                //inserts new node into newTree with mirrored location
                newTree.insert(invertParent, node.value, {left: (node.key[node.key.length - 1] == 2), right: (node.key[node.key.length - 1] == 1) })

            }
        }


        //returns new binary tree
        return newTree;

    }
    
}


module.exports.BinaryTree = BinaryTree