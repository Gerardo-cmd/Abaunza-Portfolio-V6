import { Box, Stack } from '@chakra-ui/react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import NextLink from 'next/link';

const Footer = () => {
  return (
    <Box align="center" opacity={0.8} fontSize="3xl">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          textAlign="center"
          flexGrow={1}
          style={{ position: 'relative' }}
          mt={{ base: 4, md: 0 }}
        >
            <NextLink href="https://github.com/Gerardo-cmd">
                <IoLogoGithub />
            </NextLink>
            <NextLink href="https://www.linkedin.com/in/gerardo-abaunza-abaaa0170/">
                <IoLogoLinkedin />
            </NextLink>
        </Stack>
    </Box>
  )
}

export default Footer