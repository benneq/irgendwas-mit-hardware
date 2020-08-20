import React from "react"
import "./src/styles/global.scss";
import { MDXProvider } from "@mdx-js/react"
import { Typography, TableRow, TableCell, TableBody, TableHead, Table, Divider, ThemeProvider, createMuiTheme, responsiveFontSizes, useMediaQuery } from '@material-ui/core';
import Layout from '@components/layout'
import LightboxImage from "@components/common/LightboxImage";



const components = {
    h1: (props) => <Typography variant="h1" gutterBottom {...props} />,
    h2: (props) => <Typography variant="h2" gutterBottom {...props} />,
    h3: (props) => <Typography variant="h3" gutterBottom {...props} />,
    h4: (props) => <Typography variant="h4" gutterBottom {...props} />,
    h5: (props) => <Typography variant="h5" gutterBottom {...props} />,
    h6: (props) => <Typography variant="h6" gutterBottom {...props} />,
    p: (props) => <Typography variant="body2" gutterBottom {...props} />,
    table: (props) => <div style={{ overflowX: 'auto' }}><Table {...props} /></div>,
    tr: (props) => {
        const child = Array.isArray(props.children) ? props.children[0] : props.children;
        return <TableRow hover={!!child && child.props.mdxType === 'td'} {...props} />
    },
    td: ({ align, ...props }) => <TableCell align={align || undefined} {...props} />,
    tbody: (props) => <TableBody {...props} />,
    th: ({ align, ...props }) => <TableCell align={align || undefined} {...props} />,
    thead: (props) => <TableHead {...props} />,
    hr: Divider,
    inlineCode: (props) => <code style={{ fontSize: '1rem' }} {...props} />,
    // display:inline-block;color:#000;line-height:1.2;vertical-align:top;width:42px;white-space:nowrap;overflow-wrap:normal;text-align:center
    Lightbox: (props) => <LightboxImage style={{ marginBottom: '1.45rem' }} {...props} />,
}



export const wrapPageElement = ({ element, props }) => {
    return (
        <Layout {...props}>{element}</Layout>
    )
}



const RootElementWrapper = ({ element }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    let theme = createMuiTheme({
        props: {
            MuiUseMediaQuery: {
                noSsr: true
            },
        },
        palette: {
            type: prefersDarkMode ? 'dark' : 'light',
        },
        overrides: {
            MuiTypography: {
                gutterBottom: {
                    marginBottom: '1.45rem',
                },
            },
            MuiFormLabel: {
                root: {
                    whiteSpace: 'nowrap',
                },
            },
            MuiTextField: {
                root: {
                    minWidth: 166
                }
            },
        },
    });

    theme = responsiveFontSizes(theme);

    return (
        <ThemeProvider theme={theme}>
            <MDXProvider components={components}>{element}</MDXProvider>
        </ThemeProvider>
    );
};



export const wrapRootElement = (props) => <RootElementWrapper {...props} />