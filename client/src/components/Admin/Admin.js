import React, { useEffect, useState }  from 'react'
import "./Admin.css"
import '../../../node_modules/antd/dist/antd.min.css'
import Axios from "axios"
import {
  Form,
  Input,
  Button,
  // Select,
} from 'antd';

export default function Admin() {

const [userslist, setUserslist] = useState ([])
const [error, setError] = useState ('')

console.log('error:', error)

useEffect (() => {
  Axios.get("http://localhost:3001/api/get_users").then((response) => {
    setUserslist(response.data)
  }).catch(err=>{
    setError(err)
  })
}, [])

const onFinish = async (values) => {
  await Axios.post("http://localhost:3001/api/insertusers", {
  lastname : values.lastname,
  firstname : values.firstname,
  email : values.email,
  password : values.password
  });
  setUserslist([
    ...userslist,
    {
      lastname : values.lastname,
      firstname : values.firstname,
      email : values.email,
      password : values.password
    }
  ]);
  console.log('Envoyé')
}

const onFinishFailed = (errorInfo) => {
  setError(errorInfo)
  console.log('Failed:', errorInfo)
}

const [form] = Form.useForm()

const onReset = () => {
  form.resetFields()
}

  return (
    <main className='main article'>
      <div className="container">
        <div className="card01">
          <h4>AJOUTER UN UTILISATEUR</h4>
          <div className="card11">
            <Form
              name='basic'
              labelCol={{
                span: 8
              }}
              wrapperCol={{
                span: 16
              }}
              form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
            >
              <Form.Item
                label="Nom"
                name="lastname"
                rules={[{required: true,},]}
              >
                <Input
                  placeholder="Last Name"
                  value="Last Name"
                  maxlength = {20}
                >
                </Input>
              </Form.Item>
              <Form.Item
                label="Prénom"
                name="firstname"
                rules={[{required: true,},]}
              >
                <Input
                  placeholder="Fisrt Name"
                  value="Fisrt Name"
                  maxlength = {20}
                >
                </Input>
              </Form.Item>
              <Form.Item
                label="Courriel Spie"
                name="email"
                rules={[{required: true,},{type:'email'}]}
              >
                <Input
                  placeholder="Email"
                  value="Email"
                  maxlength = {20}
                >
                </Input>
              </Form.Item>
              <Form.Item
                label="Mot de passe"
                name="password"
                rules={[ {
                  required: true,
                  message: 'Please input your password!',
                }
                ]}
              >
                <Input.Password/>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 4,
                  span: 16
                }}
                >
                <Button type="primary" htmlType="submit">
                  Ajouter
                </Button>
                <Button htmlType='button' onClick={onReset}>
                  Reset
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <card1>

        </card1>
      </div>

    </main>
  )
}
