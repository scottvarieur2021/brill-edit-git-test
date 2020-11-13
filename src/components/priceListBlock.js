import React from 'react'
import styled from 'styled-components'
import RichText from '../components/richText'

const PriceListBlockWrapper = styled.div`
  padding: 10px;
  flex-basis: 32%;
  background: ${props => (props.isMostPopular ? 'orange' : '#eee')};
  color: ${props => (props.isMostPopular ? 'white' : 'black')};
  position: relative;
  .tag {
    position: absolute;
    right: 0;
    top: 0;
    padding: 5px;
    font-weight: bold;
    background: green;
    color: white;
  }
  .price {
    text-align: center;
    font-size: 30px;
    background: rgba(0, 0, 0, 0.2);
    padding: 10px;
    margin-right: -10px;
    margin-left: -10px;
    .duration {
      font-size: 16px;
    }
  }
  .description {
    margin-top: 20px;
  }
`

const PriceListBlock = ({ title, description, price, isMostPopular }) => {
  return (
    <PriceListBlockWrapper isMostPopular={isMostPopular}>
      <RichText render={title} />
      <div className='price'>
        ${price}
        <span className='duration'> / month</span>
      </div>
      <div className='description'>
        <RichText render={description} />
      </div>
      {isMostPopular && <div className='tag'>Most popular</div>}
    </PriceListBlockWrapper>
  )
}

export default PriceListBlock
