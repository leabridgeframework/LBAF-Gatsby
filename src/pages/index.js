// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {StaticImage} from 'gatsby-plugin-image'


// Step 2: Define your component
const IndexPage = () => {
  return (
  	<Layout pageTitle = "Home Page">
  		<p> I'm making this using the Gatsby Tutorial thing and i'm rubbish</p>
  		<StaticImage
  			alt="a lovely landscape from unsplash"
        src="../images/Landscape-unsplash.jpg"
        />
  	</Layout>
  )
}

// Step 3: Export your component
export default IndexPage