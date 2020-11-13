import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SliceZone from "../components/sliceZone"

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            body {
              ... on PRISMIC_HomepageBodyHero {
                type
                primary {
                  hero_content
                  hero_title
                  background_image
                }
              }
              ... on PRISMIC_HomepageBodyCall_to_action_grid {
                type
                fields {
                  cta_block_page_link {
                    ... on PRISMIC_Page {
                      page_title
                      pageContent
                      _meta {
                        uid
                      }
                    }
                  }
                  call_to_action_block_button
                  call_to_action_block_content
                  call_to_action_block_image
                  call_to_action_block_title
                }
                primary {
                  section_title
                }
              }
              ... on PRISMIC_HomepageBodyPrice_list {
                type
                fields {
                  price_list_block_description
                  price_list_block_title
                  price_per_month
                  price_type
                }
                primary {
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  console.log("///from index.js//////////", props.data)
  const body = props.data.prismic.allHomepages.edges[0].node.body
  return (
    <Layout>
      <SliceZone body={body} />
    </Layout>
  )
}

export default IndexPage
