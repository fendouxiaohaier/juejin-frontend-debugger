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
 * 每执行一个hook，nextCurrentHook和nextWorkInProgressHook都往后偏移一位
 * 3.1:变多的情况：
 * nextCurrentHook已经为null了，但是nextWorkInProgressHook不为null，表示变多了
 * 3.2:变少的情况：
 * 同理：nextCurrentHook已经不为null了，但是但是nextWorkInProgressHook一位移到null去了，表示变少了
 */

// 注意 hook 在使用之前需要引入
import React, { useState, useEffect, useRef } from 'react';
// 定义函数组件
function IncreasingTodoList() {
	// 创建 count 状态及其对应的状态修改函数
	const [count, setCount] = useState(0);
	const ref = useRef(2);

	// 此处的定位与 componentDidMount 和 componentDidUpdate 相似
	// 每次 count 增加时，都增加对应的待办项
	// useEffect(() => {
	// 	const todoList = document.getElementById("todoList");
	// 	const newItem = document.createElement("li");
	// 	newItem.innerHTML = `我是第${count}个待办项`;
	// 	todoList.append(newItem);
	// }, []);

	if (ref.current >= 1) {
	useEffect(() => {
		console.log('我是随机执行的useEffect');
	});
	}

	useEffect(() => {
		console.log('count:', count);
	}, [count]);


	// 编写 UI 逻辑
	return (
		<div>
			<p>当前共计 {count} 个todo Item</p>
			<ul id="todoList"></ul>
			<button onClick={() => { setCount(count + 1); ref.current = 0 }}>点我增加一个待办项</button>
		</div>
	);
}

export default IncreasingTodoList;