import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface ParallaxProps {
  image: string;
  height?: string;
  speed?: number;
  overlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  children?: React.ReactNode;
  className?: string;
}

interface StyledParallaxProps {
  $image: string;
  $height: string;
  $overlay: boolean;
  $overlayColor: string;
  $overlayOpacity: number;
}

const ParallaxContainer = styled.div<StyledParallaxProps>`
  position: relative;
  width: 100%;
  height: ${({ $height }) => $height};
  overflow: hidden;
  background-image: url(${({ $image }) => $image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ $overlayColor, $overlayOpacity, $overlay }) =>
      $overlay ? `${$overlayColor}${Math.round($overlayOpacity * 255).toString(16)}` : 'transparent'};
    z-index: 1;
  }
`;

const ParallaxContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Parallax: React.FC<ParallaxProps> = ({
  image,
  height = '400px',
  speed = 0.5,
  overlay = true,
  overlayColor = '#000000',
  overlayOpacity = 0.5,
  children,
  className,
}) => {
  const [offsetY, setOffsetY] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Check if element is in viewport
        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          // Calculate how far the element is from the center of the viewport
          const distanceFromCenter = elementTop - windowHeight / 2 + elementHeight / 2;
          setOffsetY(distanceFromCenter * speed);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial calculation
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);
  
  return (
    <ParallaxContainer
      ref={parallaxRef}
      $image={image}
      $height={height}
      $overlay={overlay}
      $overlayColor={overlayColor}
      $overlayOpacity={overlayOpacity}
      className={className}
      style={{ backgroundPositionY: `calc(50% + ${offsetY}px)` }}
    >
      <ParallaxContent>{children}</ParallaxContent>
    </ParallaxContainer>
  );
};

export default Parallax;
