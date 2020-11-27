import { Link } from 'gatsby';
import React from 'react';
import styled from "styled-components";
import { tooltipData } from '../../data/menu';
import MenuButton from "../button/MenuButton";

type MenuTooltipProps = {
    isOpen: boolean;
}

export default function MenuTooltip(props: MenuTooltipProps) {
    const { isOpen } = props;
    return (
        <Wrapper isOpen={isOpen}>
            {/* <Avatar src={"/static/images/"} /> */}
            <MenuWrapper>
                {tooltipData.map((item, index) => (
                    <Link to={item.link}>
                        <MenuButton item={item} key={index} />
                    </Link>
                ))}
            </MenuWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div<{ isOpen: boolean }>`
    position: absolute;
    width: 260px;
    right: 30px;
    top: 90px;

    background: rgba(15, 14, 71, 0.3);
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(40px);

    border-radius: 20px;

    display: grid;
    gap: 10px;
    grid-template-columns: 200px;
    justify-content: center;
    padding: 20px 40px;
    z-index: 9999;

    transition: 0.2s ease-in-out;

    opacity: ${props => props.isOpen ? 1 : 0};
    /* display: none isn't appropriate here 
     because it doesn't work with the  
     transition. we use visibility instead  */
    /* display: ${props => props.isOpen ? "block" : "none"}; */
    visibility: ${props => props.isOpen ? "visible" : "hidden"};
    
    transform: ${props => props.isOpen ? "skew(0) rotate(0) translateY(0)" : "skew(-5deg) rotate(5deg) translateY(-30px)"};
`;

const MenuWrapper = styled.div`
    /* display: grid;
    gap:  */
`;
const Avatar = styled.img``;
