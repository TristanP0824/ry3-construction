import React, { useState } from 'react';
import styled from 'styled-components';

interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  thumbnail: string;
  source: string;
  title?: string;
  description?: string;
}

interface GalleryProps {
  items: GalleryItem[];
  columns?: number;
  gap?: string;
  className?: string;
}

const GalleryContainer = styled.div<{ $gap: string }>`
  width: 100%;
  display: grid;
  grid-gap: ${({ $gap }) => $gap};
`;

const GalleryGrid = styled.div<{ $columns: number; $gap: string }>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${({ $gap }) => $gap};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(${({ $columns }) => Math.min($columns, 3)}, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  }
`;

const GalleryItemContainer = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: transform ${({ theme }) => theme.transitions.medium};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    
    img {
      transform: scale(1.05);
    }
    
    .overlay {
      opacity: 1;
    }
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transitions.medium};
`;

const GalleryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing.md};
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitions.medium};
  color: ${({ theme }) => theme.colors.white};
`;

const GalleryItemTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.xs};
  font-size: 1.1rem;
  font-weight: 600;
`;

const GalleryItemDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.9;
`;

const VideoIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &::before {
    content: '';
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid ${({ theme }) => theme.colors.white};
    margin-left: 5px;
  }
`;

const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
`;

const ModalVideo = styled.video`
  max-width: 100%;
  max-height: 80vh;
`;

const ModalClose = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const ModalCaption = styled.div`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const ModalTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.xs};
  font-size: 1.2rem;
`;

const ModalDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  opacity: 0.8;
`;

const Gallery: React.FC<GalleryProps> = ({
  items,
  columns = 4,
  gap = '1rem',
  className,
}) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  
  const handleItemClick = (item: GalleryItem) => {
    setSelectedItem(item);
  };
  
  const handleCloseModal = () => {
    setSelectedItem(null);
  };
  
  return (
    <GalleryContainer $gap={gap} className={className}>
      <GalleryGrid $columns={columns} $gap={gap}>
        {items.map((item) => (
          <GalleryItemContainer
            key={item.id}
            onClick={() => handleItemClick(item)}
          >
            <GalleryImage src={item.thumbnail} alt={item.title || 'Gallery item'} />
            {item.type === 'video' && <VideoIcon />}
            <GalleryOverlay className="overlay">
              {item.title && <GalleryItemTitle>{item.title}</GalleryItemTitle>}
              {item.description && (
                <GalleryItemDescription>{item.description}</GalleryItemDescription>
              )}
            </GalleryOverlay>
          </GalleryItemContainer>
        ))}
      </GalleryGrid>
      
      <ModalOverlay $isOpen={!!selectedItem} onClick={handleCloseModal}>
        {selectedItem && (
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalClose onClick={handleCloseModal}>&times;</ModalClose>
            
            {selectedItem.type === 'image' ? (
              <ModalImage src={selectedItem.source} alt={selectedItem.title || 'Gallery item'} />
            ) : (
              <ModalVideo controls autoPlay>
                <source src={selectedItem.source} type="video/mp4" />
                Your browser does not support the video tag.
              </ModalVideo>
            )}
            
            {(selectedItem.title || selectedItem.description) && (
              <ModalCaption>
                {selectedItem.title && <ModalTitle>{selectedItem.title}</ModalTitle>}
                {selectedItem.description && (
                  <ModalDescription>{selectedItem.description}</ModalDescription>
                )}
              </ModalCaption>
            )}
          </ModalContent>
        )}
      </ModalOverlay>
    </GalleryContainer>
  );
};

export default Gallery;
