import { Form, Input } from 'antd/dist/antd';
import { useEffect } from 'react';

const App = () => {
  const [form]= Form.useForm();
  
  useEffect(() => {
    form.setFieldsValue({
      a: {
        b: {
          c: 'ccc'
        }
      },
      d: {
        e : 'eee'
      }
    })
  }, []);

  return (
    <Form form={form}>
      <Form.Item name={['d', 'e']}>
        <Input/>
      </Form.Item>
    </Form>
  )
}
export default App;