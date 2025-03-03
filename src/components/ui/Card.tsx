import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

type CardVariant = 'primary' | 'secondary' | 'outlined';
type CardSize = 'small' | 'medium' | 'large';

interface CardProps {
  variant?: CardVariant;
  size?: CardSize;
  title?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  content?: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  hoverEffect?: boolean;
}

interface StyledCardProps {
  $variant: CardVariant;
  $size: CardSize;
  $hoverEffect: boolean;
  $hasImage: boolean;
}

const StyledCard = styled.div<StyledCardProps>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  transition: all ${({ theme }) => theme.transitions.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  
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
      background-color: ${theme.colors.lightGrey};
      color: ${theme.colors.darkGrey};
    `}
  
  ${({ $variant, theme }) =>
    $variant === 'outlined' &&
    css`
      background-color: transparent;
      color: ${theme.colors.darkGrey};
      border: 1px solid ${theme.colors.lightGrey};
    `}
  
  /* Size styles */
  ${({ $size }) =>
    $size === 'small' &&
    css`
      max-width: 300px;
    `}
  
  ${({ $size }) =>
    $size === 'medium' &&
    css`
      max-width: 350px;
    `}
  
  ${({ $size }) =>
    $size === 'large' &&
    css`
      max-width: 400px;
    `}
  
  /* Hover effect */
  ${({ $hoverEffect, theme }) =>
    $hoverEffect &&
    css`
      &:hover {
        transform: translateY(-5px);
        box-shadow: ${theme.shadows.medium};
      }
    `}
`;

const CardImage = styled.div<{ $image: string }>`
  width: 100%;
  height: 200px;
  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
`;

const CardContent = styled.div<{ $hasImage: boolean }>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const CardTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const CardSubtitle = styled.h4`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 500;
`;

const CardText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const CardLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 500;
  text-decoration: none;
  margin-top: auto;
  align-self: flex-start;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ExternalLink = styled.a`
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 500;
  text-decoration: none;
  margin-top: auto;
  align-self: flex-start;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Card: React.FC<CardProps> = ({
  variant = 'primary',
  size = 'medium',
  title,
  subtitle,
  image,
  imageAlt,
  content,
  to,
  href,
  onClick,
  className,
  children,
  hoverEffect = true,
}) => {
  const hasImage = !!image;
  
  const cardContent = (
    <>
      {image && <CardImage $image={image} role="img" aria-label={imageAlt || title} />}
      <CardContent $hasImage={hasImage}>
        {title && <CardTitle>{title}</CardTitle>}
        {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
        {content && <CardText>{content}</CardText>}
        {children}
        {to && <CardLink to={to}>Learn More</CardLink>}
        {href && <ExternalLink href={href}>Learn More</ExternalLink>}
      </CardContent>
    </>
  );
  
  if (onClick) {
    return (
      <StyledCard
        as="button"
        onClick={onClick}
        $variant={variant}
        $size={size}
        $hoverEffect={hoverEffect}
        $hasImage={hasImage}
        className={className}
        style={{ width: '100%', border: 'none', cursor: 'pointer', textAlign: 'left' }}
      >
        {cardContent}
      </StyledCard>
    );
  }
  
  if (to) {
    return (
      <StyledCard
        as={Link}
        to={to}
        $variant={variant}
        $size={size}
        $hoverEffect={hoverEffect}
        $hasImage={hasImage}
        className={className}
        style={{ textDecoration: 'none' }}
      >
        {cardContent}
      </StyledCard>
    );
  }
  
  if (href) {
    return (
      <StyledCard
        as="a"
        href={href}
        $variant={variant}
        $size={size}
        $hoverEffect={hoverEffect}
        $hasImage={hasImage}
        className={className}
        style={{ textDecoration: 'none' }}
      >
        {cardContent}
      </StyledCard>
    );
  }
  
  return (
    <StyledCard
      $variant={variant}
      $size={size}
      $hoverEffect={hoverEffect}
      $hasImage={hasImage}
      className={className}
    >
      {cardContent}
    </StyledCard>
  );
};

export default Card;
