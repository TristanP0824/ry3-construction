import React, { useState } from 'react';
import styled from 'styled-components';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Parallax from '../components/ui/Parallax';
import Button from '../components/ui/Button';
import Map from '../components/map/Map';
import Gallery from '../components/gallery/Gallery';

// Define types for our gallery items
interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  thumbnail: string;
  source: string;
  title?: string;
  description?: string;
}

// Import images for Property 1
import property1Image1 from '../assets/images/Property 1/IMG_9215.JPG';
import property1Image2 from '../assets/images/Property 1/IMG_9216.JPG';
import property1Image3 from '../assets/images/Property 1/IMG_9217.JPG';
import property1Image4 from '../assets/images/Property 1/IMG_9230.jpeg';

// Import images for Property 2
import property2Image1 from '../assets/images/Property 2/1_untitled-22.jpg';
import property2Image2 from '../assets/images/Property 2/7_untitled-21.jpg';
import property2Image3 from '../assets/images/Property 2/4_untitled-61.jpg';
import property2Image4 from '../assets/images/Property 2/14_untitled-30.jpg';

// Import images for Property 3
import property3Image1 from '../assets/images/Property 3/20_untitled-142.jpg';
import property3Image2 from '../assets/images/Property 3/21_untitled-155.jpg';
import property3Image3 from '../assets/images/Property 3/22_untitled-157.jpg';
import property3Image4 from '../assets/images/Property 3/23_untitled-158.jpg';

// Import images for Property 4
import property4Image1 from '../assets/images/Property 4/IMG_6972.JPG';
import property4Image2 from '../assets/images/Property 4/IMG_6964.JPG';
import property4Image3 from '../assets/images/Property 4/IMG_6968.JPG';
import property4Image4 from '../assets/images/Property 4/IMG_6976.JPG';


// Placeholder image URLs - replace with actual images
const heroImage = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';

