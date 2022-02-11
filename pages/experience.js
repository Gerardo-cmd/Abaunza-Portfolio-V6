import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { Meta } from '../components/work'
import P from '../components/paragraph'

import PublicisSapientLogo from '../public/images/publicis-sapient-logo.png'
import CmtLogo from '../public/images/cmt-logo.jpeg'

const Experience = () => (
  <Layout title="Experience">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Experience
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <GridItem id="CMT Solutions" title="CMT Solutions" thumbnail={CmtLogo}>
            <Meta>Position</Meta>
            <p>Software Engineer Intern</p>
            <Meta>Stack</Meta>
            <p>React, Javascript, Ruby, Rails, Node.js, AWS</p>  
          </GridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Experience
export { getServerSideProps } from '../components/chakra'