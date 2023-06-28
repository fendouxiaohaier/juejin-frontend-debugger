/**
 * 1.useEffect的执行流程
 * 生成effect对象绑定到对应fiber的memoizedState上，等待后续执行
 * 
 * 2.useEffect的deps是如果判断是否有修改的
 * 根据deps,一项一项用is方法来判断
 * 
 * 2.1如果没有修改是怎么判断不需要执行create
 * 如果需要执行useEffect，则修改workInProgress的flag，在updateEffectImpl方法中可以看到，并将对应的effect修改为9
 * 
 * 2.2如果有修改是怎么判断需要执行create
 * 如果不需要需要执行useEffect，则不修改workInProgress的flag，在updateEffectImpl方法中可以看到，并将对应的effect修改为8
 * 
 * 3.怎么判断是否在条件中执行的hook
 */

// 注意 hook 在使用之前需要引入
import React, { useState, useEffect } from 'react';
// 定义函数组件
function IncreasingTodoList() {
	// 创建 count 状态及其对应的状态修改函数
	const [count, setCount] = useState(0);

	// 此处的定位与 componentDidMount 和 componentDidUpdate 相似
	// 每次 count 增加时，都增加对应的待办项
	useEffect(() => {
		const todoList = document.getElementById("todoList");
		const newItem = document.createElement("li");
		newItem.innerHTML = `我是第${count}个待办项`;
		todoList.append(newItem);
	}, []);

	useEffect(() => {
		console.log('count:', count);
	}, [count]);

	// if (Math.random() > 0.5) {
	// 	useEffect(() => {
	// 		console.log('我是随机执行的useEffect');
	// 	});
	// }
	// 编写 UI 逻辑
	return (
		<div>
			<p>当前共计 {count} 个todo Item</p>
			<ul id="todoList"></ul>
			<button onClick={() => setCount(count + 1)}>点我增加一个待办项</button>
		</div>
	);
}

export default IncreasingTodoList;