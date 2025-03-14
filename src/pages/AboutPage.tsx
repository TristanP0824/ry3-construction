import React from 'react';
import styled from 'styled-components';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Parallax from '../components/ui/Parallax';

// Placeholder image URL - replace with actual image
const heroImage = 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1737&q=80';

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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Paragraph = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
`;

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const MissionVisionSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const MissionVisionCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: ${({ theme }) => theme.spacing.xl};
  height: 100%;
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: 1.5rem;
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.gold};
  }
`;

const CardText = styled.p`
  line-height: 1.6;
`;


const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader
        image={heroImage}
        height="50vh"
        speed={0.2}
        overlayColor="#000000"
        overlayOpacity={0.6}
      >
        <PageTitle>About Us</PageTitle>
      </PageHeader>
      
      <Section padding="large">
        <Container>
          <AboutContent>
            <AboutText>
              <SectionTitle
                title="Our Story"
                subtitle="Building Excellence in the Rio Grande Valley Since 2005"
              />
              <Paragraph>
                RY3 Construction was founded in 2023 by Ruben Ybarra abd The Ybarra Family
                with a shared vision of providing high-quality construction services 
                to the Rio Grande Valley. What started as a small operation has grown into one 
                of the region's most trusted construction companies.
              </Paragraph>
              <Paragraph>
                Headquartered in Los Fresnos, TX, we have completed hundreds of projects across 
                the Rio Grande Valley, from commercial buildings to custom homes. Our success is 
                built on our commitment to quality, integrity, and customer satisfaction.
              </Paragraph>
              <Paragraph>
                Today, RY3 Construction employs over 50 skilled professionals, including architects, 
                engineers, project managers, and craftsmen. We continue to grow and evolve, but our 
                core values remain the same: delivering exceptional results, building lasting relationships, 
                and contributing to the development of our community.
              </Paragraph>
            </AboutText>
            <AboutImage src={heroImage} alt="R&R Construction Team" />
          </AboutContent>
        </Container>
      </Section>
      
      <Section variant="secondary" padding="large">
        <Container>
          <SectionTitle
            title="Our Mission & Vision"
            subtitle="Guiding principles that drive our work"
            alignment="center"
          />
          
          <MissionVisionSection>
            <MissionVisionCard>
              <CardTitle>Our Mission</CardTitle>
              <CardText>
                To deliver exceptional construction services that exceed our clients' expectations, 
                while maintaining the highest standards of quality, safety, and integrity. We are 
                committed to building not just structures, but lasting relationships with our clients, 
                employees, and community.
              </CardText>
            </MissionVisionCard>
            
            <MissionVisionCard>
              <CardTitle>Our Vision</CardTitle>
              <CardText>
                To be the premier construction company in the Rio Grande Valley, recognized for our 
                excellence, innovation, and commitment to sustainable building practices. We aim to 
                contribute to the growth and development of our region by creating spaces that enhance 
                the quality of life for our community.
              </CardText>
            </MissionVisionCard>
          </MissionVisionSection>
        </Container>
      </Section>
      
    </>
  );
};

export default AboutPage;
