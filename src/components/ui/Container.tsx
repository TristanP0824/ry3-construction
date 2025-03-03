import React from 'react';
import styled, { css } from 'styled-components';

type ContainerSize = 'small' | 'medium' | 'large' | 'fluid';

interface ContainerProps {
  size?: ContainerSize;
  className?: string;
  children: React.ReactNode;
}

interface StyledContainerProps {
  $size: ContainerSize;
}

const StyledContainer = styled.div<StyledContainerProps>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ theme }) => theme.spacing.lg};
  padding-right: ${({ theme }) => theme.spacing.lg};
  
  ${({ $size }) =>
    $size === 'small' &&
    css`
      max-width: 768px;
    `}
  
  ${({ $size }) =>
    $size === 'medium' &&
    css`
      max-width: 992px;
    `}
  
  ${({ $size }) =>
    $size === 'large' &&
    css`
      max-width: 1200px;
    `}
  
  ${({ $size }) =>
    $size === 'fluid' &&
    css`
      max-width: 100%;
    `}
`;

const Container: React.FC<ContainerProps> = ({
  size = 'large',
  className,
  children,
}) => {
  return (
    <StyledContainer $size={size} className={className}>
      {children}
    </StyledContainer>
  );
};

export default Container;
