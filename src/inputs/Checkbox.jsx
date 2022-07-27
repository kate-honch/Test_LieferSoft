import React from "react";
import styled from 'styled-components';

  const Paragraph = styled.p `
    margin: 0;
    text-align: center;
  `;
  
  const P = styled.p `
    margin: 0;
    color: red;
    margin-bottom: 20px;
  `;

  const Div = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
  `;

export const Checkbox = ({ register, errors }) => {

  return (
    <>
      <Paragraph>Все данные внесены правильно?</Paragraph>
        <Div>
          <label>
            <input 
              {...register("checkbox", { required: true })}
              type="checkbox"
              value="Да"
              style={errors?.checkbox && {outline: '1px solid red'}}
            />
            Да
          </label>

          <label>
            <input 
              {...register("checkbox", { required: true })}
              type="checkbox"
              value="Нет"
              style={errors?.checkbox && {outline: '1px solid red'}}
            />
            Нет
          </label>
        </Div>

        <div>
          {errors?.checkbox && <P>Вы не выбрали опцию</P>}
        </div>
    </>
)}