import React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type SectionVariant = 'primary' | 'secondary' | 'dark' | 'light';
type SectionPadding = 'small' | 'medium' | 'large' | 'none';

interface SectionProps {
  variant?: SectionVariant;
  padding?: SectionPadding;
  id?: string;
  className?: string;
  children: React.ReactNode;
}

interface StyledSectionProps {
  $variant: SectionVariant;
  $padding: SectionPadding;
  theme: Theme;
}

const StyledSection = styled.section<StyledSectionProps>`
  width: 100%;
  position: relative;
  overflow: hidden;
  
  /* Padding styles */
  ${({ $padding, theme }) =>
    $padding === 'small' &&
    css`
      padding: ${theme.spacing.lg} 0;
      
      @media (min-width: ${theme.breakpoints.tablet}) {
        padding: ${theme.spacing.xl} 0;
      }
    `}
  
  ${({ $padding, theme }) =>
    $padding === 'medium' &&
    css`
      padding: ${theme.spacing.xl} 0;
      
      @media (min-width: ${theme.breakpoints.tablet}) {
        padding: ${theme.spacing.xxl} 0;
      }
    `}
  
  ${({ $padding, theme }) =>
    $padding === 'large' &&
    css`
      padding: ${theme.spacing.xxl} 0;
      
      @media (min-width: ${theme.breakpoints.tablet}) {
        padding: calc(${theme.spacing.xxl} * 1.5) 0;
      }
    `}
  
  ${({ $padding }) =>
    $padding === 'none' &&
    css`
      padding: 0;
    `}
  
  /* Variant styles */
  ${({ $variant, theme }) =>
    $variant === 'primary' &&
    css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.darkGrey};
    `}
  
  ${({ $variant, theme }) =>
    $variant === 'secondary' &&
    css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.darkGrey};
    `}
  
  ${({ $variant, theme }) =>
    $variant === 'dark' &&
    css`
      background-color: ${theme.colors.darkGrey};
      color: ${theme.colors.white};
    `}
  
  ${({ $variant, theme }) =>
    $variant === 'light' &&
    css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.darkGrey};
      border-top: 1px solid rgba(0, 0, 0, 0.05);
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    `}
`;

const Section: React.FC<SectionProps> = ({
  variant = 'primary',
  padding = 'medium',
  id,
  className,
  children,
}) => {
  return (
    <StyledSection
      $variant={variant}
      $padding={padding}
      id={id}
      className={className}
    >
      {children}
    </StyledSection>
  );
};

export default Section;
