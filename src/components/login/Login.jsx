import React, { useEffect, useState } from 'react';
import './Login.css';
import { useHistory } from 'react-router';

const Login = () => {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const [modal, setModal] = useState('');

  let history = useHistory();
  const { userName, email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    sessionStorage.setItem('userName', JSON.stringify(userName));
  }, [userName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!userName || !email || !password) {
      setModal('All fields are required');
    } else if (!regEmail.test(email)) {
      setModal('Invalid Email Address');
    } else if (!regPassword.test(password)) {
      setModal(
        'Password must be 8 to 15 characters containing atleast one lowercase, one uppercase, one numeric digit, and one special charater',
      );
    } else {
      console.log(user);
      history.push('/securityQuestion');
    }
  };

  return (
    <form className='login-form'>
      {modal && <div className='alert'>{modal}</div>}
      <label htmlFor='username'>Username</label>
      <input
        type='text'
        name='userName'
        value={userName}
        onChange={handleChange}
        placeholder='enter username'
      />
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        name='email'
        value={email}
        onChange={handleChange}
        placeholder='enter a valid email'
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        value={password}
        onChange={handleChange}
        placeholder='enter password'
      />
      <h4>
        * Password must be 8 to 15 characters containing atleast one lowercase,
        one uppercase, one numeric digit, and one special charater
      </h4>
      <button onClick={handleSubmit}>login</button>
    </form>
  );
};

export default Login;
