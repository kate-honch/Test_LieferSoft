import React from "react";
import styled from 'styled-components';

  const InputEmail = styled.input `
    width: 100%;
    height: 35px;
    padding: 5px 10px;
    margin-bottom:20px;
    border-radius: 5px;
    border: 1px solid #68513f7d;
    box-sizing:border-box;
      :focus {
        outline: none;
        box-shadow: none;
      }
  `;
  
  const P = styled.p `
  margin: 0;
  color: red;
  margin-bottom: 20px;
  `;

export const Email = ({ register, errors }) => {

  return (
    <>
      <label>
        Email:
        <InputEmail
          {...register("email",{ required: true })}
          type="email"
          placeholder="Введите email"
          style={errors?.email && {border: '1px solid red'}}
        />
      </label>

      <div>
        {errors?.email && <P>Вы не ввели email</P>}
      </div>
    </>
    
)}