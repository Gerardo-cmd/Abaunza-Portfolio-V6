import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbApplicationTracker from '../public/images/projects/application-tracker-home.png'
import thumbSolarSystem from '../public/images/projects/solarsystem-1.png'
import thumbRecipe from '../public/images/projects/recipe-1.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="applicationtracker" title="Job Application Tracker" thumbnail={thumbApplicationTracker}>
            A job application tracker 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="solarsystem" title="Solar System Application" thumbnail={thumbSolarSystem}>
            A solar system info page
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
                    An application that stores recipes
                </WorkGridItem>
            </Section>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'