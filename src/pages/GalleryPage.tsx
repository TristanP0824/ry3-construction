import React, { useState } from 'react';
import styled from 'styled-components';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Parallax from '../components/ui/Parallax';
import Gallery from '../components/gallery/Gallery';

// Placeholder image URLs - replace with actual images
const heroImage = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';
const galleryImage1 = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';
const galleryImage2 = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';
const galleryImage3 = 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';
const galleryImage4 = 'https://images.unsplash.com/photo-1574621100236-d25b64cfd647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80';
const galleryImage5 = 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1737&q=80';
const galleryImage6 = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80';
const galleryImage7 = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';
const galleryImage8 = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';

// Video URLs - replace with actual videos
const videoUrl1 = 'https://example.com/video1.mp4';
const videoUrl2 = 'https://example.com/video2.mp4';

// Gallery data
const galleryItems = [
  {
    id: '1',
    type: 'image' as const,
    thumbnail: galleryImage1,
    source: galleryImage1,
    title: 'Valley View Office Complex',
    description: 'Modern office complex in Brownsville, TX',
  },
  {
    id: '2',
    type: 'image' as const,
    thumbnail: galleryImage2,
    source: galleryImage2,
    title: 'Riverside Luxury Homes',
    description: 'Custom-built luxury homes in McAllen, TX',
  },
  {
    id: '3',
    type: 'image' as const,
    thumbnail: galleryImage3,
    source: galleryImage3,
    title: 'Palm Heights Apartments',
    description: 'Multi-family residential development in Harlingen, TX',
  },
  {
    id: '4',
    type: 'video' as const,
    thumbnail: galleryImage4,
    source: videoUrl1,
    title: 'Construction Time-lapse',
    description: 'Time-lapse of the Coastal Medical Center construction',
  },
  {
    id: '5',
    type: 'image' as const,
    thumbnail: galleryImage5,
    source: galleryImage5,
    title: 'Downtown Retail Plaza',
    description: 'Vibrant retail plaza in Los Fresnos, TX',
  },
  {
    id: '6',
    type: 'image' as const,
    thumbnail: galleryImage6,
    source: galleryImage6,
    title: 'Sunset Villa Renovation',
    description: 'Historic villa renovation in Port Isabel, TX',
  },
  {
    id: '7',
    type: 'image' as const,
    thumbnail: galleryImage7,
    source: galleryImage7,
    title: 'Commercial Building Interior',
    description: 'Interior of a modern commercial building',
  },
  {
    id: '8',
    type: 'video' as const,
    thumbnail: galleryImage8,
    source: videoUrl2,
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
        image={heroImage}
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
            subtitle="Browse through our portfolio of completed projects"
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
