import React from "react";
import styled from 'styled-components';

  const InputAddress = styled.input `
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
    margin-bottom: 20px
  `;

export const Address = ({ register, errors }) => {

  return (
  <>
    <label>
      Адрес:
      <InputAddress
        {...register("address",{ required: true })}
        placeholder="Введите адрес"
        style={errors?.address && {border: '1px solid red'}}
      />
    </label>

    <div>
      {errors?.address && <P>Вы не ввели адрес</P>}
    </div>
  </>
)}