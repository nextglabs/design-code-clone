import { Link } from 'gatsby';
import React, { useState } from 'react'
import styled from "styled-components";
import { menuData } from "../../data/menu";
import MenuButton from '../button/MenuButton';
import MenuTooltip from '../tooltips/MenuTooltip';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    return (
        <Wrapper>
            <Link to="/">
                <img alt="logo" src="/images/logos/logo.svg" />
            </Link>
            <MenuWrapper count={menuData.length}>
                {menuData.map((item, index) => item.link === "/account" ? (
                    <MenuButton onClick={(e) => toggle(e)} item={item} key={index} />
                ) : (
                        <MenuButton item={item} key={index} />
                    ))}
            </MenuWrapper>
            <MenuTooltip isOpen={isOpen} />
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
`;
const MenuWrapper = styled.div<{ count: number }>`
    display: grid;
    gap: 30px;
    grid-template-columns: ${props => `repeat(${props.count}, auto)`};
`;