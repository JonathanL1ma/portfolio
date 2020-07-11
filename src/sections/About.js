import React from 'react';
import { Flex } from 'rebass/styled-components';
import styled from 'styled-components';
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

const AboutMediaQuery = styled.div`
  display: flex;

  @media (max-width: 1460px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextMediaQuery = styled.div`
  font-size: 2.5em;
  width: 70%;
  margin-right: 72px;

  @media (max-width: 1460px) {
    margin-right: 0px;
    text-align: justify;
  }

  @media (max-width: 720px) {
    font-size: 2em;
    margin-right: 0px;
    text-align: justify;
  }

  @media (max-width: 520px) {
    font-size: 1.5em;
    margin-right: 0px;
    text-align: justify;
  }
`;

const About = () => (
  <Section.Container id="about" Background={Background}>
    <Section.Header name="About me" icon="🙋‍♂️" label="person" />
    <Flex justifyContent="flex-start" alignItems="center" flexWrap="wrap">
      <Fade bottom>
        <AboutMediaQuery>
          <TextMediaQuery>
            <p>Soy una persona autodidacta que le gusta crear aplicaciones multiplataforma con las tecnologías más recientes del mercado 🚀. Me enfoco en el desarrollo con React para el ámbito web y para mobile utilizo Flutter. Desarrollar aplicaciones es uno de mis hobbies principales junto a jugar videojuegos 🎲. Me considero una persona muy activa, alegre, dedicada, responsable y trabajadora.</p>
          </TextMediaQuery>
          <img src='../../static/me.jpg' alt='Me' style={{ width: '50%', height: '70%', borderRadius: '24px', overflow: 'hidden', objectFit: 'cover' }} />
        </AboutMediaQuery>
      </Fade>
    </Flex>
  </Section.Container>
);

export default About;