// Property data
const properties = [
  {
    id: '1',
    title: '13941 Isaiah Ct',
    price: '$205,000',
    status: 'for-sale',
    location: 'La Feria, TX',
    description: 'Discover refined living in a 3 bedroom, 2 bathroom, new construction home nestled in the community, Mariposa Ranch Subdivision.',
    features: {
      beds: 3,
      baths: 2,
      sqft: 1140
    },
    images: [
      {
        id: '1-1',
        type: 'image',
        thumbnail: property1Image1,
        source: property1Image1,
        title: '13941 Isaiah Ct - Exterior'
      },
      {
        id: '1-2',
        type: 'image',
        thumbnail: property1Image2,
        source: property1Image2,
        title: '13941 Isaiah Ct - Entrance'
      },
      {
        id: '1-3',
        type: 'image',
        thumbnail: property1Image3,
        source: property1Image3,
        title: '13941 Isaiah Ct - Kitchen'
      },
      {
        id: '1-4',
        type: 'image',
        thumbnail: property1Image4,
        source: property1Image4,
        title: '13941 Isaiah Ct - Outside View'
      }
    ],
    mapLocation: {
      lat: 26.17903,
      lng: -97.80001
    }
  },
  {
    id: '2',
    title: '13953 Isaiah Ct',
    price: '$213,000',
    status: 'for-sale',
    location: 'La Feria, TX',
    description: 'Discover refined living in a 3 bedroom, 2 bathroom, new construction home nestled in the community, Mariposa Ranch Subdivision.',
    features: {
      beds: 3,
      baths: 2,
      sqft: 1219
    },
    images: [
      {
        id: '2-1',
        type: 'image',
        thumbnail: property2Image1,
        source: property2Image1,
        title: '13953 Isaiah Ct - Exterior'
      },
      {
        id: '2-2',
        type: 'image',
        thumbnail: property2Image2,
        source: property2Image2,
        title: '13953 Isaiah Ct - Living Room'
      },
      {
        id: '2-3',
        type: 'image',
        thumbnail: property2Image3,
        source: property2Image3,
        title: '13953 Isaiah Ct - Kitchen'
      },
      {
        id: '2-4',
        type: 'image',
        thumbnail: property2Image4,
        source: property2Image4,
        title: '13953 Isaiah Ct - Master-Closet'
      }
    ],
    mapLocation: {
      lat: 26.179004701469637,
      lng: -97.79974731871924
    }
  },
  {
    id: '3',
    title: '703 Thornton Ln',
    price: '$210,000',
    status: 'for-sale',
    location: 'Brownsville, TX',
    description: 'Introducing a modern contemporary home that combines sophisticated style, open layout, and high-end finishes for a perfect blend of elegance and comfort.',
    features: {
      beds: 3,
      baths: 2,
      sqft: 1200
    },
    images: [
      {
        id: '3-1',
        type: 'image',
        thumbnail: property3Image1,
        source: property3Image1,
        title: '703 Thornton Ln - Exterior'
      },
      {
        id: '3-2',
        type: 'image',
        thumbnail: property3Image2,
        source: property3Image2,
        title: '703 Thornton Ln - Exterior'
      },
      {
        id: '3-3',
        type: 'image',
        thumbnail: property3Image3,
        source: property3Image3,
        title: '703 Thornton Ln - Exterior'
      },
      {
        id: '3-4',
        type: 'image',
        thumbnail: property3Image4,
        source: property3Image4,
        title: '703 Thornton Ln - Exterior'
      },
    
    ],
    mapLocation: {
      lat: 26.1800,
      lng: -97.7000
    }
  },
  {
    id: '4',
    title: '653 Thornton Ln',
    price: '$205,000',
    status: 'for-sale',
    location: 'Brownsville, TX',
    description: 'This newly built home offers modern design, high quality finishes , and a minimalist style. With an open concept layout and top tier craftsmanship, it’s the perfect blend of comfort and sophistication.',
    features: {
      beds: 3,
      baths: 2,
      sqft: 1140
    },
    images: [
      {
        id: '4-1',
        type: 'image',
        thumbnail: property4Image1,
        source: property4Image1,
        title: '653 Thornton Ln - Front Exterior'
      },
      {
        id: '4-2',
        type: 'image',
        thumbnail: property4Image2,
        source: property4Image2,
        title: '653 Thornton Ln - Living Room'
      },
      {
        id: '4-3',
        type: 'image',
        thumbnail: property4Image3,
        source: property4Image3,
        title: '653 Thornton Ln - Exterior'
      },
      {
        id: '4-4',
        type: 'image',
        thumbnail: property4Image4,
        source: property4Image4,
        title: '653 Thornton Ln - Kitchen'
      },
     
    ],
    mapLocation: {
      lat: 26.2100,
      lng: -97.7200
    }
  }
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

const PageSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`;

const PropertiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PropertyCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  overflow: hidden;
`;

const PropertyImageContainer = styled.div`
  position: relative;
  height: 250px;
  cursor: pointer;
`;

const PropertyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PropertyStatusBadge = styled.div<{ $status: string }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme, $status }) => 
    $status === 'for-sale' ? theme.colors.red : theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const PropertyContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const PropertyTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const PropertyPrice = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.red};
`;

const PropertyDescription = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.darkGrey};
  line-height: 1.5;
`;

const PropertyFeatures = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

const PropertyFeature = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 0.9rem;
`;

const FeatureIcon = styled.span`
  margin-right: ${({ theme }) => theme.spacing.xs};
  font-size: 1.1rem;
`;

const PropertyActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  width: 90%;
  max-width: 1200px;
  height: 90vh;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 0;
`;

const ModalClose = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.darkGrey};
  
  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
`;

const ModalBody = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
`;

