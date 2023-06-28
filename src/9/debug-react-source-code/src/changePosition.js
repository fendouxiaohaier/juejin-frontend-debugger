/**
 * 测试重复的key是否会
 */
export default () => {
  const list_source = [1, 2, 3, 4, 5];
  const [list, setList] = React.useState(() => list_source);
  const handleClick = () => {
    // 两次更新的key完全不同
    setList([5, 1, 2, 3, 4]);
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
