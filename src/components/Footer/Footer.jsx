import { StyledFooter, List, StyledLink, StyledTextLink, Text } from './Footer.styled';

// import scrollToTop from '../helpers/ScrollToTop';

const Footer = () => {

  const date = new Date().getFullYear();

  const handleClick = (e) => {
    e.target.blur();
    // scrollToTop();
  }

  return (
    <StyledFooter id='contact'>
 

  
    <Text>© {date}. All rights are reserved. Developed by <StyledLink href="https://github.com/NickNedilko" aria-label="link to Github" rel="noopener noreferrer nofollow" target='_blank' onClick={(e) => e.target.blur()}>Mykola Nedilko</StyledLink></Text>
    </StyledFooter>
  )
}

export default Footer;
