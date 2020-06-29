import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Toolbar, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    toolbar: {
        paddingLeft: theme.spacing(2),
    },
}));

type Column<T> = {
    id: string
    header: React.ReactNode
    render: (row: T, index: number) => React.ReactNode
}

type Props<T> = {
    caption?: React.ReactNode
    columns: Column<T>[]
    value: T[]
    legend?: React.ReactNode
};

const SimpleTable: <T>(props: Props<T>) => React.ReactElement<Props<T>> = (props) => {
    const { caption, columns, value, legend } = props;
    const classes = useStyles();

    return (
        <>
            {caption && <Toolbar className={classes.toolbar}><Typography variant="h6">{caption}</Typography></Toolbar>}
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((column, i) =>
                                <TableCell key={i}>
                                    {column.header}
                                </TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {value.map((row, rowi) =>
                            <TableRow key={rowi} hover>
                                {columns.map((column, coli) =>
                                    <TableCell
                                        key={coli}
                                        component={coli === 0 ? 'th' : undefined}
                                        scope={coli === 0 ? 'row' : undefined}
                                    >
                                        {column.render(row, rowi)}
                                    </TableCell>
                                )}

                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            {legend && <Toolbar className={classes.toolbar}>{legend}</Toolbar>}
        </>
    );
};

export default SimpleTable;
