import React from 'react'
import { Helmet } from 'react-helmet'


type Props = {
    title: string
}

const SEO: React.FunctionComponent<Props> = (props) => {
    const { title } = props;

    const titleTemplate = "%s · Irgendwas mit Hardware"

    return (
        <Helmet title={title} titleTemplate={titleTemplate} />
    )
}

export default SEO
