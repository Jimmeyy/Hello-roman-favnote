import styled from 'styled-components';

const ButtonIcon = styled.button`
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background: url(${({ icon }) => icon}) no-repeat 50% 50% / 40%;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  border: none;
`;

export default ButtonIcon;
