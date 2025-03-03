import React from 'react';
import styled from 'styled-components';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Parallax from '../components/ui/Parallax';
import Button from '../components/ui/Button';
import Grid from '../components/ui/Grid';

// Placeholder image URLs - replace with actual images
const heroImage = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80';
const residentialImage = 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';
const renovationImage = 'https://images.unsplash.com/photo-1574621100236-d25b64cfd647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80';
const customHomeImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';
const projectManagementImage = 'https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';
const designBuildImage = 'https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80';

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

const ServiceSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  
  &:nth-child(even) {
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      direction: rtl;
      
      .content {
        direction: ltr;
      }
    }
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  
  h3 {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: 1.8rem;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    line-height: 1.6;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  &::before {
    content: '✓';
    color: ${({ theme }) => theme.colors.red};
    font-weight: bold;
    margin-right: ${({ theme }) => theme.spacing.sm};
  }
`;

const ProcessCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  height: 100%;
  transition: transform ${({ theme }) => theme.transitions.medium};
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ProcessNumber = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: ${({ theme }) => theme.borderRadius.round};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.md};
  font-size: 1.5rem;
  font-weight: 700;
`;

const ProcessTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const ProcessDescription = styled.p`
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

const ServicesPage: React.FC = () => {
  return (
    <>
      <PageHeader
        image={heroImage}
        height="50vh"
        speed={0.2}
        overlayColor="#000000"
        overlayOpacity={0.6}
      >
        <PageTitle>Our Services</PageTitle>
      </PageHeader>
      
      <Section padding="large">
        <Container>
          <SectionTitle
            title="What We Offer"
            subtitle="Comprehensive construction services for all your needs"
            alignment="center"
          />
          
          
          <ServiceSection>
            <ServiceImage src={residentialImage} alt="Residential Development" />
            <ServiceContent className="content">
              <h3>Residential Development</h3>
              <p>
                Our residential development services include custom home building, multi-family 
                housing, and residential communities. We work closely with our clients to create 
                living spaces that meet their needs and exceed their expectations.
              </p>
              <FeatureList>
                <FeatureItem>Custom Homes</FeatureItem>
                <FeatureItem>Multi-Family Housing</FeatureItem>
                <FeatureItem>Residential Communities</FeatureItem>
                <FeatureItem>Luxury Homes</FeatureItem>
                <FeatureItem>Affordable Housing</FeatureItem>
                <FeatureItem>Sustainable Homes</FeatureItem>
              </FeatureList>
              <Button to="/contact" variant="primary">
                Get a Quote
              </Button>
            </ServiceContent>
          </ServiceSection>
          
          <ServiceSection>
            <ServiceImage src={renovationImage} alt="Renovation & Remodeling" />
            <ServiceContent className="content">
              <h3>Renovation & Remodeling</h3>
              <p>
                Transform your existing space with our renovation and remodeling services. 
                Whether you're looking to update your kitchen, bathroom, or entire home, 
                we have the skills and experience to make your vision a reality.
              </p>
              <FeatureList>
                <FeatureItem>Kitchen Remodeling</FeatureItem>
                <FeatureItem>Bathroom Remodeling</FeatureItem>
                <FeatureItem>Home Additions</FeatureItem>
                <FeatureItem>Basement Finishing</FeatureItem>
                <FeatureItem>Exterior Renovations</FeatureItem>
                <FeatureItem>Interior Design</FeatureItem>
              </FeatureList>
              <Button to="/contact" variant="primary">
                Get a Quote
              </Button>
            </ServiceContent>
          </ServiceSection>
          
          <ServiceSection>
            <ServiceImage src={customHomeImage} alt="Custom Home Building" />
            <ServiceContent className="content">
              <h3>Custom Home Building</h3>
              <p>
                We specialize in building custom homes that reflect your unique style and 
                preferences. From initial design to final construction, we work with you 
                every step of the way to create your dream home.
              </p>
              <FeatureList>
                <FeatureItem>Personalized Design</FeatureItem>
                <FeatureItem>Quality Craftsmanship</FeatureItem>
                <FeatureItem>Energy-Efficient Options</FeatureItem>
                <FeatureItem>Smart Home Technology</FeatureItem>
                <FeatureItem>Outdoor Living Spaces</FeatureItem>
                <FeatureItem>Custom Finishes</FeatureItem>
              </FeatureList>
              <Button to="/contact" variant="primary">
                Get a Quote
              </Button>
            </ServiceContent>
          </ServiceSection>
          
          <ServiceSection>
            <ServiceImage src={projectManagementImage} alt="Project Management" />
            <ServiceContent className="content">
              <h3>Project Management</h3>
              <p>
                Our project management services ensure that your construction project is 
                completed on time, within budget, and to your satisfaction. We handle all 
                aspects of the project, from planning to execution.
              </p>
              <FeatureList>
                <FeatureItem>Budget Management</FeatureItem>
                <FeatureItem>Schedule Coordination</FeatureItem>
                <FeatureItem>Quality Control</FeatureItem>
                <FeatureItem>Subcontractor Management</FeatureItem>
                <FeatureItem>Permit Acquisition</FeatureItem>
                <FeatureItem>Progress Reporting</FeatureItem>
              </FeatureList>
              <Button to="/contact" variant="primary">
                Get a Quote
              </Button>
            </ServiceContent>
          </ServiceSection>
          
          <ServiceSection>
            <ServiceImage src={designBuildImage} alt="Design-Build Services" />
            <ServiceContent className="content">
              <h3>Design-Build Services</h3>
              <p>
                Our design-build approach streamlines the construction process by combining 
                design and construction services under one contract. This integrated approach 
                leads to faster project completion, cost savings, and better communication.
              </p>
              <FeatureList>
                <FeatureItem>Single Point of Responsibility</FeatureItem>
                <FeatureItem>Streamlined Communication</FeatureItem>
                <FeatureItem>Cost Savings</FeatureItem>
                <FeatureItem>Faster Project Completion</FeatureItem>
                <FeatureItem>Collaborative Approach</FeatureItem>
                <FeatureItem>Integrated Design and Construction</FeatureItem>
              </FeatureList>
              <Button to="/contact" variant="primary">
                Get a Quote
              </Button>
            </ServiceContent>
          </ServiceSection>
        </Container>
      </Section>
      
      <Section variant="secondary" padding="large">
        <Container>
          <SectionTitle
            title="Our Process"
            subtitle="How we bring your construction project to life"
            alignment="center"
          />
          
          <Grid
            columns={{
              xs: 1,
              sm: 2,
              md: 2,
              lg: 4,
            }}
            gap="medium"
          >
            <ProcessCard>
              <ProcessNumber>1</ProcessNumber>
              <ProcessTitle>Consultation</ProcessTitle>
              <ProcessDescription>
                We meet with you to discuss your project goals, budget, and timeline.
              </ProcessDescription>
            </ProcessCard>
            
            <ProcessCard>
              <ProcessNumber>2</ProcessNumber>
              <ProcessTitle>Design</ProcessTitle>
              <ProcessDescription>
                Our team creates detailed plans and designs based on your requirements.
              </ProcessDescription>
            </ProcessCard>
            
            <ProcessCard>
              <ProcessNumber>3</ProcessNumber>
              <ProcessTitle>Construction</ProcessTitle>
              <ProcessDescription>
                We bring your project to life with quality craftsmanship and attention to detail.
              </ProcessDescription>
            </ProcessCard>
            
            <ProcessCard>
              <ProcessNumber>4</ProcessNumber>
              <ProcessTitle>Completion</ProcessTitle>
              <ProcessDescription>
                We conduct a final walkthrough and ensure your complete satisfaction.
              </ProcessDescription>
            </ProcessCard>
          </Grid>
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

export default ServicesPage;