const ViewToggle = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  z-index: 10;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  overflow: hidden;
`;

const ToggleButton = styled.button<{ $active: boolean }>`
  background-color: ${({ theme, $active }) => 
    $active ? theme.colors.red : theme.colors.white};
  color: ${({ theme, $active }) => 
    $active ? theme.colors.white : theme.colors.darkGrey};
  border: none;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  
  &:hover {
    background-color: ${({ theme, $active }) => 
      $active ? theme.colors.red : theme.colors.lightGrey};
  }
`;

const ProjectsPage: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'photo' | 'map'>('photo');
  
  const property = selectedProperty 
    ? properties.find(p => p.id === selectedProperty) 
    : null;
  
  const handlePropertyClick = (id: string) => {
    setSelectedProperty(id);
    setViewMode('photo');
  };
  
  const handleCloseModal = () => {
    setSelectedProperty(null);
  };
  
  
  const mapLocations = property 
    ? [
        {
          id: property.id,
          title: property.title,
          description: property.description,
          image: property.images[0].source,
          position: property.mapLocation
        }
      ]
    : [];
  
  return (
    <>
      <PageHeader
        image={heroImage}
        height="50vh"
        speed={0.2}
        overlayColor="#000000"
        overlayOpacity={0.6}
      >
        <PageTitle>Featured Homes</PageTitle>
        <PageSubtitle>Check out these ready for move-in homes!</PageSubtitle>
      </PageHeader>
      
      <Section padding="large">
        <Container>
          <PropertiesGrid>
            {properties.map((property) => (
              <PropertyCard key={property.id}>
                <PropertyImageContainer onClick={() => handlePropertyClick(property.id)}>
                  <PropertyImage src={property.images[0].source} alt={property.title} />
                  <PropertyStatusBadge $status={property.status}>
                    {property.status === 'coming-soon' ? 'Coming Soon!' : 'For Sale'}
                  </PropertyStatusBadge>
                </PropertyImageContainer>
                <PropertyContent>
                  <PropertyTitle>{property.title}</PropertyTitle>
                  <PropertyPrice>{property.price}</PropertyPrice>
                  <PropertyDescription>{property.description}</PropertyDescription>
                  <PropertyFeatures>
                    <PropertyFeature>
                      <FeatureIcon>🛏️</FeatureIcon> {property.features.beds} Beds
                    </PropertyFeature>
                    <PropertyFeature>
                      <FeatureIcon>🚿</FeatureIcon> {property.features.baths} Baths
                    </PropertyFeature>
                    <PropertyFeature>
                      <FeatureIcon>📏</FeatureIcon> {property.features.sqft} SqFt
                    </PropertyFeature>
                  </PropertyFeatures>
                  <PropertyActions>
                    <Button to="#" onClick={() => handlePropertyClick(property.id)}>
                      Get Directions
                    </Button>
                    <Button to="/contact" variant="outline">
                      Send Message
                    </Button>
                  </PropertyActions>
                </PropertyContent>
              </PropertyCard>
            ))}
          </PropertiesGrid>
        </Container>
      </Section>
      
      <ModalOverlay $isOpen={!!selectedProperty} onClick={handleCloseModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ModalHeader>
            <ModalTitle>
              {property?.title} - {property?.location}
            </ModalTitle>
            <ModalClose onClick={handleCloseModal}>&times;</ModalClose>
          </ModalHeader>
          <ModalBody>
            <ViewToggle>
              <ToggleButton 
                $active={viewMode === 'photo'} 
                onClick={() => setViewMode('photo')}
              >
                Photo
              </ToggleButton>
              <ToggleButton 
                $active={viewMode === 'map'} 
                onClick={() => setViewMode('map')}
              >
                Map
              </ToggleButton>
            </ViewToggle>
            
            {viewMode === 'photo' && property && (
              <Gallery 
                items={property.images as GalleryItem[]}
              />
            )}
            
            {viewMode === 'map' && (
              <Map 
                locations={mapLocations}
                center={property?.mapLocation}
                zoom={15}
                height="100%"
              />
            )}
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default ProjectsPage;
