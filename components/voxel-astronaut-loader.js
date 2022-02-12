import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const AstronautSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const AstronautContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-astronaut"
    m="auto"
    mt={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-200px']}
    w={[300, 460, 620]}
    h={[300, 490, 650]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <AstronautContainer>
      <AstronautSpinner />
    </AstronautContainer>
  )
}

export default Loader