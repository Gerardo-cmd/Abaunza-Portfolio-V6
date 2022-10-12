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
	      <li>Took ownership in different components which entails scoping, maintaing for bugs, etc.</li>
	      <li>Contributed to unit tests and end-to-end tests using Jest, React Testing Library, and Puppeteer.</li>
	      <li>Delivered on new features for different milestones/projects along with Epics (A/B Testing).</li>
	      <li>Worked on Epic Cleanups which resulted in tens of thousands of lines of unused codes being deleted, thereby reducing tech debt.</li>
	      <li>Partook in developer activites such as code reviews, sprint planning, and quarterly retrospectives.</li>
            </ul>
          </P>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Experience
export { getServerSideProps } from '../../components/chakra'
