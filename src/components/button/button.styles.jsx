import styled from 'styled-components';

export const BaseButton = styled.button`
  width: auto;
  padding: 0.5rem 0.75rem;
  font-size: 16px;
  background-color: #96a3ed;
  border-radius: 5px;
  color: white;
  font-family: inherit;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: #f5365c;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
  color: #fff;

  &:hover {
    transform: translateY(-1);
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const OutlineButton = styled(BaseButton)`
  background-color: #fff;
  color: #5e72e4;
  border: 1px solid #5e72e4;

  &:hover {
    background-color: #5e72e4;
    color: #fff;
  }
`;
