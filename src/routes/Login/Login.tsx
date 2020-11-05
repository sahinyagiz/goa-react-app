import React, { FunctionComponent } from 'react';

import './Login.scss';
import Card from '../../components/Card';
import Form from '../../components/Form';

const Login: FunctionComponent = () => (
  <div className="flex-container login-page">
    <Card header={<p className="form-title">Account Login</p>} style={{ maxWidth: '484px' }}>
      <Form
        rowArray={[
          [{ id: 'login-email', name: 'Email', type: 'email' }],
          [{ id: 'login-password', name: 'Password', type: 'password' }],
        ]}
        buttonText="Login Now!"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      />
    </Card>
  </div>
);

export default Login;