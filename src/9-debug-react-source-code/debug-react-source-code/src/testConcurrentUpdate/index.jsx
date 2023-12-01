/**
 * 开启了并发模式并开启并发更新
 */

import { useState, useEffect, useLayoutEffect } from 'react';

import Suggests from './Suggests';

function App() {
    const [word, setWord] = useState('');

    // useEffect(() => {
    //     // debugger
    //     return () => {
    //         console.log('word-2:', word);
    //         //  debugger 
    //         }
    // }, [word]);

    // 开启并发更新有两种方式（前提是开启了并发模式）

    useEffect(() => {
        console.log("App useEffect");

        return () => {
            console.log("App unmount useEffect");
        };
    }, [word]);

    useLayoutEffect(() => {
        console.log("App useLayoutEffect");

        return () => {
            console.log("App unmount useLayoutEffect");
        };
    }, [word]);

    return (
        <>
            <input type="text" onChange={(e) => setWord(e.target.value)} />
            <Suggests word={word} />
        </>
    );
}

export default App