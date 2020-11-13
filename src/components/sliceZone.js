import React from 'react'
import Hero from './hero'
import CtaGrid from './ctaGrid'
import PriceListGrid from './priceListGrid'

const SliceZone = ({ body }) => {
  console.log('////from sliceZone.js////', body)
  return (
    <div>
      {body.map((bodyContent, i) => {
        if (bodyContent.type === 'hero') {
          return (
            <Hero
              key={i}
              title={bodyContent.primary.hero_title}
              content={bodyContent.primary.hero_content}
              backgroundImage={bodyContent.primary.background_image.url}
            />
          )
        } else if (bodyContent.type === 'call_to_action_grid') {
          return (
            <CtaGrid
              key={i}
              title={bodyContent.primary.section_title}
              ctaItems={bodyContent.fields}
            />
          )
        } else if (bodyContent.type === 'price_list') {
          return (
            <PriceListGrid
              key={i}
              title={bodyContent.primary.title}
              priceListItems={bodyContent.fields}
            />
          )
        } else {
          return null
        }
      })}
    </div>
  )
}

export default SliceZone
