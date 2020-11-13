import React from "react"
import RichText from "../components/richText"
import styled from "styled-components"
import { Link } from "gatsby"

const CtaBlockWrapper = styled.section`
  padding: 20px;
  background-color: #eee;
  border-radius: 20px;
  margin: 20px 0;
  .cta-block-content{
    display: flex;
    .image-wrapper{
      margin: auto 18px;
      background: white;
      border-radius: 10px;
      padding: 10px;
    }
    img{
      max-width: 100px;
      margin: 0;
    }
  }
`
const Button = styled.div`
  background: orange;
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;
  a {
    padding: 4px 8px;
    color: white;
    display: inline-block;
    text-decoration: none;
  }
`

const CtaBlock = ({ title, content, image, buttonLabel, buttonDest }) => {
  return (
    <CtaBlockWrapper>
      <RichText render={title} />
      <div className='cta-block-content'>
        <RichText render={content} />
        <div className="image-wrapper">
          <img src={image} alt="featured"/>
        </div>
      </div>
      <Button>
        <Link to={buttonDest}>{buttonLabel}</Link>
      </Button>
    </CtaBlockWrapper>
  )
}

export default CtaBlock
