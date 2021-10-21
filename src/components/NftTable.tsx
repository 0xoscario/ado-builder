import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Paper, TableSortLabel, Box } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { visuallyHidden } from '@mui/utils';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "rgba(31, 41, 55, var(--tw-bg-opacity))",
        color: theme.palette.common.white,
        fontWeight: 800,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const StyledTableSortLabel = styled(TableSortLabel)`
    color:white !important;
    span,
    svg {
        color: white !important;
        font-weight: bold;
    }
    :hover{
        color: white
    }
`;

function EnhancedTableHead(props) {
    const { order, orderBy, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <StyledTableRow>
                {props.headCells.map((headCell) => (
                    <StyledTableCell
                        key={headCell.id}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <StyledTableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                            classes={{ icon: "" }}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </StyledTableSortLabel>
                    </StyledTableCell>
                ))}
            </StyledTableRow>
        </TableHead>
    );
}

interface Item {
    Name: string,
    Price: number,
    Type: number,
    Owner: string,
    Publisher: string
}

function Row(props: Item) {
    const [open, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {props.Name}
                </TableCell>
                <TableCell align="left">{props.Price}</TableCell>
                <TableCell align="left">{props.Type}</TableCell>
                <TableCell align="left">{props.Owner}</TableCell>
                <TableCell align="left">{props.Publisher}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Table size="small" aria-label="purchases">
                                <TableBody>
                                    <TableRow>
                                        <TableCell />
                                        <TableCell component="th" scope="row" align="center" className="flex">
                                            <div className="flex mr-4">
                                                <Avatar
                                                    alt="Image"
                                                    src="/static/images/avatar/1.jpg"
                                                    sx={{ width: 100, height: 100 }}
                                                    variant="rounded"
                                                />
                                                <Button variant="contained" className="m-auto ml-4">
                                                    Purchase
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


const NftTable = (props) => {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('item');

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const descendingComparator = (a, b, orderBy) => {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    const getComparator = (order, orderBy) => {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    };

    const stableSort = (array, comparator) => {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) {
                return order;
            }
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }


    return (
        <TableContainer
            component={Paper}
            variant="outlined"
        >
            <Table>
                <EnhancedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={props.dataList.length}
                    headCells={props.headCells}
                />
                <TableBody>
                    {stableSort(props.dataList, getComparator(order, orderBy))
                        .map((row, index) => {
                            return (
                                <Row {...row} key={index} />
                            );
                        })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default NftTable;