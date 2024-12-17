import React, { useState } from 'react';
import styled from 'styled-components';
import { add_center_request } from '../../../../../redux/reducers/thunks/add_super_admin_thunk';
import { useDispatch, useSelector } from 'react-redux';
import { get_super_admin_token } from '../../../../../redux/selectors';

// Styled components
const Section = styled.section`
  max-width: 40rem;
  margin: 2.5rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  color: #1f2937;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #374151;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #2563eb;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #2563eb;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #1d4ed8;
  }

  &:focus {
    outline: 2px solid #1d4ed8;
    outline-offset: 2px;
  }
`;

const Feedback = styled.p`
  color: #dc2626;
  font-size: 1rem;
  text-align: center;
  margin-top: 1rem;
`;

export default function AddCenterForm() {
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState(0);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [responseFB, setResponseFB] = useState("");

  const dispatch=useDispatch()
  const formData = {
    // token: cookies.super_admin_token,
    name,
    contact: {
      phone_num: phoneNum,
      email,
      address,
      website,
    },
  };

  const token=useSelector(get_super_admin_token)
  formData.token=token;

const submit_data=(e)=>{
  e.preventDefault();
  dispatch(add_center_request(formData))
}
  return (
    <Section>
      <Title>Add New Center</Title>

      <FormGroup>
        <Label htmlFor="name">Center Name:</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="phone_num">Phone Number:</Label>
        <Input
          type="number"
          id="phone_num"
          value={phoneNum}
          onChange={(e) => setPhoneNum(Number(e.target.value))}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="address">Address:</Label>
        <Input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="website">Website:</Label>
        <Input
          type="text"
          id="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </FormGroup>

      <button onClick={(e)=>submit_data(e)}>
        Submit
      </button>

      {responseFB && <Feedback>{responseFB}</Feedback>}
    </Section>
  );
}
