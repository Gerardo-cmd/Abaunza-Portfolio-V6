import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/experience'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Experience = () => (
  <Layout title="CMT Solutions">
    <Container>
      <Title>
        CMT Solutions | Software Engineer Intern | <Badge>May, 2021 - May, 2022</Badge>
      </Title>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Javascript, Node.js, Ruby, Rails, AWS</span>
        </ListItem>
        <br />
        <ListItem>
          <P>
            <ul>
                <li>Developed and supported web applications with a team using React and Ruby on Rails</li>
                <li>Developed and maintained unit and integration testing using Jest and Rspec</li>
                <li>Independently designed and developed an application (Node.js and AWS) for internal use which increased productivity from other employees</li>
                <li>Configured a google chrome extension to retrieve data from our API to auto-fill forms on different portals using JavaScript and React.</li>
                <li>Used code enabling tools such as GitHub and Jira to view everyone’s progress on tickets and perform code reviews</li>
                <li>Took part in stakeholder meetings to see how development expectations are defined for projects from the outset</li>
                <li>Attended all developer activities, including daily scrum meetings, iteration planning, and design meetings</li>
            </ul>
          </P>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Experience
export { getServerSideProps } from '../../components/chakra'