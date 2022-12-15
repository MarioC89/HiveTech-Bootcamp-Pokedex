import { Form, Button, Input} from "antd";

import styles from "./login.module.css"

const LoginForm = (props) => {
    const onFinish = (values) => {
        console.log(values)
        props.onFinish(true)

        //localStorage.setItem('isLoggedIn', true);
    }
    return <div className={styles.formContainer}>
         <Form
            name="basic"
            labelCol={{
                span: 24,
            }}
            wrapperCol={{
                span: 24,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
        >
        <Form.Item
            label="Username"
            rules={[
            {
                required: true,
                message: 'Please input your username!',
            },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            ]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item
            valuePropName="checked"
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
        >
        </Form.Item>

        <Form.Item
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
        </Form.Item>
    </Form>
    </div>
};

export default LoginForm;