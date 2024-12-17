import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import verify_super_admin from '../../../redux/reducers/thunks/super_admin_thunk';
import { get_super_admin_auth, get_super_admin_message, get_super_admin_teachers, super_admin_data } from '../../../redux/selectors';
import "./styles.css"
import { Outlet, useNavigate } from 'react-router-dom';
const FormContainer = styled.form`
  max-width: 300px;
  margin: auto;
`;

const InputField = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const LoginForm = ({children}) => {
  const [comp,setComp]=useState(1);

  const dispatch=useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const navigate=useNavigate()
  const super_admin_data_status=useSelector(super_admin_data)
  const isAuth=useSelector(get_super_admin_auth)
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    dispatch(verify_super_admin(formData));
    console.log(formData);
   navigate("/super_admin/centers")
  };
// 

const message=useSelector(get_super_admin_message)
  return super_admin_data_status=='pending'?<h1>Loading</h1>:isAuth?<Outlet/>:  (<FormContainer onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="username">Username</Label>
        <InputField
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <InputField
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </Button>
        <span>{message}</span>
      </div>
    </FormContainer>
  )
};

export default LoginForm;
