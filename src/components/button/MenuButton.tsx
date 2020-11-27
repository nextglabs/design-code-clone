import { Link } from 'gatsby'
import React from 'react'
import styled from "styled-components";
import { MenuItemData } from "../../data/menu";

type MenuButtonProps = {
    item: MenuItemData;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
export default function MenuButton(props: MenuButtonProps) {
    const { item, onClick } = props;
    return (
        <Link to={item.link} onClick={onClick}>
            <MenuItem title={item.title}>
                <img src={item.icon} />
                {item.title}
            </MenuItem>
        </Link>
    )
}

const MenuItem = styled.div`
    color: rgba(255, 255, 255, .7);
    display: grid;
    gap: ${props => props.title ? "10px" : "0px"};
    grid-template-columns: 24px auto;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    transition: 0.5s ease-out;

    :hover {
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    }
`;