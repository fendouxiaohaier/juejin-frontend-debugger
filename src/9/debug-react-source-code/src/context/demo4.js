/**
 * 测试重复的key是否会
 */
export default () => {
  const list_source = [1, 2, 3, 4, 4, 5, 5];
  const [list, setList] = React.useState(() => list_source);
  const handleClick = () => {
    setList([8, 9, 10]);
  };
  return (
    <>
      <button onClick={handleClick}>button</button>
      {list.map((item, index) => {
        return (
          <li key={item} data-key={index}>
            {item}
          </li>
        );
      })}
    </>
  );
};
