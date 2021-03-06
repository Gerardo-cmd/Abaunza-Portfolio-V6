import Head from 'next/head';
import dynamic from 'next/dynamic'
import Navbar from '../navbar';
import { Box, Container } from '@chakra-ui/react';
import VoxelAstronautLoader from '../voxel-astronaut-loader'
import Footer from '../footer';

const LazyVoxelAstronaut = dynamic(() => import('../voxel-astronaut'), {
    ssr: false,
    loading: () => <VoxelAstronautLoader />
})

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Gerardo Abaunza" />
                <title>Gerardo Abaunza</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.lg" pt={14}>
                <LazyVoxelAstronaut />
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main;