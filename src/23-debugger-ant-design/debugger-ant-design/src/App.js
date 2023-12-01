import './App.css';
import { Button, Input, Modal} from 'antd/dist/antd';

function App() {

  const handleShowModal = () => {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }

  return (
    <div className="App">
      <Button type="primary" onClick={handleShowModal}>按钮</Button>
      <Input placeholder="Basic usage" />
    </div>
  );
}

export default App;
