import React from 'react'
import styled from "styled-components";

export default function WaveBackground() {
    return (
        <Wrapper>
            <Background />
            <Wave alt="wave1" src="/images/waves/hero-wave1.svg" style={{
                top: "100px", filter: "blur(60px)"
            }} />
            <Wave alt="wave2" src="/images/waves/hero-wave2.svg" style={{ top: "350px" }} />
            <Wave alt="wave3" src="/images/waves/hero-wave3.svg" style={{ top: "550px" }} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
`;

const Background = styled.div`
    position: absolute;
    background: linear-gradient(180deg, #4316DB 0%, #9076E7 100%);
    width: 100%;
    height: 800px;
    z-index: -1;
`;

const Wave = styled.img`
    position: absolute;
    z-index: -1;
`;