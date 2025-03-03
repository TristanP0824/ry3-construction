import React from 'react';
import styled from 'styled-components';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Parallax from '../components/ui/Parallax';

// Placeholder image URLs - replace with actual images
const heroImage = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';
const aboutImage = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';

const HeroSection = styled(Parallax)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 4rem;
  }
  
  span {
    color: ${({ theme }) => theme.colors.red};
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  transition: transform ${({ theme }) => theme.transitions.medium};
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: ${({ theme }) => theme.borderRadius.round};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.md};
  font-size: 2rem;
`;

const ServiceTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const AboutSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const AboutText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.red};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const CallToActionSection = styled(Section)`
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.white};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.white};
`;

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection
        image={heroImage}
        height="100vh"
        speed={0.2}
        overlayColor="#000000"
        overlayOpacity={0.6}
      >
        <HeroContent>
          <HeroTitle>
            <span>RY3</span> Construction
          </HeroTitle>
          <HeroSubtitle>
            Premier Construction Services in the Rio Grande Valley
          </HeroSubtitle>
          <ButtonGroup>
            <Button to="/services" size="large">
              Our Services
            </Button>
            <Button to="/contact" variant="outline" size="large">
              Get a Quote
            </Button>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>
      
      <Section padding="large">
        <Container>
          <SectionTitle
            title="Our Services"
            subtitle="We provide a wide range of construction services for residential projects."
            alignment="center"
          />
          
          <ServicesGrid>
            <ServiceCard>
              <ServiceIcon>🏠</ServiceIcon>
              <ServiceTitle>Residential Development</ServiceTitle>
              <ServiceDescription>
                Custom home building and residential development projects.
              </ServiceDescription>
              <Button to="/services" variant="text">
                Learn More
              </Button>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceIcon>🔨</ServiceIcon>
              <ServiceTitle>Renovation & Remodeling</ServiceTitle>
              <ServiceDescription>
                Transform your existing space with our renovation services.
              </ServiceDescription>
              <Button to="/services" variant="text">
                Learn More
              </Button>
            </ServiceCard>
          </ServicesGrid>
        </Container>
      </Section>
      
      <Section variant="secondary" padding="large">
        <Container>
          <AboutSection>
            <AboutImage src={aboutImage} alt="RY3 Construction Team" />
            <AboutContent>
              <SectionTitle
                title="About RY3 Construction"
                subtitle="Building Excellence in the Rio Grande Valley Since 2005"
              />
              <AboutText>
                RY3 Construction is a premier construction contractor company headquartered in Los Fresnos, TX, 
                serving the Rio Grande Valley with excellence in residential development.
              </AboutText>
              <AboutText>
                With over 15 years of experience, our team of skilled professionals is dedicated to delivering 
                high-quality construction services that exceed our clients' expectations.
              </AboutText>
              <Button to="/about">Learn More About Us</Button>
            </AboutContent>
          </AboutSection>
        </Container>
      </Section>
      
      <Section padding="large">
        <Container>
          <SectionTitle
            title="Why Choose Us"
            subtitle="Our commitment to quality and customer satisfaction sets us apart"
            alignment="center"
          />
          
          <StatsSection>
            <StatCard>
              <StatNumber>15+</StatNumber>
              <StatLabel>Years of Experience</StatLabel>
            </StatCard>
            
            <StatCard>
              <StatNumber>500+</StatNumber>
              <StatLabel>Projects Completed</StatLabel>
            </StatCard>
            
            <StatCard>
              <StatNumber>50+</StatNumber>
              <StatLabel>Team Members</StatLabel>
            </StatCard>
            
            <StatCard>
              <StatNumber>98%</StatNumber>
              <StatLabel>Client Satisfaction</StatLabel>
            </StatCard>
          </StatsSection>
        </Container>
      </Section>
      
      <CallToActionSection variant="dark" padding="large">
        <Container>
          <CTAContent>
            <CTATitle>Ready to Start Your Project?</CTATitle>
            <CTAText>
              Contact us today to discuss your construction needs and get a free quote.
            </CTAText>
            <Button to="/contact" size="large">
              Contact Us Now
            </Button>
          </CTAContent>
        </Container>
      </CallToActionSection>
    </>
  );
};

export default HomePage;
