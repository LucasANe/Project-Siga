import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
`;

export const LoginBox = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .logo {
    display: flex;
    justify-content: center;
  }

  img:first-child {
    margin-bottom: 10px;
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
