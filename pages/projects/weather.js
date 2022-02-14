import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Weather Application">
    <Container>
      <Title>
        Weather Application <Badge>2021-</Badge>
      </Title>
      <P>
        Allows users to search for the weather in different locations globally.
        It will return the actual temperature, what temperature it feels like, the humidity, and the visibility.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://abaunza-weather-application.herokuapp.com/">
            https://abaunza-weather-application.herokuapp.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, Node.js, Express, Handlebars, Heroku</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/weather-1.png" alt="Weather Application" />
      <WorkImage src="/images/projects/weather-2.png" alt="Weather Application" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'