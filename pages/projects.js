import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import thumbApplicationTracker from '../public/images/projects/application-tracker-home.png';
import thumbSolarSystem from '../public/images/projects/solarsystem-1.png';
import thumbRecipe from '../public/images/projects/recipe-1.png';
import thumbWeather from '../public/images/projects/weather-1.png';

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="applicationtracker" title="Job Application Tracker" thumbnail={thumbApplicationTracker}>
           2022
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="solarsystem" title="Solar System Application" thumbnail={thumbSolarSystem}>
            2021
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="weather" title="Weather Application" thumbnail={thumbWeather}>
            2021
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="recipe" title="Recipe Application" thumbnail={thumbRecipe}>
              2021
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'