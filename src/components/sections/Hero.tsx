import React from "react";
import styled from "styled-components";
import { themes } from "../styles/Color";
import { H1, MediumText } from "../styles/Text";

export default function Hero() {
    return (
        <Wrapper>
            <ContentWrapper>
                <TextWrapper>
                    <Title>Design<br />and Code React Apps</Title>
                    <Description>Don’t skip design. Learn design and code, by building real apps with React and Swift. Complete courses about the best tools.</Description>
                </TextWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: linear-gradient(180deg, #4316DB 0%, #9076E7 100%);
`;

const ContentWrapper = styled.div`
    max-width: 1234px;
    margin: 0 auto;
    padding: 200px 30px;
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