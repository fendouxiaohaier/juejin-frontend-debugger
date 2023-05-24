import { Form } from 'antd/dist/antd';
import { useEffect, createContext, useContext } from 'react';

const context = createContext();

/**
 * 自定义Foo组件
 * @param {*} props
 * @returns
 */
function Foo(props) {
  const value = useContext(context);
  return <div>自定义组件</div>;
}

const App = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      a: {
        b: {
          c: 'ccc',
        },
      },
      d: {
        e: 'eee',
      },
    });
  }, []);

  return (
    <context.Provider value={123}>
      <Form form={form}>
        <Form.Item name={['d', 'e']}>
          <Foo />
        </Form.Item>
      </Form>
    </context.Provider>
  );
};
export default App;
