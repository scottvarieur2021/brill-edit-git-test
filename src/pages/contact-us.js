import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import RichText from '../components/richText'

const ContactUsWrapper = styled.section`
  width: 800px;
  margin: 0 auto;
`
const FormWrapper = styled.form`
  padding: 10px;
  background: #eee;
  margin-top: 20px;
  input {
    margin-bottom: 10px;
    border-radius: 4px;
    height: 40px;
    border: 1px solid #ccc;
    width: 100%;
  }
  textarea {
    margin-bottom: 10px;
    border-radius: 4px;
    height: 100px;
    border: 1px solid #ccc;
    width: 100%;
    resize: none;
  }
`
const Button = styled.button`
  background-color: orange;
  color: white;
  padding: 4px 8px;
  box-shadow: none;
  border-radius: 4px;
  cursor: pointer;
`

export const contactUsQuery = graphql`
  {
    prismic {
      allContact_pages {
        edges {
          node {
            form_fields {
              field_name
              required
              field_type
            }
            form_title
            form_description
          }
        }
      }
    }
  }
`

const ContactUs = props => {
  const formFields =
    props.data.prismic.allContact_pages.edges[0].node.form_fields
  const title = props.data.prismic.allContact_pages.edges[0].node.form_title
  const description =
    props.data.prismic.allContact_pages.edges[0].node.form_description

  return (
    <Layout>
      <ContactUsWrapper>
        <RichText render={title} />
        <RichText render={description} />
        <FormWrapper
          name='contact-us'
          method='POST'
          data-netlify='true'
          action='/contact-success'
          onSubmit={e => e.preventDefault()}
        >
          <input type='hidden' name='form-name' value='contact-us' />
          {formFields.map((field, i) => {
            if (field.field_type === 'textarea') {
              return (
                <div key={i}>
                  <textarea
                    placeholder={field.field_name}
                    required={field.required === 'yes'}
                  />
                </div>
              )
            } else {
              return (
                <div key={i}>
                  <input
                    placeholder={field.field_name}
                    type={field.type}
                    required={field.required === 'yes'}
                  />
                </div>
              )
            }
          })}
          <Button type='submit'>Submit</Button>
        </FormWrapper>
      </ContactUsWrapper>
    </Layout>
  )
}

export default ContactUs
