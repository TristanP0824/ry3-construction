import React from 'react';
import styled from 'styled-components';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Parallax from '../components/ui/Parallax';
import Grid from '../components/ui/Grid';
import TestimonialCard from '../components/testimonials/TestimonialCard';
import Button from '../components/ui/Button';

// Placeholder image URLs - replace with actual images
const heroImage = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';
const avatar1 = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80';
const avatar2 = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80';
const avatar3 = 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
const avatar4 = 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80';
const avatar5 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80';
const avatar6 = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80';

// Testimonial data
const testimonials = [
  {
    id: '1',
    name: 'John Smith',
    role: 'CEO',
    company: 'Valley Business Center',
    avatar: avatar1,
    content: 'R&R Construction exceeded our expectations with the new office complex. Their attention to detail and commitment to quality were evident throughout the project. The team was professional, responsive, and delivered on time and within budget.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Maria Rodriguez',
    role: 'Homeowner',
    avatar: avatar2,
    content: 'We couldn\'t be happier with our custom home built by R&R Construction. From the initial design phase to the final walkthrough, they were attentive to our needs and made the process enjoyable. The craftsmanship is exceptional, and we love our new home!',
    rating: 5,
  },
  {
    id: '3',
    name: 'David Johnson',
    role: 'Property Developer',
    company: 'Johnson Properties',
    avatar: avatar3,
    content: 'I\'ve worked with many construction companies over the years, but R&R Construction stands out for their professionalism and quality of work. They completed our multi-family housing project ahead of schedule and with impeccable attention to detail.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Sarah Martinez',
    role: 'Director of Operations',
    company: 'Coastal Medical Center',
    avatar: avatar4,
    content: 'The team at R&R Construction was instrumental in bringing our vision for the new medical center to life. Their expertise in commercial construction and ability to navigate complex requirements made the project a success.',
    rating: 4,
  },
  {
    id: '5',
    name: 'Michael Brown',
    role: 'Homeowner',
    avatar: avatar5,
    content: 'Our home renovation project was handled with care and precision by R&R Construction. They transformed our outdated space into a modern, functional home while respecting our budget constraints. We highly recommend their services!',
    rating: 5,
  },
  {
    id: '6',
    name: 'Jennifer Lee',
    role: 'Store Manager',
    company: 'Retail Plaza',
    avatar: avatar6,
    content: 'The retail space built by R&R Construction perfectly suits our needs. Their team was communicative throughout the process and addressed any concerns promptly. The final result has received numerous compliments from our customers.',
    rating: 4,
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

const FeaturedTestimonial = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.large};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  position: relative;
  text-align: center;
  
  &::before {
    content: '"';
    position: absolute;
    top: ${({ theme }) => theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    font-size: 8rem;
    line-height: 1;
    font-family: Georgia, serif;
    color: ${({ theme }) => theme.colors.gold};
    opacity: 0.2;
  }
`;

const FeaturedContent = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  margin: ${({ theme }) => theme.spacing.xl} 0;
  position: relative;
  z-index: 1;
  font-style: italic;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.8rem;
    padding: 0 ${({ theme }) => theme.spacing.xl};
  }
`;

const FeaturedAuthor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const FeaturedAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  object-fit: cover;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const FeaturedName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const FeaturedRole = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gold};
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Star = styled.span`
  color: ${({ theme }) => theme.colors.gold};
  font-size: 1.5rem;
  margin: 0 2px;
`;

const SubmitSection = styled(Section)`
  text-align: center;
`;

const SubmitContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const SubmitTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.white};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const SubmitText = styled.p`
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.white};
`;

const TestimonialsPage: React.FC = () => {
  // Featured testimonial (first one in the list)
  const featuredTestimonial = testimonials[0];
  
  // Rest of the testimonials
  const otherTestimonials = testimonials.slice(1);
  
  return (
    <>
      <PageHeader
        image={heroImage}
        height="50vh"
        speed={0.2}
        overlayColor="#000000"
        overlayOpacity={0.6}
      >
        <PageTitle>Client Testimonials</PageTitle>
      </PageHeader>
      
      <Section padding="large">
        <Container>
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Hear from those who have experienced our commitment to excellence"
            alignment="center"
          />
          
          <FeaturedTestimonial>
            <RatingContainer>
              {[...Array(featuredTestimonial.rating)].map((_, i) => (
                <Star key={i}>★</Star>
              ))}
            </RatingContainer>
            <FeaturedContent>
              {featuredTestimonial.content}
            </FeaturedContent>
            <FeaturedAuthor>
              <FeaturedAvatar src={featuredTestimonial.avatar} alt={featuredTestimonial.name} />
              <FeaturedName>{featuredTestimonial.name}</FeaturedName>
              <FeaturedRole>
                {featuredTestimonial.role}
                {featuredTestimonial.company && `, ${featuredTestimonial.company}`}
              </FeaturedRole>
            </FeaturedAuthor>
          </FeaturedTestimonial>
          
          <Grid
            columns={{
              xs: 1,
              sm: 2,
              md: 2,
              lg: 3,
            }}
            gap="medium"
          >
            {otherTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                avatar={testimonial.avatar}
                content={testimonial.content}
                rating={testimonial.rating}
              />
            ))}
          </Grid>
        </Container>
      </Section>
      
      <SubmitSection variant="dark" padding="large">
        <Container>
          <SubmitContent>
            <SubmitTitle>Share Your Experience</SubmitTitle>
            <SubmitText>
              We value your feedback! If you've worked with us, we'd love to hear about your experience.
            </SubmitText>
            <Button to="/contact" size="large">
              Submit a Testimonial
            </Button>
          </SubmitContent>
        </Container>
      </SubmitSection>
    </>
  );
};

export default TestimonialsPage;
