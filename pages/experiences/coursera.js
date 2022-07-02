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
          <span>React, Typescript, GraphQL, AWS</span>
        </ListItem>
        <br />
        <ListItem>
          <P>
            <ul>
              <li>Implemented features for frontend using React.js, Typescript, and GraphQL.</li>
              <li>Worked in a cross functional team of Engineers, PMs, and Marketing.</li>
              <li>Contributed to monitoring and testing of APIs and services to better understand real time health of products.</li>
            </ul>
          </P>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Experience
export { getServerSideProps } from '../../components/chakra'