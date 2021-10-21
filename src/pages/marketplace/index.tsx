import type { NextPage } from 'next';
import { useState } from 'react'
import NftTable from '@/components/NftTable';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Layout from '@/components/DefaultLayout';
import TextField from '@mui/material/TextField';
import { ThemeProvider, makeStyles } from '@mui/styles';

const testNftDataList = [
    {
        Name: "Rare Pape",
        Price: 234,
        Type: 1,
        Owner: "Table",
        Publisher: "Jean Lynch",
    },
    {
        Name: "Rare Pape V",
        Price: 296,
        Type: 2,
        Owner: "Table",
        Publisher: "Jean Lynch",
    },
    {
        Name: "Magine Colene",
        Price: 305,
        Type: 3,
        Owner: "Table",
        Publisher: "Jean Lynch",
    },
]

const headCells = [
    {
        id: 'Expand',
        label: '',
    },
    {
        id: 'Name',
        label: 'Name',
    },
    {
        id: 'Price',
        label: 'Price',
    },
    {
        id: 'Type',
        label: 'Type',
    },
    {
        id: 'Owner',
        label: 'Owner',
    },
    {
        id: 'Publisher',
        label: 'Publisher',
    },
];

const useStyles = makeStyles({
    custominput: {
      border: 1,
      borderStyle: 'solid',
      borderColor: '#bbbcbd',
      borderRadius: '4px'
    },
  });

const MarketPlace: NextPage = () => {

    const [age, setAge] = useState(0)
    const classes = useStyles();
    return (
        <Layout title="Marketpalce" currentNavIndex="1" >
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                className="flex justify-between px-6"
            >
                <div>
                    <input id="filled-basic" placeholder="Search Text" className={`custom-input h-full p-4 w-full ${classes.custominput}`} />
                </div>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Filter 1</InputLabel>
                    <Select labelId="demo-simple-select-label" label="Filter1" id="demo-simple-select1">
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Filter 2</InputLabel>
                    <Select labelId="demo-simple-select-label" label="Filter1" id="demo-simple-select1">
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <NftTable dataList={testNftDataList} headCells={headCells} />
        </Layout>
    )
}

export default MarketPlace;