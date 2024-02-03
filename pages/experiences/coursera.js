import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/experience'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Experience = () => (
  <Layout title="Coursera">
    <Container>
      <Title>
        Coursera | Software Engineer I | <Badge>June, 2022 - Present</Badge>
      </Title>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Typescript, GraphQL</span>
        </ListItem>
        <br />
        <ListItem>
          <P>
     	      <ul>
              <li>Worked in a cross functional team of Engineers, Designers, Product Managers, and Marketing.</li>
              <li>Implemented features for frontend using React, Typescript, and GraphQL.</li>
              <li>Contributed to unit tests and end-to-end tests using Jest, React Testing Library, and Puppeteer.</li>
              <li>Delivered on projects that increased our views for our degree description pages by about 15%.</li>
              <li>Contributed to a project that updated and improved our UI in order to increase our visual cohesion across all premium hub pages.</li>
              <li>Led the effort to revamp my team&apos;s end-to-end tests and contributed to Java and HOC migrations.</li>
              <li>Partook in developer activites such as code reviews, sprint planning, and retrospectives.</li>
            </ul>
          </P>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Experience
export { getServerSideProps } from '../../components/chakra'
