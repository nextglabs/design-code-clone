import React from "react";
import styled, { keyframes } from "styled-components";
import MockupAnimation from "../animations/MockupAnimation";
import WaveBackground from "../backgrounds/WaveBackground";
import PurchaseButton from "../button/PurchaseButton";
import { themes } from "../styles/Color";
import { H1, MediumText } from "../styles/Text";

export default function Hero() {
    return (
        <Wrapper>
            <WaveBackground />
            <ContentWrapper>
                <TextWrapper>
                    <Title>Design<br />and Code <span>React</span> Apps</Title>
                    <Description>Don’t skip design. Learn design and code, by building real apps with React and Swift. Complete courses about the best tools.</Description>
                    <PurchaseButton title="Get Pro Access" subtitle="$19 per month" />
                </TextWrapper>
                <MockupAnimation />
            </ContentWrapper>
        </Wrapper>
    )
}

const animation = keyframes`
    0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
    30% { opacity: 0.5; transform: translateY(-10px); filter: blur(10px); }
    100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`;

const Wrapper = styled.div`
    overflow: hidden;
`;

const ContentWrapper = styled.div`
    max-width: 1234px;
    margin: 0 auto;
    padding: 200px 30px;
    display: grid;
    grid-template-columns: 360px auto;

    @media (max-width: 450px) {
        grid-template-columns: auto;
        gap: 60px;
        padding: 150px 20px 250px;
    }
`;

const TextWrapper = styled.div`
    max-width: 360px;
    display: grid;
    gap: 30px;
    
    > * {
        opacity: 0;
        animation: ${animation} 1s forwards;

        :nth-child(1) {
            animation-delay: 0s;
        }
        :nth-child(2) {
            animation-delay: 0.2s;
        }
        :nth-child(3) {
            animation-delay: 0.4s;
        }
    }
`;
const Title = styled(H1)`
    background: linear-gradient(180deg, #730040 0%, #301CBE 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    span {
        background: linear-gradient(180deg, #FFD7FF 0%, #FFB6FF 100%);
        background-clip: text;
        -webkit-background-clip: text;
    }

    @media (max-width: 768px) {
        font-size: 48px;
    }
`;
const Description = styled(MediumText)``;