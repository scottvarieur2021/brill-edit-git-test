import React from "react"
import styled from "styled-components"
import RichText from "../components/richText"
import PriceListBlock from "./priceListBlock"

const PriceListGridWrapper = styled.div`
  max-width: 800px;
  margin: 20px auto;
  .price_list_grid_title{
    text-align: center;
    margin-top: 46px;
  }
`
const PriceListBlocksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const PriceListGrid = ({ title, priceListItems }) => {
  return (
    <PriceListGridWrapper>
      <div className='price_list_grid_title'><RichText render={title} /></div>
      <PriceListBlocksWrapper>
        {priceListItems.map((item, i) => {
          return (
            <PriceListBlock
              key={i}
              title={item.price_list_block_title}
              description={item.price_list_block_description}
              price={item.price_per_month}
              isMostPopular={item.price_type === "Most popular"}
            />
          )
        })}
      </PriceListBlocksWrapper>
    </PriceListGridWrapper>
  )
}

export default PriceListGrid
