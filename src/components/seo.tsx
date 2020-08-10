import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';



type Props = {
    title?: string
}

const SEO: React.FunctionComponent<Props> = (props) => {
    const { title } = props;

    const data = useStaticQuery<{ site: { siteMetadata: { pageTitle: string } } }>(graphql`
        query SEO {
            site {
                siteMetadata {
                    pageTitle: title
                }
            }
        }
    `);

    const { pageTitle } = data.site.siteMetadata;

    return (
        <Helmet title={title} titleTemplate={`%s | ${pageTitle}`} defaultTitle={pageTitle} />
    )
}

export default SEO
