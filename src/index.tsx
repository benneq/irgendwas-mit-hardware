import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { MDXProvider } from '@mdx-js/react';
import { Typography, TableRow, TableCell, TableBody, TableHead, Table, Divider, ThemeProvider } from '@material-ui/core';
import theme from './theme';

const components = {
    h1: (props: any) => <Typography variant="h1" {...props} />,
    h2: (props: any) => <Typography variant="h2" {...props} />,
    h3: (props: any) => <Typography variant="h3" {...props} />,
    h4: (props: any) => <Typography variant="h4" {...props} />,
    h5: (props: any) => <Typography variant="h5" {...props} />,
    h6: (props: any) => <Typography variant="h6" {...props} />,
    table: (props: any) => <Table {...props} />,
    tr: (props: any) => {
        const child = Array.isArray(props.children) ? props.children[0] : props.children;
        return <TableRow hover={!!child && child.props.mdxType === 'td'} {...props} />
    },
    td: ({ align, ...props }: any) => <TableCell align={align || undefined} {...props} />,
    tbody: (props: any) => <TableBody {...props} />,
    th: ({ align, ...props }: any) => <TableCell align={align || undefined} {...props} />,
	thead: (props: any) => <TableHead {...props} />,
	hr: Divider,
}

ReactDOM.render(
	<React.StrictMode>
        <ThemeProvider theme={theme}>
            <MDXProvider components={components}>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <App />
                </BrowserRouter>
            </MDXProvider>
        </ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
