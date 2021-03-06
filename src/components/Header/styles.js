import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 0px;
  padding: 30px;

  @media (max-width: 767px) {
    padding: 20px 0;
  }

  span {
    color: #fff;
    margin-left: 10px;
    font-size: 20px;
  }
`;

export default HeaderContainer;
