import React, { useState } from 'react';
import styled from 'styled-components';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Parallax from '../components/ui/Parallax';
import Grid from '../components/ui/Grid';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Placeholder image URLs - replace with actual images
const heroImage = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';
const project1Image = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';
const project2Image = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';
const project3Image = 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';
const project4Image = 'https://images.unsplash.com/photo-1574621100236-d25b64cfd647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80';
const project5Image = 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1737&q=80';
const project6Image = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80';

// Project data
const projects = [
  {
    id: '1',
    title: 'Valley View Office Complex',
    category: 'commercial',
    location: 'Brownsville, TX',
    year: '2022',
    image: project1Image,
    description: 'A modern office complex featuring sustainable design elements and state-of-the-art facilities.',
    quickFacts: [
      '50,000 square feet of office space',
      'LEED Gold certified sustainable design',
      'State-of-the-art technology infrastructure',
      'Collaborative workspaces and meeting rooms',
      'On-site amenities including café and fitness center'
    ]
  },
  {
    id: '2',
    title: 'Riverside Luxury Homes',
    category: 'residential',
    location: 'McAllen, TX',
    year: '2021',
    image: project2Image,
    description: 'A collection of custom-built luxury homes along the Rio Grande river, featuring premium finishes and amenities.',
    quickFacts: [
      '12 custom luxury homes',
      '3,500-5,000 square feet per home',
      'Premium finishes and smart home technology',
      'Private access to Rio Grande waterfront',
      'Energy-efficient design and construction'
    ]
  },
  {
    id: '3',
    title: 'Palm Heights Apartments',
    category: 'residential',
    location: 'Harlingen, TX',
    year: '2020',
    image: project3Image,
    description: 'A multi-family residential development with modern amenities and sustainable features.',
    quickFacts: [
      '120 apartment units',
      'Mix of 1, 2, and 3 bedroom layouts',
      'Community pool and fitness center',
      'Sustainable landscaping and water management',
      'Walking distance to shopping and dining'
    ]
  },
  {
    id: '4',
    title: 'Coastal Medical Center',
    category: 'commercial',
    location: 'South Padre Island, TX',
    year: '2019',
    image: project4Image,
    description: 'A state-of-the-art medical facility designed to serve the growing coastal community.',
    quickFacts: [
      '35,000 square foot medical facility',
      'Advanced diagnostic imaging center',
      'Emergency care capabilities',
      'Hurricane-resistant construction',
      'Specialized care for coastal community needs'
    ]
  },
  {
    id: '5',
    title: 'Downtown Retail Plaza',
    category: 'commercial',
    location: 'Los Fresnos, TX',
    year: '2018',
    image: project5Image,
    description: 'A vibrant retail plaza in the heart of downtown, featuring a mix of local and national businesses.',
    quickFacts: [
      '25,000 square feet of retail space',
      'Accommodates 15 retail businesses',
      'Central courtyard with water feature',
      'Ample parking with 150 spaces',
      'Designed to complement historic downtown architecture'
    ]
  },
  {
    id: '6',
    title: 'Sunset Villa Renovation',
    category: 'renovation',
    location: 'Port Isabel, TX',
    year: '2017',
    image: project6Image,
    description: 'A complete renovation of a historic villa, preserving its character while adding modern amenities.',
    quickFacts: [
      'Complete renovation of 4,200 square foot historic home',
      'Preservation of original architectural details',
      'Modern kitchen and bathroom upgrades',
      'Energy-efficient windows and HVAC system',
      'Outdoor living space with Gulf views'
    ]
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

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const FilterButton = styled.button<{ $active: boolean }>`
  background-color: ${({ theme, $active }) => 
    $active ? theme.colors.gold : 'transparent'};
  color: ${({ theme, $active }) => 
    $active ? theme.colors.darkGrey : theme.colors.darkGrey};
  border: 2px solid ${({ theme, $active }) => 
    $active ? theme.colors.gold : theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  font-weight: 500;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ theme, $active }) => 
      $active ? theme.colors.gold : theme.colors.lightGrey};
  }
`;

const ProjectCard = styled(Card)`
  height: 100%;
`;

const ProjectDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gold};
`;

const ProjectLocation = styled.span``;

const ProjectYear = styled.span``;

const ProjectQuickFacts = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

const ProjectQuickFact = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: 0.85rem;
  
  &::before {
    content: '✓';
    color: ${({ theme }) => theme.colors.gold};
    font-weight: bold;
    margin-right: ${({ theme }) => theme.spacing.xs};
  }
`;

const FeaturedProjectSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const FeaturedProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const FeaturedProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FeaturedProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 1.8rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const FeaturedProjectDetails = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gold};
`;

const FeaturedProjectDescription = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
`;

const FeaturedProjectFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FeaturedProjectFeature = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  &::before {
    content: '✓';
    color: ${({ theme }) => theme.colors.gold};
    font-weight: bold;
    margin-right: ${({ theme }) => theme.spacing.sm};
  }
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

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <>
      <PageHeader
        image={heroImage}
        height="50vh"
        speed={0.2}
        overlayColor="#000000"
        overlayOpacity={0.6}
      >
        <PageTitle>Our Projects</PageTitle>
      </PageHeader>
      
      <Section padding="large">
        <Container>
          <SectionTitle
            title="Featured Project"
            subtitle="Valley View Office Complex - Our latest commercial development"
            alignment="center"
          />
          
          <FeaturedProjectSection>
            <FeaturedProjectImage src={project1Image} alt="Valley View Office Complex" />
            <FeaturedProjectContent>
              <FeaturedProjectTitle>Valley View Office Complex</FeaturedProjectTitle>
              <FeaturedProjectDetails>
                <span>Brownsville, TX</span>
                <span>•</span>
                <span>Commercial</span>
                <span>•</span>
                <span>2022</span>
              </FeaturedProjectDetails>
              <FeaturedProjectDescription>
                The Valley View Office Complex is a state-of-the-art commercial development 
                located in the heart of Brownsville. This 50,000 square foot facility features 
                modern design elements, sustainable building practices, and premium amenities 
                for businesses of all sizes.
              </FeaturedProjectDescription>
              <FeaturedProjectFeatures>
                <FeaturedProjectFeature>50,000 square feet of office space</FeaturedProjectFeature>
                <FeaturedProjectFeature>LEED Gold certified sustainable design</FeaturedProjectFeature>
                <FeaturedProjectFeature>State-of-the-art technology infrastructure</FeaturedProjectFeature>
                <FeaturedProjectFeature>Collaborative workspaces and meeting rooms</FeaturedProjectFeature>
                <FeaturedProjectFeature>On-site amenities including café and fitness center</FeaturedProjectFeature>
              </FeaturedProjectFeatures>
              <Button to="/contact">Inquire About Similar Projects</Button>
            </FeaturedProjectContent>
          </FeaturedProjectSection>
        </Container>
      </Section>
      
      <Section variant="secondary" padding="large">
        <Container>
          <SectionTitle
            title="Our Portfolio"
            subtitle="Explore our diverse range of construction projects"
            alignment="center"
          />
          
          <FilterContainer>
            <FilterButton
              $active={activeFilter === 'all'}
              onClick={() => setActiveFilter('all')}
            >
              All Projects
            </FilterButton>
            <FilterButton
              $active={activeFilter === 'commercial'}
              onClick={() => setActiveFilter('commercial')}
            >
              Commercial
            </FilterButton>
            <FilterButton
              $active={activeFilter === 'residential'}
              onClick={() => setActiveFilter('residential')}
            >
              Residential
            </FilterButton>
            <FilterButton
              $active={activeFilter === 'renovation'}
              onClick={() => setActiveFilter('renovation')}
            >
              Renovation
            </FilterButton>
          </FilterContainer>
          
          <Grid
            columns={{
              xs: 1,
              sm: 2,
              md: 2,
              lg: 3,
            }}
            gap="medium"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                content={project.description}
              >
                <ProjectDetails>
                  <ProjectLocation>{project.location}</ProjectLocation>
                  <ProjectYear>{project.year}</ProjectYear>
                </ProjectDetails>
                <ProjectQuickFacts>
                  {project.quickFacts.slice(0, 3).map((fact, index) => (
                    <ProjectQuickFact key={index}>{fact}</ProjectQuickFact>
                  ))}
                </ProjectQuickFacts>
              </ProjectCard>
            ))}
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

export default ProjectsPage;
