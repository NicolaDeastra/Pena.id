import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export default extendTheme({
  components: {
    Heading: {
      variants: {
        link: {
          color: 'blue.600',
          _groupHover: {
            textDecor: 'underline',
          },
        },
      },
    },
    Link: {
      variants: {
        link: props => ({
          color: mode('#f52569', '#fb83a4')(props),
        }),
      },
    },
    Button: {
      variants: {
        solid: props => ({
          color: mode('#F6F6F6', '#f8f0f2')(props),
          bg: mode('#f52569', '#f8537f')(props),
          _hover: {
            bg: mode('#dc0e5d', '#f52569')(props),
          },
          _active: {
            bg: mode('#ac0754', '#dc0e5d')(props),
          },
        }),
        secondary: props => ({
          bg: mode('#bce7f1', '#4A4A4A')(props),
          _hover: {
            bg: mode('#98d9e6', '#282626')(props),
          },
          _active: {
            bg: mode('#72cdda', '#150a0d')(props),
          },
        }),
      },
    },
  },
  font: {
    body: 'PT Sans, sans-serif',
  },
  fontSizes: {
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '24px',
    '2xl': '28px',
    '3xl': '36px',
    '4xl': '48px',
    '5xl': '64px',
    '6xl': '72px',
  },
  sizes: {
    '4xs': '12rem',
    '5xs': '10rem',
    '6xs': '8rem',
    '7xs': '6rem',
    '8xs': '4rem',
  },
  space: {},
  styles: {
    global: props => ({
      body: {
        bg: mode('#F6F6F6', '#303030')(props),
        color: mode('#262626', '#f8f0f2')(props),
      },
    }),
  },
});
