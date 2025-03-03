import React from 'react';
import styled from 'styled-components';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Parallax from '../components/ui/Parallax';
import ContactForm from '../components/forms/ContactForm';
import Map from '../components/map/Map';
import SocialFeed from '../components/social/SocialFeed';

// Placeholder image URLs - replace with actual images
const heroImage = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';

// Map locations
const mapLocations = [
  {
    id: '1',
    title: 'R&R Construction Headquarters',
    description: '123 Construction Way, Los Fresnos, TX 78566',
    position: {
      lat: 26.0731,
      lng: -97.4769,
    },
  },
  {
    id: '2',
    title: 'Valley View Office Complex',
    description: 'Our latest commercial project in Brownsville',
    position: {
      lat: 25.9017,
      lng: -97.4975,
    },
  },
  {
    id: '3',
    title: 'Riverside Luxury Homes',
    description: 'Custom-built luxury homes in McAllen',
    position: {
      lat: 26.2034,
      lng: -98.2300,
    },
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: ${({ theme }) => theme.borderRadius.round};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const InfoText = styled.p`
  margin: 0;
  line-height: 1.6;
`;

const BusinessHours = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const HoursTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const HoursGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Day = styled.div`
  font-weight: 600;
`;

const Hours = styled.div``;

const MapContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactPage: React.FC = () => {
  return (
    <>
      <PageHeader
        image={heroImage}
        height="50vh"
        speed={0.2}
        overlayColor="#000000"
        overlayOpacity={0.6}
      >
        <PageTitle>Contact Us</PageTitle>
      </PageHeader>
      
      <Section padding="large">
        <Container>
          <SectionTitle
            title="Get In Touch"
            subtitle="We'd love to hear from you. Contact us for any inquiries or to discuss your project."
            alignment="center"
          />
          
          <ContactGrid>
            <ContactForm />
            
            <ContactInfo>
              <InfoItem>
                <IconWrapper>📍</IconWrapper>
                <InfoContent>
                  <InfoTitle>Our Location</InfoTitle>
                  <InfoText>
                    123 Construction Way<br />
                    Los Fresnos, TX 78566<br />
                    United States
                  </InfoText>
                </InfoContent>
              </InfoItem>
              
              <InfoItem>
                <IconWrapper>📞</IconWrapper>
                <InfoContent>
                  <InfoTitle>Phone Number</InfoTitle>
                  <InfoText>(956) 555-1234</InfoText>
                </InfoContent>
              </InfoItem>
              
              <InfoItem>
                <IconWrapper>✉️</IconWrapper>
                <InfoContent>
                  <InfoTitle>Email Address</InfoTitle>
                  <InfoText>info@rrconstruction.com</InfoText>
                </InfoContent>
              </InfoItem>
              
              <BusinessHours>
                <HoursTitle>Business Hours</HoursTitle>
                <HoursGrid>
                  <Day>Monday - Friday</Day>
                  <Hours>8:00 AM - 5:00 PM</Hours>
                  
                  <Day>Saturday</Day>
                  <Hours>9:00 AM - 2:00 PM</Hours>
                  
                  <Day>Sunday</Day>
                  <Hours>Closed</Hours>
                </HoursGrid>
              </BusinessHours>
            </ContactInfo>
          </ContactGrid>
        </Container>
      </Section>
      
      <Section variant="secondary" padding="large">
        <Container>
          <SectionTitle
            title="Our Location"
            subtitle="Find us in the Rio Grande Valley"
            alignment="center"
          />
          
          <MapContainer>
            <Map
              locations={mapLocations}
              center={{ lat: 26.1906, lng: -97.6961 }} // Los Fresnos, TX
              zoom={9}
              height="500px"
            />
          </MapContainer>
        </Container>
      </Section>
      
      <Section padding="large">
        <Container>
          <SectionTitle
            title="Connect With Us"
            subtitle="Follow us on social media for updates and inspiration"
            alignment="center"
          />
          
          <SocialGrid>
            <SocialFeed
              platform="facebook"
              url="https://www.facebook.com/rrconstruction"
              height="500px"
            />
            
            <SocialFeed
              platform="instagram"
              url="CgpnLWRhdGEtcGtnLQ"
              height="500px"
            />
          </SocialGrid>
        </Container>
      </Section>
    </>
  );
};

export default ContactPage;
