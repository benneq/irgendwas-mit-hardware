import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Typography, TableRow, TableCell, TableBody, TableHead, Table, Divider, ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import Layout from './src/components/layout'

let theme = createMuiTheme({
    overrides: {
        MuiTypography: {
            gutterBottom: {
                marginBottom: '1.45rem',
            },
        },
    },
});
theme = responsiveFontSizes(theme);

const components = {
    h1: (props) => <Typography variant="h1" gutterBottom {...props} />,
    h2: (props) => <Typography variant="h2" gutterBottom {...props} />,
    h3: (props) => <Typography variant="h3" gutterBottom {...props} />,
    h4: (props) => <Typography variant="h4" gutterBottom {...props} />,
    h5: (props) => <Typography variant="h5" gutterBottom {...props} />,
    h6: (props) => <Typography variant="h6" gutterBottom {...props} />,
    p: (props) => <Typography variant="body2" gutterBottom {...props} />,
    table: (props) => <Table {...props} />,
    tr: (props) => {
        const child = Array.isArray(props.children) ? props.children[0] : props.children;
        return <TableRow hover={!!child && child.props.mdxType === 'td'} {...props} />
    },
    td: ({ align, ...props }) => <TableCell align={align || undefined} {...props} />,
    tbody: (props) => <TableBody {...props} />,
    th: ({ align, ...props }) => <TableCell align={align || undefined} {...props} />,
    thead: (props) => <TableHead {...props} />,
    hr: Divider,
    img: (props) => <div style={{ marginBottom: '1.45rem' }}><img alt="" {...props} /></div>,
}

export const wrapPageElement = ({ element, props }) => {
    return (
        <Layout {...props}>{element}</Layout>
    )
}

export const wrapRootElement = ({ element }) => {
    return (
        <ThemeProvider theme={theme}>
            <MDXProvider components={components}>{element}</MDXProvider>
        </ThemeProvider>
    )
}