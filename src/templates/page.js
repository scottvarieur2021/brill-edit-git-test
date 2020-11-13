import React from 'react'
import { graphql } from 'gatsby'
import RichText from '../components/richText'
import Layout from '../components/layout'
import SliceZone from '../components/sliceZone'
import styled from 'styled-components'

const PageWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
`

export const query = graphql`
  query PageQuery($id: String) {
    prismic {
      allPages(id: $id) {
        edges {
          node {
            page_title
            pageContent
            _meta {
              uid
              id
            }
            body {
              ... on PRISMIC_PageBodyCall_to_action_grid {
                type
                label
                fields {
                  call_to_action_block_button
                  call_to_action_block_content
                  call_to_action_block_image
                  call_to_action_block_title
                  cta_block_page_link {
                    ... on PRISMIC_Contact_page {
                      _meta {
                        uid
                      }
                    }
                  }
                }
                primary {
                  section_title
                }
              }
            }
          }
        }
      }
    }
  }
`

const Page = props => {
  const pageTitle = props.data.prismic.allPages.edges[0].node.page_title
  const pageContent = props.data.prismic.allPages.edges[0].node.pageContent
  const body = props.data.prismic.allPages.edges[0].node.body

  return (
    <Layout>
      <PageWrapper>
        <RichText render={pageTitle} />
        <RichText render={pageContent} />
        {!!body && <SliceZone body={body} />}
      </PageWrapper>
    </Layout>
  )
}

export default Page
