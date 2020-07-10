import React from 'react';
import { Box, Flex } from 'rebass/styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';


const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

// const ProfilePicture = styled(Image)`
//   border-radius: 50%;
//   transition: all 0.25s ease-out;

//   &:hover {
//     border-radius: 20%;
//   }
// `;

const About = () => (
  <Section.Container id="about" Background={Background}>
    <Section.Header name="About me" icon="🙋‍♂️" label="person" />
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      <Box
        width={[1, 1, 2 / 6]}
        style={{ maxWidth: '300px', margin: 'auto' }}
      >
        <Fade right>
          {/* <ProfilePicture
                  src={profile.image.src}
                  alt={profile.title}
                  mt={[4, 4, 0]}
                  ml={[0, 0, 1]}
                /> */}
        </Fade>
      </Box>
    </Flex>
  </Section.Container>
);

export default About;
