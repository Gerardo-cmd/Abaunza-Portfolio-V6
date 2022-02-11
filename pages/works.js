import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbApplicationTracker from '../public/images/works/application-tracker-home.png'
import thumbSolarSystem from '../public/images/works/solarsystem-1.png'
import thumbRecipe from '../public/images/works/recipe-1.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="applicationtracker" title="Job Application Tracker" thumbnail={thumbApplicationTracker}>
            A stand alone application tracker 
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
                    A recipe application
                </WorkGridItem>
            </Section>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'