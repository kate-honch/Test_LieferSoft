import React from "react";
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Name } from './inputs/Name.jsx';
import { LastName } from './inputs/LastName.jsx';
import { Phone } from './inputs/Phone.jsx';
import { Email } from './inputs/Email.jsx';
import { Gender } from './inputs/Gender.jsx';
import { Address } from './inputs/Address.jsx';
import { Checkbox } from "./inputs/Checkbox.jsx";

  const Form = styled.form `
    width: 300px;
    margin: 0 auto;
    padding: 10px 20px;
    border: 1px solid #68513F;
    border-radius: 10px;
    background-color: #f1f1f1;
  `;

  const Title = styled.h1 `
    margin: 0 0 10px;
    font-family: 'Style Script';
    font-weight: 200;
    font-size: 30px;
    text-align: center;
    color: #68513F;
  `;

  const InputSubmit = styled.input`
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 35px;
    border: none;
    background-color: #eb21668f;
    border-radius: 10px;
    font-size: 15px;
    color: white;
      :hover {
        background-color:#ff367b;
      }
      :active {
        background-color: #ff0057;
      }
  `;

const App = () => {
  const {register, formState:{errors}, handleSubmit, reset} = useForm();

  const clients = useSelector(state => state.clients);
  
  console.log('clients-', clients);

  const onSubmit = (data) => {
    clients.push(data);
    reset();
  };

    return (
      <>
        <Title>Форма регистрации</Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Name register={register} errors={errors}/>

          <LastName register={register} errors={errors}/>

          <Phone register={register} errors={errors}/>
          
          <Email register={register} errors={errors}/>

          <Gender register={register} errors={errors} />

          <Address register={register} errors={errors}/>

          <Checkbox register={register} errors={errors} />
        
          <InputSubmit type="submit" value="Register"/>
        </Form>
      </>
    );
}

export default App;
