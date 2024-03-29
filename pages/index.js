import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    Image,
    Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio';
import Section from '../components/section';
const Page = () => {
    return (
        <Layout>
        <Container>
            <Box 
                borderRadius="lg" 
                bg="whiteAlpha.200" 
                p={3} 
                mb={6} 
                align="center"
            >
                Hi, I&apos;m a full-stack developer based in Virginia, USA!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Gerardo Abaunza
                    </Heading>
                    <p>Software Engineer</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        width="100px"
                        height="100px"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/gerardo.jpg"
                        alt="Profile image"
                    />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                About
                </Heading>
                <Paragraph>
                Gerardo is a Software Engineer based in Northern Virginia with a
                passion for building software. When not online, he loves
                hanging out with his friends and loved ones or cuddling up in his room. Currently, he is working at{' '}
                <NextLink href="/experiences/coursera">
                    <Link>Coursera</Link>
                </NextLink>
                .
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/projects">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                        My Projects
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                Bio
                </Heading>
                <BioSection>
                <BioYear>2000</BioYear>
                Born in Fairfax, Virginia
                </BioSection>
                <BioSection>
                <BioYear>2018</BioYear>
                    Graduated from Centreville High School
                </BioSection>
                <BioSection>
                <BioYear>2021</BioYear>
                    Began interning at CMT Solutions &lpar;Now Careviso&rpar;
                </BioSection>
                <BioSection>
                <BioYear>2022</BioYear>
                    Completed his Bachelor&apos;s in Computer Science at George Mason University and began working at Coursera
                </BioSection>
                
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                I ♥
                </Heading>
                <Paragraph>
                Anime, Games, Music, Space, Cats
                </Paragraph>
            </Section>
        </Container>
        </Layout>
    );
}

export default Page;