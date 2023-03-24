import styled from "styled-components";

export const Input = styled.input`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  padding: 12px 16px;
  border-radius: 10px;
  background: var(--primary-gray);
  color: var(--second-gray);
  border: none;

  :focus {
    color: var(--default-black);
    outline: none;
    box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.4);
  }

  :focus-visible {
    outline: none;
  }
`;
