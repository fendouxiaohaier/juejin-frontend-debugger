import { createContext, useContext } from 'react';

const countContext = createContext(111);

function Aaa() {
  const count = useContext(countContext);

  return <div>
      <h1>context 的 值为：{count}</h1>
      <Bbb></Bbb>
  </div>
} 

function Bbb() {
  return <div>
      <countContext.Provider value={222}>
        <Ccc></Ccc>
      </countContext.Provider>
    </div>
}

function Ccc() {
  const count = useContext(countContext);
  return <h2>context 的 值为：{count}</h2>
}

export default Aaa;