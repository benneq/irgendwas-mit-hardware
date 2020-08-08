import React from 'react'
import { Helmet } from 'react-helmet'


const pageTitle = "Irgendwas mit Hardware";

type Props = {
    title?: string
}

const SEO: React.FunctionComponent<Props> = (props) => {
    const { title } = props;

    return (
        <Helmet title={title} titleTemplate={`%s | ${pageTitle}`} defaultTitle={pageTitle} />
    )
}

export default SEO
