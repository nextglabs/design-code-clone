import React from "react";
import styled from "styled-components";
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
                    <Title>Design<br />and Code React Apps</Title>
                    <Description>Don’t skip design. Learn design and code, by building real apps with React and Swift. Complete courses about the best tools.</Description>
                    <PurchaseButton title="Get Pro Access" subtitle="$19 per month" />
                </TextWrapper>
                <MockupAnimation />
            </ContentWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    overflow: hidden;
`;

const ContentWrapper = styled.div`
    max-width: 1234px;
    margin: 0 auto;
    padding: 200px 30px;
    display: grid;
    grid-template-columns: 360px auto;
`;

const TextWrapper = styled.div`
    max-width: 360px;
    display: grid;
    gap: 30px;
`;
const Title = styled(H1)`
    color: ${themes.light.text1};
`;
const Description = styled(MediumText)``;