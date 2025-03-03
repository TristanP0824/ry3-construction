import React from 'react';
import styled from 'styled-components';

interface TestimonialCardProps {
  name: string;
  role?: string;
  company?: string;
  avatar?: string;
  content: string;
  rating?: number;
  className?: string;
}

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: ${({ theme }) => theme.spacing.xl};
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &::before {
    content: '"';
    position: absolute;
    top: ${({ theme }) => theme.spacing.md};
    left: ${({ theme }) => theme.spacing.md};
    font-size: 5rem;
    line-height: 1;
    font-family: Georgia, serif;
    color: ${({ theme }) => theme.colors.gold};
    opacity: 0.2;
  }
`;

const TestimonialContent = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.darkGrey};
  position: relative;
  z-index: 1;
  flex-grow: 1;
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
`;

const Avatar = styled.div<{ $avatar?: string }>`
  width: 60px;
  height: 60px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  margin-right: ${({ theme }) => theme.spacing.md};
  background-image: ${({ $avatar }) => ($avatar ? `url(${$avatar})` : 'none')};
  background-size: cover;
  background-position: center;
  background-color: ${({ theme, $avatar }) => ($avatar ? 'transparent' : theme.colors.lightGrey)};
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${({ $avatar }) =>
    !$avatar &&
    `
    &::before {
      content: '👤';
      font-size: 1.5rem;
    }
  `}
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const AuthorRole = styled.p`
  font-size: 0.9rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.darkGrey};
  opacity: 0.8;
`;

const RatingContainer = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Star = styled.span<{ $filled: boolean }>`
  color: ${({ $filled, theme }) => ($filled ? theme.colors.gold : theme.colors.lightGrey)};
  font-size: 1.2rem;
  margin-right: 2px;
`;

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  avatar,
  content,
  rating,
  className,
}) => {
  const renderRating = () => {
    if (!rating) return null;
    
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star key={i} $filled={i <= rating}>
          ★
        </Star>
      );
    }
    
    return <RatingContainer>{stars}</RatingContainer>;
  };
  
  const formattedRole = role && company ? `${role}, ${company}` : role || company || '';
  
  return (
    <CardContainer className={className}>
      {renderRating()}
      <TestimonialContent>{content}</TestimonialContent>
      <AuthorContainer>
        <Avatar $avatar={avatar} />
        <AuthorInfo>
          <AuthorName>{name}</AuthorName>
          {formattedRole && <AuthorRole>{formattedRole}</AuthorRole>}
        </AuthorInfo>
      </AuthorContainer>
    </CardContainer>
  );
};

export default TestimonialCard;
