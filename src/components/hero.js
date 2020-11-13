import React from "react"
import RichText from "../components/richText"
import styled from "styled-components"

const HeroWrapper = styled.section`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vh - 66px);
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
  div {
    max-width: 800px;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.5);
    padding: 16px;
  }
`
const Hero = ({ title, content, backgroundImage }) => {
  return (
    <HeroWrapper backgroundImage={backgroundImage}>
      <div>
        <RichText render={title} />
        <p>{content}</p>
      </div>
    </HeroWrapper>
  )
}

export default Hero
