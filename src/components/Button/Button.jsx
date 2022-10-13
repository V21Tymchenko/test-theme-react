import styled from 'styled-components';

const StyledButton = styled.button`
  margin: ${p => p.theme.space[0]}px;
  text-decoration: ${p => p.theme.borders.none};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  background-color: ${p =>
    p.disabled ? p.theme.colors.background : p.theme.colors.modes.dark.primary};
  color: ${p => p.theme.colors.modes.dark.text};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal};
  cursor: pointer;
  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${p => p.theme.colors.nice};
  }
`;

export const Button = ({ type = 'button', disabled = false, children }) => {
  return (
    <StyledButton type={type} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
