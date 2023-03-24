import styled from "styled-components";

export const Container = styled.div`
  min-width: 100%;
  height: 100vh;
  background: var(--dark-blue);
  border-right: 20px solid var(--detail-red);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px 0 24px 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: var(--default-white);

  @media (max-width: 1300px) {
    font-size: 18px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    user-select: none;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 14px 16px 14px 24px;

    :hover {
      background-color: rgba(255, 255, 255, 0.1);
      cursor: pointer;
    }
  }
`;

export const Divider = styled.hr`
  background: black;
  margin: 0;
`;
