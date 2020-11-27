import { Link } from "gatsby";
import React from "react"
import styled from "styled-components";
import { themes } from "../styles/Color";
import { Caption2, SmallText } from "../styles/Text";

type PurchaseButtonProps = {
    title: string;
    subtitle: string;
}
export default function PurchaseButton({ title, subtitle }: PurchaseButtonProps) {
    return (
        <Link to="/page-2">
            <Wrapper>
                <IconWrapper>
                    <Icon src="/images/icons/credit.svg" className="icon" />
                    <Ring src="/images/icons/icon-ring.svg" />
                </IconWrapper>
                <TextWrapper>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                </TextWrapper>
            </Wrapper>
        </Link>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 53px auto;
    align-items: center;
    gap: 20px;
    width: 280px;
    height: 77px;
    background: linear-gradient(180deg, #FFFFFF 0%, #D9DFFF 100%);
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 20px 40px rgba(23, 0, 102, 0.2);
    backdrop-filter: blur(30px);
    border-radius: 20px;
    padding: 12px;
    
    *, & {
        transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    :hover {
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 30px 60px rgba(23, 0, 102, 0.5);
        transform: translateY(-3px);

        .icon {
            transform: scale(1.2);
        }
    }
`;

const TextWrapper = styled.div`
    display: grid;
    gap: 4px;
`;
const Title = styled(Caption2)`
    color: ${themes.light.text2};
`;
const Subtitle = styled(SmallText)``;

const Icon = styled.img`
    width: 29px;
    height: 29px;
`;

const IconWrapper = styled.div`
    width: 44px;
    height: 44px;
    background: linear-gradient(200.44deg, #4316DB 13.57%, #9076E7 98.38%);
    box-shadow: 0px 10px 20px rgba(182, 153, 255, 0.3);
    border-radius: 50%;
    display: grid;
    justify-content: center;
    align-content: center;
    justify-self: center;
    position: relative;

    ${Wrapper}:hover & {
        filter: hue-rotate(10deg) brightness(100%) saturate(120%);
    }
`;

const Ring = styled.img`
    position: absolute;
    top: -15px;
    left: -16px;

    ${Wrapper}:hover & {
        transform: rotate(30deg) scale(1.2) translate(1px, 1px);
    }
`;