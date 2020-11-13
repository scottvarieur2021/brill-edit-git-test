import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import './layout.css'
import styled from 'styled-components'

//styled components for layout.js
const Main = styled.main`
  margin: 0 auto;
`
const Header = styled.header`
  display: flex;
  background: black;
  height: 66px;
  //: 0 16px;
  box-sizing: border-box;
`
const Branding = styled.div`
  margin: auto 0;
  a {
    font-weight: bold;
    padding: 0 12px;
    font-size: 20px;
    color: white;
    text-decoration: none;

    &:hover {
      color: orange;
    }
  }
`
const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
`
const NavLink = styled.div`
  margin: auto 0;
  padding: 0 16px;
  font-weight: bold;
  font-size: 16px;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: orange;
    }
  }
`

//graphql query for layout.js
export const navigationQuery = graphql`
  {
    prismic {
      allNavigations {
        edges {
          node {
            navigationLinks {
              link {
                ... on PRISMIC_Page {
                  _meta {
                    uid
                  }
                }
                ... on PRISMIC_Contact_page {
                  _meta {
                    uid
                  }
                }
              }
              label
            }
            branding
          }
        }
      }
    }
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <StaticQuery
          query={`${navigationQuery}`}
          render={data => {
            return (
              <>
                <Branding>
                  <Link to={'/'}>
                    {data.prismic.allNavigations.edges[0].node.branding}
                  </Link>
                </Branding>
                <NavLinks>
                  {data.prismic.allNavigations.edges[0].node.navigationLinks.map(
                    link => {
                      return (
                        <NavLink key={link.link._meta.uid}>
                          <Link to={`/${link.link._meta.uid}`}>
                            {link.label}
                          </Link>
                        </NavLink>
                      )
                    }
                  )}
                </NavLinks>
              </>
            )
          }}
        />
      </Header>
      <Main>{children}</Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
