import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background: url(${({ icon }) => icon}) no-repeat 50% 50% / 40%;
  border: none;
  transition: all 0.3s;
  outline: none;

  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
