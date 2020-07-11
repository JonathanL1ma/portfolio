import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'rebass/styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';
import Fork from '../components/Icons/Fork';
import Star from '../components/Icons/Star';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const CARD_HEIGHT = '200px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${(props) => props.theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const Project = ({
  url,
  name,
  description,
  stargazers,
  forkCount
}) => (
    <a href={url} style={{ 'textDecoration': 'none' }} target="_blank">
      <Card p={0}>
        <span>
          <Title my={2} pb={1} color="text">
            {name}
          </Title>
        </span>
        <Text width={[1]} style={{ overflow: 'auto' }} color="text">
          {description}
        </Text>
        <div style={{ display: 'flex', marginTop: '16px', color: 'black' }}>
          <div>
            <Star />
            <span style={{ marginLeft: '4px' }}>{stargazers.totalCount}</span>
          </div>
          <div style={{ marginLeft: '8px' }}>
            <Fork />
            <span style={{ marginLeft: '4px' }}>{forkCount}</span>
          </div>
        </div>
      </Card>
    </a>
  );

Project.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stargazers: PropTypes.object.isRequired,
  forkCount: PropTypes.number.isRequired
};

const Projects = () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(
              first: 25
              orderBy: { field: STARGAZERS, direction: DESC }
              privacy: PUBLIC
              ownerAffiliations: [OWNER]
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <Section.Container id="projects" Background={Background}>
      <Section.Header name="Projects" icon="💻" label="notebook" />
      <CardContainer minWidth="350px">
        {edges.map(({ node }, i) => (
          <div style={{ width: '100%' }}>
            <Fade bottom delay={i * 200} key={node.id}>
              <Project {...node} />
            </Fade>
          </div>
        ))}
      </CardContainer>
    </Section.Container>
  );
}

export default Projects;

