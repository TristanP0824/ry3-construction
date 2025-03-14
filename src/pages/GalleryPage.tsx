import React, { useState } from 'react';
import styled from 'styled-components';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Parallax from '../components/ui/Parallax';
import Gallery from '../components/gallery/Gallery';

// Import images for Property 1
import property1Image1 from '../assets/images/Property 1/IMG_9215.JPG';
import property1Image2 from '../assets/images/Property 1/IMG_9216.JPG';
import property1Image3 from '../assets/images/Property 1/IMG_9217.JPG';
import property1Image4 from '../assets/images/Property 1/IMG_9230.jpeg';

// Import images for Property 2
import property2Image1 from '../assets/images/Property 2/1_untitled-22.jpg';
import property2Image2 from '../assets/images/Property 2/7_untitled-21.jpg';

import property2Image4 from '../assets/images/Property 2/14_untitled-30.jpg';

import property4Image4 from '../assets/images/Property 4/IMG_6972.JPG';

// Gallery data
const galleryItems = [
  {
    id: '1',
    type: 'image' as const,
    thumbnail: property1Image1,
    source: property1Image1,
    title: 'Valley View Office Complex',
    description: 'Modern office complex in Brownsville, TX',
  },
  {
    id: '2',
    type: 'image' as const,
    thumbnail: property1Image2,
    source: property1Image2,
    title: 'Riverside Luxury Homes',
    description: 'Custom-built luxury homes in McAllen, TX',
  },
  {
    id: '3',
    type: 'image' as const,
    thumbnail: property1Image3,
    source: property1Image3,
    title: 'Palm Heights Apartments',
    description: 'Multi-family residential development in Harlingen, TX',
  },
  {
    id: '4',
    type: 'video' as const,
    thumbnail: property1Image4,
    source: property1Image4,
    title: 'Construction Time-lapse',
    description: 'Time-lapse of the Coastal Medical Center construction',
  },
  {
    id: '5',
    type: 'image' as const,
    thumbnail: property2Image1,
    source: property2Image1,
    title: 'Downtown Retail Plaza',
    description: 'Vibrant retail plaza in Los Fresnos, TX',
  },
  {
    id: '6',
    type: 'image' as const,
    thumbnail: property2Image2,
    source: property2Image2,
    title: 'Sunset Villa Renovation',
    description: 'Historic villa renovation in Port Isabel, TX',
  },
  {
    id: '7',
    type: 'image' as const,
    thumbnail: property4Image4,
    source: property4Image4,
    title: 'Commercial Building Interior',
    description: 'Interior of a modern commercial building',
  },
  {
    id: '8',
    type: 'video' as const,
    thumbnail: property2Image4,
    source: property2Image4,
    title: 'Drone Footage',
    description: 'Aerial view of our residential development project',
  },
];

// Categories for filtering
const categories = [
  { id: 'all', name: 'All' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'residential', name: 'Residential' },
  { id: 'videos', name: 'Videos' },
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

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : activeCategory === 'videos'
      ? galleryItems.filter(item => item.type === 'video')
      : galleryItems.filter(item => {
          if (activeCategory === 'commercial') {
            return item.title.toLowerCase().includes('office') || 
                   item.title.toLowerCase().includes('commercial') || 
                   item.title.toLowerCase().includes('retail');
          } else if (activeCategory === 'residential') {
            return item.title.toLowerCase().includes('home') || 
                   item.title.toLowerCase().includes('apartment') || 
                   item.title.toLowerCase().includes('villa') || 
                   item.title.toLowerCase().includes('residential');
          }
          return false;
        });
  
  return (
    <>
      <PageHeader
        image={property1Image1}
        height="50vh"
        speed={0.2}
        overlayColor="#000000"
        overlayOpacity={0.6}
      >
        <PageTitle>Gallery</PageTitle>
      </PageHeader>
      
      <Section padding="large">
        <Container>
          <SectionTitle
            title="Our Project Gallery"
            subtitle="Browse through our portfolio of Past, Present, and Future projects."
            alignment="center"
          />
          
          <FilterContainer>
            {categories.map(category => (
              <FilterButton
                key={category.id}
                $active={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </FilterButton>
            ))}
          </FilterContainer>
          
          <Gallery items={filteredItems} columns={3} gap="1rem" />
        </Container>
      </Section>
    </>
  );
};

export default GalleryPage;
