// Template for blog page component

import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {	
	return (	
		<Layout pageTitle="My Blog Posts">
			
			{
				data.allMdx.nodes.map(node => (
					<article key={node.id}>
						<h2>{node.frontmatter.title}</h2>
						<p>Date Posted: {node.frontmatter.date}</p>
						<MDXRenderer>
              				{node.body}
            			</MDXRenderer>
						<br></br>
					</article>
				))

			}

			
		</Layout>
	)
}




export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "DD-MM-YYYY")
          title
        }
        id
        body
      }
    }
  }
`

export default BlogPage