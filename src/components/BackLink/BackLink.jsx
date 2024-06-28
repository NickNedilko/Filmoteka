import { Icon, StyledLink } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <Icon />
      {children}
    </StyledLink>
  );
};