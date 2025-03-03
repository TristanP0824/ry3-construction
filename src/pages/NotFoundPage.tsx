import React from 'react';
import styled from 'styled-components';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 60vh;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gold};
  margin: 0;
  line-height: 1;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 12rem;
  }
`;

const ErrorTitle = styled.h2`
  font-size: 2rem;
  margin: ${({ theme }) => theme.spacing.md} 0;
  color: ${({ theme }) => theme.colors.darkGrey};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const ErrorMessage = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
  }
`;

const NotFoundPage: React.FC = () => {
  return (
    <Section>
      <Container>
        <NotFoundContainer>
          <ErrorCode>404</ErrorCode>
          <ErrorTitle>Page Not Found</ErrorTitle>
          <ErrorMessage>
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable. Please check the URL or navigate back to the homepage.
          </ErrorMessage>
          <ButtonGroup>
            <Button to="/" size="large">
              Back to Home
            </Button>
            <Button to="/contact" variant="outline" size="large">
              Contact Us
            </Button>
          </ButtonGroup>
        </NotFoundContainer>
      </Container>
    </Section>
  );
};

export default NotFoundPage;
