import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.darkGrey};
    line-height: 1.5;
    overflow-x: hidden;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  ul, ol {
    list-style: none;
  }
  
  button, input, textarea {
    font-family: inherit;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  h1 {
    font-size: 2.5rem;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 3rem;
    }
  }
  
  h2 {
    font-size: 2rem;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 2.5rem;
    }
  }
  
  h3 {
    font-size: 1.5rem;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 2rem;
    }
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  section {
    padding: ${({ theme }) => theme.spacing.xl} 0;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;
