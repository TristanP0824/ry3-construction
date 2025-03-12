import React from 'react';
import styled from 'styled-components';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Parallax from '../components/ui/Parallax';
import Accordion from '../components/ui/Accordion';
import Button from '../components/ui/Button';

// Placeholder image URLs - replace with actual images
const heroImage = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';

// FAQ data
const generalFaqs = [
  {
    title: 'What areas do you serve?',
    content: 'R&R Construction primarily serves the Rio Grande Valley area in Texas, including Los Fresnos, Brownsville, McAllen, Harlingen, South Padre Island, and surrounding communities.',
  },
  {
    title: 'How long has R&R Construction been in business?',
    content: 'R&R Construction was founded in 2005 and has been providing high-quality construction services to the Rio Grande Valley for over 15 years.',
  },
  {
    title: 'What types of projects do you handle?',
    content: 'We handle a wide range of construction projects, including commercial construction, residential development, custom home building, renovations, and more. Our team has experience with projects of various sizes and complexities.',
  },
  {
    title: 'How do I request a quote for my project?',
    content: 'You can request a quote by contacting us through our website, calling our office, or visiting us in person. We\'ll gather information about your project and provide a detailed estimate.',
  },
  {
    title: 'What types of commercial projects do you work on?',
    content: 'We work on a variety of commercial projects, including office buildings, retail spaces, restaurants, medical facilities, hotels, and industrial buildings. Our team has the expertise to handle commercial projects of all sizes.',
  },
  {
    title: 'What is the process in building a home?',
    content: 'The cost of building a custom home varies based on factors such as size, materials, finishes, and location. We work with clients to develop a budget that meets their needs and provide transparent pricing throughout the process.',
  },
];

const PageHeader = styled(Parallax)`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 4rem;
  }
`;

const CategoryTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.2rem;
  }
`;

const AccordionWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const ContactSection = styled(Section)`
  text-align: center;
`;

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.white};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.white};
`;

const FAQPage: React.FC = () => {
  return (
    <>
      <PageHeader
        image={heroImage}
        height="50vh"
        speed={0.2}
        overlayColor="#000000"
        overlayOpacity={0.6}
      >
        <PageTitle>Frequently Asked Questions</PageTitle>
      </PageHeader>
      
      <Section padding="large">
        <Container>
          <SectionTitle
            title="Common Questions"
            subtitle="Find answers to frequently asked questions about our services"
            alignment="center"
          />
          
          <AccordionWrapper>
            <CategoryTitle>General Questions</CategoryTitle>
            <Accordion items={generalFaqs} />
          </AccordionWrapper>
        </Container>
      </Section>
      
      <ContactSection variant="dark" padding="large">
        <Container>
          <ContactContent>
            <ContactTitle>Still Have Questions?</ContactTitle>
            <ContactText>
              If you couldn't find the answer to your question, our team is here to help.
              Contact us directly and we'll be happy to assist you.
            </ContactText>
            <Button to="/contact" size="large">
              Contact Us Now
            </Button>
          </ContactContent>
        </Container>
      </ContactSection>
    </>
  );
};

export default FAQPage;
