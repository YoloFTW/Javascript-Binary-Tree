<h3 align="center">Javascript Binary Tree</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/YoloFTW/Javascript-Binary-Tree.svg)](https://github.com/YoloFTW/Javascript-Binary-Tree/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/YoloFTW/Javascript-Binary-Tree.svg)](https://github.com/YoloFTW/Javascript-Binary-Tree/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

## Table of Contents

- [About](#about)

- [Usage](#usage)
    - [Create Tree](#Create-Tree)
    - [Insert](#Insert)
    - [Get Node From Value](#Get-From-Value)
    - [Get Node From Key](#Get-From-Key)
    - [isLeaf](#isLeaf)
    - [Size](#Size)
    - [maxDepth](#maxDepth)

- [Authors](#authors)

</br>

## About <a name = "about"></a>

Jsbt stands for Javascript Binary Tree, it is one solution to the popular binary tree problem 
</br>

## Installing

For Installation With NPM

```shell
npm i @yoloftw/jsbt
```
</br>

## Usage <a name="usage"></a>

Below is the basic usage of Javascript Binary Tree
</br>


## Create Tree <a name="Create-Tree"></a>
Create binary tree object

```js
const { BinaryTree } = require('jsbt');

//create new tree with root value of "A"
let tree = new BinaryTree("A")
```
</br>

## Insert <a name="Insert"></a>

Insert into binary tree

```js
//insert into the tree at parent "1" with value of "AA" on any side
tree.insert("1", "AA")
```

An object of {left, right} can be passed to specify which side to insert on

```js
//insert into the tree at parent "1" with value of "AB" on the right side
tree.insert("1", "AB", {right: true})

//insert into the tree at parent "1" with value of "AA" on the left side
tree.insert("1", "AA", {left: true})

//insert into the tree at parent "11" with value of "AAA" on the left side
tree.insert("11", "AAA", {left: true})
```
</br>

## Get From Value <a name="Get-From-Value"></a>

Get binary tree node from value.

If multiple nodes have the same value will only return first

```js
//get node with value "AB"
tree.getNodeFromValue("AB")

//expected output: Node {key: '12', value: 'AB', parent: '1', left: null, right: null}



//get node with value "ABBA"
tree.getNodeFromValue("ABBA")

//expected output: undefined
```
</br>

## Get From Key <a name="Get-From-Key"></a>

Get binary tree node from key.

```js
//get node with key "12"
tree.getNodeFromKey("12")

//expected output: Node {key: '12', value: 'AB', parent: '1', left: null, right: null}



//get node with key "121212"
tree.getNodeFromKey("121212")

//expected output: undefined
```
</br>

## isLeaf <a name="isLeaf"></a>

return true or false if node is a leaf

```js
//get node with key "12"
tree.getNodeFromKey("12").leaf

//expected output: true



//get node with key "11"
tree.getNodeFromKey("11").leaf

//expected output: false
```
</br>

## Size <a name="Size"></a>

return number of nodes in binary tree

```js
//get tree size including root node
tree.size

//expected output: 4
```
</br>


## maxDepth <a name="maxDepth"></a>

return number of nodes in the longest route

```js
//get longest route of nodes
tree.maxDepth

//expected output: 3
```
</br>

## Authors <a name = "authors"></a>

- [@YoloFTW](https://github.com/YoloFTW)


