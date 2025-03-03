import React from 'react';
import styled, { css } from 'styled-components';

type TitleAlignment = 'left' | 'center' | 'right';
type TitleSize = 'small' | 'medium' | 'large';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: TitleAlignment;
  size?: TitleSize;
  className?: string;
  light?: boolean;
}

interface StyledTitleProps {
  $alignment: TitleAlignment;
  $size: TitleSize;
  $light: boolean;
}

const TitleWrapper = styled.div<StyledTitleProps>`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: ${({ $alignment }) => $alignment};
`;

const Title = styled.h2<StyledTitleProps>`
  position: relative;
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme, $light }) => ($light ? theme.colors.white : theme.colors.darkGrey)};
  
  ${({ $size, theme }) =>
    $size === 'small' &&
    css`
      font-size: 1.5rem;
      
      @media (min-width: ${theme.breakpoints.tablet}) {
        font-size: 1.75rem;
      }
    `}
  
  ${({ $size, theme }) =>
    $size === 'medium' &&
    css`
      font-size: 1.75rem;
      
      @media (min-width: ${theme.breakpoints.tablet}) {
        font-size: 2.25rem;
      }
    `}
  
  ${({ $size, theme }) =>
    $size === 'large' &&
    css`
      font-size: 2rem;
      
      @media (min-width: ${theme.breakpoints.tablet}) {
        font-size: 2.75rem;
      }
    `}
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: ${({ $alignment }) => ($alignment === 'center' ? '50%' : '0')};
    transform: ${({ $alignment }) => ($alignment === 'center' ? 'translateX(-50%)' : 'none')};
    width: ${({ $alignment }) => ($alignment === 'center' ? '80px' : '60px')};
    height: 3px;
    background-color: ${({ theme }) => theme.colors.gold};
  }
`;

const Subtitle = styled.p<StyledTitleProps>`
  font-size: 1.1rem;
  max-width: ${({ $alignment }) => ($alignment === 'center' ? '700px' : 'none')};
  margin: ${({ $alignment }) => ($alignment === 'center' ? '0 auto' : '0')};
  color: ${({ theme, $light }) => 
    $light ? 'rgba(255, 255, 255, 0.8)' : theme.colors.darkGrey};
`;

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  alignment = 'left',
  size = 'medium',
  className,
  light = false,
}) => {
  return (
    <TitleWrapper 
      $alignment={alignment} 
      $size={size} 
      $light={light} 
      className={className}
    >
      <Title $alignment={alignment} $size={size} $light={light}>
        {title}
      </Title>
      {subtitle && (
        <Subtitle $alignment={alignment} $size={size} $light={light}>
          {subtitle}
        </Subtitle>
      )}
    </TitleWrapper>
  );
};

export default SectionTitle;
