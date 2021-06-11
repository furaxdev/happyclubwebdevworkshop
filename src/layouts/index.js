import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { graphql, StaticQuery } from "gatsby";
import "prismjs/themes/prism-okaidia.css";
import "./index.css";

import { useColorMode  ,Button , useThemeUI} from 'theme-ui'

const modes = [ 'light', 'dark' , 'deep' ]

const TemplateWrapper = props => {
  const a = useThemeUI();
  console.log(a);
  const [mode, setMode] = useColorMode()
  const cycleMode = (e) => {
    const i = modes.indexOf(mode)
    const next = modes[(i + 1) % modes.length]
    setMode(next)

  }
  return (
    <StaticQuery
      render={data => {
        const frontmatter =
          props.data && props.data.markdownRemark
            ? props.data.markdownRemark.frontmatter
            : null;

        return (
          <div>
            <Helmet
              title={
                frontmatter
                  ? `${frontmatter.title} – ${frontmatter.section} – ${data.site.siteMetadata.title}`
                  : data.site.siteMetadata.title
              }
              meta={[
                {
                  name: "og:title",
                  content: frontmatter
                    ? `${frontmatter.title} – ${frontmatter.section} – ${data.site.siteMetadata.title}`
                    : data.site.siteMetadata.title
                },
                {
                  name: "description",
                  content: frontmatter
                    ? frontmatter.description
                    : data.site.siteMetadata.description
                },
                {
                  name: "og:description",
                  content: frontmatter
                    ? frontmatter.description
                    : data.site.siteMetadata.description
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image"
                },
                {
                  name: "keywords",
                  content: data.site.siteMetadata.keywords.join(", ")
                },
                {}
              ]}
            />
            <header className="header">
              <Link to="/" className="navbar-brand">
              {data.site.siteMetadata.title}
              </Link>



              <Button
                variant="secondary"
                sx={{
                  ml: 2,
                  whiteSpace: 'pre',
                  color: 'text',
                  bg : 'muted'
                }}
                onClick={cycleMode}>
                {modes[(modes.indexOf(mode)+1)%modes.length]}
              </Button>


            </header>


            <main className="main">
              <p style={{textAlign:'end'}}>   {!frontmatter ? null :
                `${frontmatter.section} – ${frontmatter.title}`
              }</p>
              {props.children}
            </main>

          </div>
        );
      }}
      query={graphql`
        query HomePage($path: String!) {
          markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
              path
              title
              order
              section
              description
            }
          }
          site {
            pathPrefix
            siteMetadata {
              title
              subtitle
              description
              keywords
            }
          }
        }
      `}
    />
  );
};

export default TemplateWrapper;
