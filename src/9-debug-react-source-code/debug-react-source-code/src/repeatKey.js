/**
 * 测试重复的key是否会
 */
export default () => {
  const list_source = [1, 2, 3, 4, 4, 5, 5];
  const [list, setList] = React.useState(() => list_source);
  const handleClick = () => {
    // 两次更新的key完全不同
    setList([8, 9, 10]);

    // 两次更新的key有相同的有不同的
    // setList([1, 8, 9, 10]);

    // 两次更新的key有相同但是顺序变了
    // setList([1, 5, 8, 9]);
  };
  return (
    <>
      <button onClick={handleClick}>button</button>
      {list.map((item, index) => {
        return (
          <li key={item} data-key={index + 1}>
            {item}
          </li>
        );
      })}
    </>
  );
};
