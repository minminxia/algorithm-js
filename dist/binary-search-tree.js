let arrNum = [];
/**
 * 二叉树前序遍历
 * @params node tree node
 */
const preOrderTraverse = (node) => {
    if (node === null)
        return;
    arrNum.push(node.value);
    preOrderTraverse(node.left);
    preOrderTraverse(node.right);
};
/**
 * 二叉树中序遍历
 * @params node tree node
 */
const inOrderTraverse = (node) => {
    if (node === null)
        return;
    inOrderTraverse(node.left);
    arrNum.push(node.value);
    inOrderTraverse(node.right);
};
/**
 * 二叉树后序遍历
 * @params node tree node
 */
const postOrderTraverse = (node) => {
    if (node === null)
        return;
    postOrderTraverse(node.left);
    postOrderTraverse(node.right);
    arrNum.push(node.value);
};
const bst = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2,
            left: null,
            right: null
        },
        right: {
            value: 4,
            left: null,
            right: null
        }
    },
    right: {
        value: 7,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 8,
            left: null,
            right: null
        }
    }
};
// preOrderTraverse(tree) // 5324768
// inOrderTraverse(tree) // 2345678  
// postOrderTraverse(tree) // 2436875
/**
 * 寻找 BST 里的第 K 小值
 * @param node tree node
 * @param k 第几小值
 */
const getKthValue = (node, k) => {
    inOrderTraverse(node);
    console.log(arrNum);
    return arrNum[k - 1] || null;
};
const kThValue = getKthValue(bst, 3);
console.log(kThValue); // 4
export { getKthValue };
