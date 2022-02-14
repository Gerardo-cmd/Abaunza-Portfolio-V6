import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Job Application Tracker">
    <Container>
      <Title>
        Job Application Tracker <Badge>2022-</Badge>
      </Title>
      <P>
        Allows users to make accounts in order to keep track of their job applications. Users can filter them and query them as well as observe data on the applications.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://applicationtracker.netlify.app/">
            https://applicationtracker.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Typescript, MaterialUI, Node.js, Express, Firebase, Netlify (Frontend), Heroku (Backend)</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/application-tracker-home.png" alt="Job Application Tracker" />
      <WorkImage src="/images/projects/application-tracker-user.png" alt="Job Application Tracker" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'