import React from 'react';
import styled from 'styled-components';
import { Text, Box, Link } from 'rebass/styled-components';
import Fade from 'react-reveal/Fade';

const FooterContainer = styled.div`
  max-width: 1366px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  @media (max-width: 400px) {
    flex-direction: column-reverse;

    & > * {
      margin-bottom: 10px;
    }
  }
`;

const TextFooter = styled(Text)`
  color: ${(props) => props.theme.colors.background};

  & a {
    color: ${(props) => props.theme.colors.background};
    transition: color ease 0.5s;

    &:hover {
      color: ${(props) => props.theme.colors.primaryLight};
    }
  }
`;

const Footer = () => (
  <Box p={[2, 3]} backgroundColor="primaryDark" id="footer">
    <FooterContainer>
      <Fade left>
        <TextFooter fontSize={[2, 3]}>
          <Link href="https://www.gatsbyjs.org/">Gatsby</Link>
          <span>, </span>
          <Link href="https://www.contentful.com/" mr={1}>
            Contentful
          </Link>
          <span> and </span>
          <Link href="https://www.netlify.com/" mr={1}>
            Netlify
          </Link>
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </TextFooter>
      </Fade>
    </FooterContainer>
  </Box>
);

export default Footer;
