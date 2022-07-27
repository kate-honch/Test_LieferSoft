import React from "react";
import styled from 'styled-components';


  const InputPhone = styled.input `
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

export const Phone = ({ register, errors }) => { 

  return (
    <>
      <label>
        Номер телефона:
        <InputPhone
          {...register("tel",{ 
          required: true,
          value: '+38',
          })}
          placeholder="Введите номер телефона"
          style={errors?.tel && {border: '1px solid red'}}
        />
      </label>

      <div>
        {errors?.tel && <P>Вы не ввели номер телефона</P>}
      </div>
    </>
)}