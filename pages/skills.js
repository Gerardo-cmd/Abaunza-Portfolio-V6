import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import PublicisSapientLogo from '../public/images/publicis-sapient-logo.png'
import CmtLogo from '../public/images/cmt-logo.jpeg'

const Skills = () => (
  <Layout title="Skills">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Skills
      </Heading>
      <SimpleGrid columns={[2, 3]} gap={8}>
        <Section delay={0.1}>
            <GridItem id="Frontend" title="Frontend">
                <SimpleGrid columns={[1, 2]} gap={1}>
                    <GridItem id="Javascript" title="Javascript" />  
                    <GridItem id="Typescript" title="Typescript" />
                    <GridItem id="HTML" title="HTML" />
                    <GridItem id="CSS" title="CSS" />
                    <GridItem id="Bootstrap" title="Bootstrap" />
                    <GridItem id="React" title="React" />
                    <GridItem id="Next.js" title="Next.js" />
                    <GridItem id="Three.js" title="Three.js" />
                </SimpleGrid>
            </GridItem>
        </Section>
        <Section delay={0.1}>
            <GridItem id="Backend" title="Backend">
                <SimpleGrid columns={[1, 2]} gap={1}>
                    <GridItem id="Node.js" title="Node.js" />  
                    <GridItem id="Express" title="Express" />
                    <GridItem id="Jest" title="Jest" />
                    <GridItem id="Ruby" title="Ruby" />
                    <GridItem id="Rails" title="Rails" />
                    <GridItem id="Rspec" title="Rspec" />
                    <GridItem id="Firebase" title="Firebase" />
                </SimpleGrid>
            </GridItem>
        </Section>
        <Section delay={0.1}>
            <GridItem id="Version Control" title="Version Control">
                <SimpleGrid columns={2} gap={1}>
                    <GridItem id="GitHub" title="GitHub" />  
                    <GridItem id="Jira" title="Jira" />
                </SimpleGrid>
            </GridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Skills
export { getServerSideProps } from '../components/chakra'