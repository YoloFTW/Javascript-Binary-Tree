class Node{
    constructor(key, value, parent){
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    /**
     * @returns {Boolean} - true or false if leaf
     */
    get isLeaf(){

        //return true if no child nodes
        return this.left === null && this.right === null;

    }

}

module.exports.Node = Node