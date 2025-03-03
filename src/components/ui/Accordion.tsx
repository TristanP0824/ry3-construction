import React, { useState } from 'react';
import styled from 'styled-components';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen?: boolean;
  onClick?: () => void;
}

interface AccordionProps {
  items: {
    title: string;
    content: string;
  }[];
  allowMultiple?: boolean;
  className?: string;
}

const AccordionContainer = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
`;

const AccordionItemContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  
  &:last-child {
    border-bottom: none;
  }
`;

const AccordionHeader = styled.button<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ $isOpen, theme }) => 
    $isOpen ? theme.colors.lightGrey : theme.colors.white};
  border: none;
  text-align: left;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
  
  &:focus {
    outline: none;
  }
`;

const AccordionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const AccordionIcon = styled.span<{ $isOpen: boolean }>`
  display: inline-block;
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    transition: transform ${({ theme }) => theme.transitions.fast};
  }
  
  &::before {
    top: 11px;
    left: 0;
    width: 100%;
    height: 2px;
  }
  
  &::after {
    top: 0;
    left: 11px;
    width: 2px;
    height: 100%;
    transform: ${({ $isOpen }) => ($isOpen ? 'scaleY(0)' : 'scaleY(1)')};
  }
`;

const AccordionContent = styled.div<{ $isOpen: boolean }>`
  padding: ${({ $isOpen, theme }) => ($isOpen ? theme.spacing.lg : '0 ' + theme.spacing.lg)};
  max-height: ${({ $isOpen }) => ($isOpen ? '1000px' : '0')};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.medium};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
`;

const AccordionText = styled.p`
  margin: 0;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen = false,
  onClick,
}) => {
  return (
    <AccordionItemContainer>
      <AccordionHeader $isOpen={isOpen} onClick={onClick}>
        <AccordionTitle>{title}</AccordionTitle>
        <AccordionIcon $isOpen={isOpen} />
      </AccordionHeader>
      <AccordionContent $isOpen={isOpen}>
        <AccordionText>{content}</AccordionText>
      </AccordionContent>
    </AccordionItemContainer>
  );
};

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className,
}) => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  
  const handleItemClick = (index: number) => {
    if (allowMultiple) {
      setOpenItems((prevOpenItems) =>
        prevOpenItems.includes(index)
          ? prevOpenItems.filter((item) => item !== index)
          : [...prevOpenItems, index]
      );
    } else {
      setOpenItems((prevOpenItems) =>
        prevOpenItems.includes(index) ? [] : [index]
      );
    }
  };
  
  return (
    <AccordionContainer className={className}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openItems.includes(index)}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </AccordionContainer>
  );
};

export default Accordion;
