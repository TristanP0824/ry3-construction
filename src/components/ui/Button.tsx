import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Theme } from '../../styles/theme';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  as?: React.ElementType;
  to?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

interface StyledButtonProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
  theme: Theme;
  disabled?: boolean;
}

const buttonStyles = css<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: all ${({ theme }) => theme.transitions.medium};
  cursor: pointer;
  text-decoration: none;
  border: 2px solid transparent;
  
  /* Size styles */
  ${({ $size, theme }) =>
    $size === 'small' &&
    css`
      padding: ${theme.spacing.xs} ${theme.spacing.md};
      font-size: 0.875rem;
    `}
  
  ${({ $size, theme }) =>
    $size === 'medium' &&
    css`
      padding: ${theme.spacing.sm} ${theme.spacing.lg};
      font-size: 1rem;
    `}
  
  ${({ $size, theme }) =>
    $size === 'large' &&
    css`
      padding: ${theme.spacing.md} ${theme.spacing.xl};
      font-size: 1.125rem;
    `}
  
  /* Variant styles */
  ${({ $variant, theme }) =>
    $variant === 'primary' &&
    css`
      background-color: ${theme.colors.red};
      color: ${theme.colors.white};
      
      &:hover:not(:disabled) {
        background-color: ${theme.colors.darkRed};
        color: ${theme.colors.white};
        border-color: ${theme.colors.darkRed};
        transform: translateY(-3px);
        box-shadow: ${theme.shadows.medium};
      }
      
      &:active:not(:disabled) {
        transform: translateY(-1px);
        box-shadow: ${theme.shadows.small};
      }
    `}
  
  ${({ $variant, theme }) =>
    $variant === 'secondary' &&
    css`
      background-color: ${theme.colors.darkGrey};
      color: ${theme.colors.white};
      
      &:hover:not(:disabled) {
        background-color: ${theme.colors.red};
        transform: translateY(-3px);
        box-shadow: ${theme.shadows.medium};
      }
      
      &:active:not(:disabled) {
        transform: translateY(-1px);
        box-shadow: ${theme.shadows.small};
      }
    `}
  
  ${({ $variant, theme }) =>
    $variant === 'outline' &&
    css`
      background-color: transparent;
      color: ${theme.colors.red};
      border-color: ${theme.colors.red};
      
      &:hover:not(:disabled) {
        background-color: ${theme.colors.red};
        color: ${theme.colors.white};
        transform: translateY(-3px);
        box-shadow: ${theme.shadows.medium};
      }
      
      &:active:not(:disabled) {
        transform: translateY(-1px);
        box-shadow: ${theme.shadows.small};
      }
    `}
  
  ${({ $variant, theme }) =>
    $variant === 'text' &&
    css`
      background-color: transparent;
      color: ${theme.colors.red};
      padding-left: 0;
      padding-right: 0;
      border: none;
      
      &:hover:not(:disabled) {
        color: ${theme.colors.darkRed};
        transform: translateY(-3px);
      }
      
      &:active:not(:disabled) {
        transform: translateY(-1px);
      }
    `}
  
  /* Full width */
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  
  /* Disabled state */
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      box-shadow: none;
    `}
`;

const StyledButton = styled.button<StyledButtonProps>`
  ${buttonStyles}
`;

const StyledLink = styled(Link)<StyledButtonProps>`
  ${buttonStyles}
`;

const StyledAnchor = styled.a<StyledButtonProps>`
  ${buttonStyles}
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  as,
  to,
  href,
  onClick,
  disabled = false,
  children,
  className,
  ...rest
}) => {
  if (to) {
    return (
      <StyledLink
        to={to}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        className={className}
        {...rest}
      >
        {children}
      </StyledLink>
    );
  }
  
  if (href) {
    return (
      <StyledAnchor
        href={href}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        className={className}
        {...rest}
      >
        {children}
      </StyledAnchor>
    );
  }
  
  return (
    <StyledButton
      as={as}
      onClick={onClick}
      disabled={disabled}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      className={className}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
