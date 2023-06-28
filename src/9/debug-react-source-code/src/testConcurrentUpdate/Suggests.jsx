import { useState, startTransition, useEffect, useLayoutEffect } from 'react';

function getData(word) {
	// return Promise.resolve(new Array(10000).fill(word));
	return Promise.resolve(new Array(1).fill(word));
}

function Suggests({ word }) {
	const [list, setList] = useState([]);
	useEffect(() => {
		console.log('suggest useEffect-1');
		if (!word) return () => {
			console.log('suggest unmount useEffect-1');
		};
		getData(word).then((r) => {
			// 通过 startTransition开启并发更新
			startTransition(() => {
				setList(r);
			});
		});
		return () => {
			console.log('suggest unmount useEffect-1');
		}
	}, [word]);

	// useLayoutEffect(() => {
	// 	document.querySelector('#abc').textContent = 'cba';
	// 	debugger;
	// 	console.log(word);
	// 	return () => {
	// 		debugger
	// 	}
	// }, [word]);

	useEffect(() => {
		console.log('suggest useEffect-2');

		return () => {
			console.log('suggest unmount useEffect');

		}
	}, [word]);

	useEffect(() => {
		console.log('suggest useEffect-3');

		return () => {
			console.log('suggest unmount useEffect');

		}
	}, [word]);

	useLayoutEffect(() => {
		console.log('suggest useLayoutEffect');

		return () => {
			console.log('suggest unmount useLayoutEffect');

		}
	}, [word]);

	// 通过 useDeferredValue 开启并发更新
	// useEffect(() => {
	//   if (!word) return;
	//   getData(word).then((r) => {
	//     setList(r);
	//   });
	// }, [word]);

	// const deferredList = React.useDeferredValue(list);

	return (
		<ul>
			<li id='abc'>abc</li>
			{list.map((item, i) => (
				<li key={i} style={{ width: list.length >= 0 ? "100px" : "80px" }}>{item}</li>
			))}
		</ul>
	);
}

export default Suggests