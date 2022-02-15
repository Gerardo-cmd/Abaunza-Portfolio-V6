import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { JobGridItem } from '../components/grid-item'
import { Meta } from '../components/project'

import CmtLogo from '../public/images/cmt-logo.jpeg'

const Experience = () => (
  <Layout title="Experience">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Experience
      </Heading>

      <SimpleGrid columns={[1, 2]} gap={6}>
        <Section delay={0.1}>
          <JobGridItem id="cmtsolutions" title="CMT Solutions" thumbnail={CmtLogo} bold>
            <h2>2021 - Present</h2>
            <Meta>Position</Meta>
            <p>Software Engineer Intern</p>
          </JobGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Experience
export { getServerSideProps } from '../components/chakra'