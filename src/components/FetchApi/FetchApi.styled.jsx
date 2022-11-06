import styled from 'styled-components';

export const SectionFetchApi = styled.section`
  padding: 50px 0;
`;
export const ContainerFetchApi = styled.div`
  padding: 0 30px;
`;
export const FormFetchApi = styled.form`
  display: flex;
  gap: 30px;
  justify-content: center;
`;
export const LabelFetchApi = styled.label`
  font-size: 24px;
  font-family: 600;
  color: #ffffff;
`;
export const InputFetchApi = styled.input`
  width: 400px;
  height: 30px;
  margin-left: 30px;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  &:hover,
  &:focus {
    background-color: #ccbfbf;
  }
`;
