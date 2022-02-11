import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Recipe Application">
    <Container>
      <Title>
        Recipe Application <Badge>2021-</Badge>
      </Title>
      <P>
      Allows users to create, update, read, and delete recipes. 
      Users may also search for recipes and save them instead of creating their own.
      Uses the Spoonacular API to allow users to search for new recipes      
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://recipe-app-jg.netlify.app/index.html">
          https://recipe-app-jg.netlify.app/index.html <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, HTML, CSS, Bootstrap, Node.js, Express, PostgreSQL</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/recipe-1.png" alt="Recipe App" />
      <WorkImage src="/images/works/recipe-2.png" alt="Recipe App" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'