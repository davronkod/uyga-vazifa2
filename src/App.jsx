import './App.css';
import { Form, Input } from 'antd';
function App() {
  
  return (
    <>
        <div className="oq">
        <i class="bi bi-list-columns-reverse"></i>
        <p className="po">refine Project</p>
        <hr />
        <button className="uder"><i class="bi bi-list-task"></i><span>User</span></button>
        </div>
        <p className='u'>Users /<span className='c'>Create</span></p>
        <p className='o'><span className='p'><i class="bi bi-arrow-left"></i></span><span className='a'>Create User</span></p>
        <div className="pi">
        <Form
      name="layout-multiple-horizontal"
      layout="horizontal"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 20,
      }}
    >
      <Form.Item
        label="horizontal"
        name="horizontal"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        layout="vertical"
        label="vertical"
        name="vertical"
        rules={[
          {
            required: true,
          },
        ]}
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
      >
        <Input />
      </Form.Item>
    </Form>
    <br />
    <Form
      name="layout-multiple-vertical"
      layout="vertical"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 20,
      }}
    >
      <Form.Item
        label="vertical"
        name="vertical"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        layout="horizontal"
        label="horizontal"
        name="horizontal"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
        </div>
          <button className='qa'>+ Add a skill</button>
          <button className='qaa'> <i class="bi bi-floppy"></i><span className="l">Save</span></button>
    </>
  );
}

export default App;
