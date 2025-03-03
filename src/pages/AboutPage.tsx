import React from 'react';
import styled from 'styled-components';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Parallax from '../components/ui/Parallax';
import Grid from '../components/ui/Grid';
import Card from '../components/ui/Card';

// Placeholder image URLs - replace with actual images
const heroImage = 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1737&q=80';
const teamImage1 = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80';
const teamImage2 = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80';
const teamImage3 = 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
const teamImage4 = 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80';

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

const ValueCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  transition: transform ${({ theme }) => theme.transitions.medium};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const ValueIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: ${({ theme }) => theme.borderRadius.round};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.md};
  font-size: 1.5rem;
`;

const ValueTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const ValueDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const TeamMemberCard = styled(Card)`
  text-align: center;
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
                R&R Construction was founded in 2005 by Robert Rodriguez and Richard Ramirez, 
                two friends with a shared vision of providing high-quality construction services 
                to the Rio Grande Valley. What started as a small operation has grown into one 
                of the region's most trusted construction companies.
              </Paragraph>
              <Paragraph>
                Headquartered in Los Fresnos, TX, we have completed hundreds of projects across 
                the Rio Grande Valley, from commercial buildings to custom homes. Our success is 
                built on our commitment to quality, integrity, and customer satisfaction.
              </Paragraph>
              <Paragraph>
                Today, R&R Construction employs over 50 skilled professionals, including architects, 
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
      
      <Section padding="large">
        <Container>
          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
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
            <ValueCard>
              <ValueIcon>🤝</ValueIcon>
              <ValueTitle>Integrity</ValueTitle>
              <ValueDescription>
                We conduct our business with honesty, transparency, and ethical practices.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>⭐</ValueIcon>
              <ValueTitle>Excellence</ValueTitle>
              <ValueDescription>
                We strive for excellence in every aspect of our work, from planning to execution.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>🔄</ValueIcon>
              <ValueTitle>Innovation</ValueTitle>
              <ValueDescription>
                We embrace new technologies and methods to improve our services and results.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>🌱</ValueIcon>
              <ValueTitle>Sustainability</ValueTitle>
              <ValueDescription>
                We are committed to environmentally responsible construction practices.
              </ValueDescription>
            </ValueCard>
          </Grid>
        </Container>
      </Section>
      
      <Section variant="dark" padding="large">
        <Container>
          <SectionTitle
            title="Our Leadership Team"
            subtitle="Meet the people who make R&R Construction exceptional"
            alignment="center"
            light
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
            <TeamMemberCard
              image={teamImage1}
              title="Robert Rodriguez"
              subtitle="Co-Founder & CEO"
              content="With over 25 years of experience in the construction industry, Robert oversees the strategic direction of R&R Construction."
            />
            
            <TeamMemberCard
              image={teamImage2}
              title="Maria Gonzalez"
              subtitle="Chief Operations Officer"
              content="Maria ensures that our projects are delivered on time, within budget, and to the highest standards of quality."
            />
            
            <TeamMemberCard
              image={teamImage3}
              title="David Martinez"
              subtitle="Chief Financial Officer"
              content="David manages the financial aspects of our business, ensuring our continued growth and stability."
            />
            
            <TeamMemberCard
              image={teamImage4}
              title="Sarah Johnson"
              subtitle="Director of Client Relations"
              content="Sarah works closely with our clients to understand their needs and ensure their satisfaction throughout the project."
            />
          </Grid>
        </Container>
      </Section>
    </>
  );
};

export default AboutPage;
