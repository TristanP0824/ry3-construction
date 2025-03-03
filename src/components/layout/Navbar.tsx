import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Theme } from '../../styles/theme';

interface ScrollProps {
  $scrolled: boolean;
  theme?: Theme;
}

const NavbarContainer = styled.header<ScrollProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all ${({ theme }) => theme.transitions.medium};
  background-color: ${({ theme, $scrolled }) => 
    $scrolled ? theme.colors.darkGrey : 'rgba(51, 51, 51, 0.8)'};
  box-shadow: ${({ theme, $scrolled }) => 
    $scrolled ? theme.shadows.medium : 'none'};
`;

const NavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.red};
  text-transform: uppercase;
  letter-spacing: 1px;
  
  span {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const NavLinks = styled.nav<{ $isOpen: boolean }>`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
    transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
    transition: transform ${({ theme }) => theme.transitions.medium};
    box-shadow: ${({ $isOpen, theme }) => ($isOpen ? theme.shadows.large : 'none')};
    display: flex;
    flex-direction: column;
    z-index: 1001;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
  }
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.red : theme.colors.white)};
  margin: 0 ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xs} 0;
  position: relative;
  font-weight: 500;
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.red};
    transform: scaleX(${({ $isActive }) => ($isActive ? 1 : 0)});
    transform-origin: bottom right;
    transition: transform ${({ theme }) => theme.transitions.medium};
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: ${({ theme }) => theme.spacing.md} 0;
    font-size: 1.2rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1002;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity ${({ theme }) => theme.transitions.medium},
              visibility ${({ theme }) => theme.transitions.medium};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <NavbarContainer $scrolled={scrolled}>
      <NavbarInner>
        <Logo to="/">
          RY3 <span>Construction</span>
        </Logo>
        
        <MobileMenuButton onClick={toggleMenu} aria-label="Open menu">
          ☰
        </MobileMenuButton>
        
        <NavLinks $isOpen={isOpen}>
          <CloseButton onClick={toggleMenu} aria-label="Close menu">
            ✕
          </CloseButton>
          <NavLink to="/" $isActive={location.pathname === '/'}>
            Home
          </NavLink>
          <NavLink to="/about" $isActive={location.pathname === '/about'}>
            About
          </NavLink>
          <NavLink to="/services" $isActive={location.pathname === '/services'}>
            Services
          </NavLink>
          <NavLink to="/projects" $isActive={location.pathname === '/projects'}>
            Projects
          </NavLink>
          <NavLink to="/gallery" $isActive={location.pathname === '/gallery'}>
            Gallery
          </NavLink>
          <NavLink to="/testimonials" $isActive={location.pathname === '/testimonials'}>
            Testimonials
          </NavLink>
          <NavLink to="/faq" $isActive={location.pathname === '/faq'}>
            FAQ
          </NavLink>
          <NavLink to="/contact" $isActive={location.pathname === '/contact'}>
            Contact
          </NavLink>
        </NavLinks>
        
        <Overlay $isOpen={isOpen} onClick={toggleMenu} />
      </NavbarInner>
    </NavbarContainer>
  );
};

export default Navbar;
