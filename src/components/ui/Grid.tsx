import React from 'react';
import styled from 'styled-components';

type GridColumns = 1 | 2 | 3 | 4;
type GridGap = 'small' | 'medium' | 'large';

interface GridProps {
  columns?: {
    xs?: GridColumns;
    sm?: GridColumns;
    md?: GridColumns;
    lg?: GridColumns;
  };
  gap?: GridGap;
  className?: string;
  children: React.ReactNode;
}

interface StyledGridProps {
  $columns: {
    xs: GridColumns;
    sm: GridColumns;
    md: GridColumns;
    lg: GridColumns;
  };
  $gap: GridGap;
}

const StyledGrid = styled.div<StyledGridProps>`
  display: grid;
  width: 100%;
  
  /* Gap styles */
  gap: ${({ theme, $gap }) => {
    switch ($gap) {
      case 'small':
        return theme.spacing.md;
      case 'large':
        return theme.spacing.xl;
      case 'medium':
      default:
        return theme.spacing.lg;
    }
  }};
  
  /* Responsive grid columns */
  grid-template-columns: repeat(${({ $columns }) => $columns.xs}, 1fr);
  
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(${({ $columns }) => $columns.sm}, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(${({ $columns }) => $columns.md}, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(${({ $columns }) => $columns.lg}, 1fr);
  }
`;

const Grid: React.FC<GridProps> = ({
  columns = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
  },
  gap = 'medium',
  className,
  children,
}) => {
  // Set default values for any missing breakpoints
  const responsiveColumns = {
    xs: columns.xs || 1,
    sm: columns.sm || (columns.xs || 1),
    md: columns.md || (columns.sm || columns.xs || 2),
    lg: columns.lg || (columns.md || columns.sm || columns.xs || 3),
  };
  
  return (
    <StyledGrid
      $columns={responsiveColumns}
      $gap={gap}
      className={className}
    >
      {children}
    </StyledGrid>
  );
};

export default Grid;
