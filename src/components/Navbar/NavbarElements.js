import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

export const Nav = styled.nav`
    background: var(--color-light-accent);
    height: 80px;
    font-family: var(--font-header);
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;   
    position: sticked;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
    color: var(--color-dark-shade);
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
    color: var(--color-dark-shade);
    display: flex;  
    align-items: center;
    text-decoration: none;
    padding: 0 1em;
    height: 100%;
    cursor: pointer;
    font-family: var(--font-body);
`;

export const NavWalletBtn = styled.nav`
    display: flex;
    align-items: center;
    font-weight: bold;
    font-family: var(--font-button);

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavWalletLink = styled(LinkRouter)`
    border-radius: 20px;
    background: var(--color-dark-shade);
    white-space: nowrap;
    padding: 10px 22px;
    color: var(--color-light-shade);
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
`;