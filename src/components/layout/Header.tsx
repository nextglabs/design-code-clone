import { Link } from 'gatsby';
import React, { useState, useEffect, useRef } from 'react'
import styled from "styled-components";
import { menuData } from "../../data/menu";
import MenuButton from '../button/MenuButton';
import MenuTooltip from '../tooltips/MenuTooltip';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();
    const tooltipRef = useRef();

    const toggle = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (!ref.current?.contains(event.target) && !tooltipRef.current?.contains(event.target)) {
            setIsOpen(false);
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [])
    return (
        <Wrapper>
            <Link to="/">
                <img alt="logo" src="/images/logos/logo.svg" />
            </Link>
            <MenuWrapper count={menuData.length} ref={ref}>
                {menuData.map((item, index) => item.link === "/account" ? (
                    <MenuButton onClick={toggle} item={item} key={index} />
                ) : (
                        <MenuButton item={item} key={index} />
                    ))}
                <HamburgerWrapper>
                    <MenuButton onClick={toggle} item={{ icon: "/images/icons/hamburger.svg ", link: "/account" }} />
                </HamburgerWrapper>
            </MenuWrapper>
            <div ref={tooltipRef}>
                <MenuTooltip isOpen={isOpen} />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    top: 60px;
    display: grid;
    grid-template-columns: 44px auto;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 30px;

    @media (max-width: 768px) {
        top: 30px;
    }
    @media (max-width: 450px) {
        top: 20px;
        padding: 0 20px;
    }
`;
const MenuWrapper = styled.div<{ count: number }>`
    display: grid;
    gap: 30px;
    grid-template-columns: ${props => `repeat(${props.count}, auto)`};

    @media (max-width: 768px) {
        grid-template-columns: auto;
        > a {
            display: none;
        }
    }
`;

const HamburgerWrapper = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`;