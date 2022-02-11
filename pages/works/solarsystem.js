import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Solar System Application">
    <Container>
      <Title>
        Solar System Application <Badge>2021-</Badge>
      </Title>
      <P>
        Allows users to view information about the planets and moons in our solar system.
        Uses the Solar System Open Data API to gather information on the celestial bodies.    
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://solar-system-firebase.herokuapp.com/">
          https://solar-system-firebase.herokuapp.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Javascript, Bootstrap, Node.js, Express, Firebase</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/solarsystem-1.png" alt="Job Application Tracker" />
      <WorkImage src="/images/works/solarsystem-2.png" alt="Job Application Tracker" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'