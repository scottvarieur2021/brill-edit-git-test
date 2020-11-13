import React from "react"
import RichText from "../components/richText"
import styled from "styled-components"
import CtaBlock from "./ctaBlock"

const CtaGridWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  .title {
    margin-top: 24px;
  }
`
const TitleWrapper = styled.div`
  margin-top: 14px;
`

const CtaGrid = ({ title, ctaItems }) => {
  return (
    <CtaGridWrapper>
      <div className="title">
        <RichText render={title} />
      </div>
      {ctaItems.map((item, i) => {
        return (
          <CtaBlock
            key={i}
            title={item.call_to_action_block_title}
            content={item.call_to_action_block_content}
            image={item.call_to_action_block_image.url}
            buttonLabel={item.call_to_action_block_button}
            buttonDest={`/${item.cta_block_page_link._meta.uid}`}
          />
        )
      })}
    </CtaGridWrapper>
  )
}

export default CtaGrid
