import React from "react";
import styled from 'styled-components';

  const Paragraph = styled.p `
    margin: 0 ;
  `;

  const Select = styled.select `
    width:100%;
    height: 35px;
    margin-bottom: 20px;
    border: 1px solid #68513f7d;
    border-radius: 5px;
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

export const Gender = ({ register, errors }) => {

  return (
    <>
    <Paragraph>Пол</Paragraph>

    <Select {...register("gender", {required: true})}>
      <option value="female">Женский</option>

      <option value="male">Мужской</option>
    </Select>

    <div>
      {errors?.gender && <P>Вы не выбрали пол</P>}
    </div>
    </>
)}