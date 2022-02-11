import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

//Dark - #202023
// Dark Space - #0cbaba
const styles = {
  global: props => ({
    body: {
      bg: 'linear-gradient(-10deg, #111111 0%, #181820 25%)',
      minHeight: "100vh"
      
      
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: '#ff63c3',
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme