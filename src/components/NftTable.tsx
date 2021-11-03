import React from 'react';
import _ from 'lodash';

import { ArrowNarrowUpIcon, ArrowNarrowDownIcon, PlusIcon, MinusIcon, SearchIcon, ChevronLeftIcon, ChevronDoubleLeftIcon, ChevronRightIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid';

import AudioSvg from '@/assets/audio.svg';
import ImageSvg from '@/assets/image.svg';
import DomainSvg from '@/assets/domain.svg';
import OtherSvg from '@/assets/other.svg';
import nftDataList from '../pages/api/nft-list';

interface Item {
    Name: string,
    Price: number,
    Type: number,
    Owner: string,
    Publisher: string
}

enum NftType {
    Image = "Image",
    Audio = "Audio",
    Domain = "Domain",
    Other = "Other"
}


const NftTable = (props) => {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('item');
    const [expandedRows, setExpandedRows] = React.useState([]);
    const [searchText, setSearchText] = React.useState("");
    const [filterType, setFilterType] = React.useState("All");
    const [itemPerPage, setItemPerPage] = React.useState(25);
    const [curPage, setCurPage] = React.useState(0);


    const nftList = nftDataList()
    

    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const iconNftType = (data: NftType) => {

        if (data == NftType.Audio) {
            return <AudioSvg className="l-6 w-8" alt="Audio" />
        } else if (data == NftType.Image) {
            return <ImageSvg className="l-6 w-8" />
        } else if (data == NftType.Domain) {
            return <DomainSvg className="l-6 w-8" />
        } else if (data == NftType.Other){
            return <OtherSvg className="l-6 w-8" />
        }

    }
    
    /* Ignore prefer constant declarations for flexible reassignment without state */
    /*eslint prefer-const:off*/
    const handleExpand = (nftData) => {
        let newExpandedRows = [...expandedRows];
        let index = _.findIndex(expandedRows, nftData);
        index > -1 ? newExpandedRows.splice(index, 1) : newExpandedRows.push(nftData);
        setExpandedRows(newExpandedRows);
    }

    const isExpanded = (nftData) => {
        return _.findIndex(expandedRows, nftData) > -1
    }

    const handleSearchText = (event) => {
        setSearchText(event.target.value.toLowerCase());
        setCurPage(0);
    }
    const filterNftType = (event) => {
        setFilterType(event.target.value);
        setCurPage(0);
    }
    const handleItemPerPage = (event) => {
        setItemPerPage(event.target.value);
    }

    const handleFirstPage = (event) => {
        setCurPage(0)
    }
    const handlePreviousPage = (event) => {
        if (curPage > 0)
            setCurPage(curPage - 1)
    }
    const handleNextPage = (event) => {
        if ( curPage < Math.ceil(total_count / itemPerPage)-1 ){
            setCurPage( curPage + 1 )
        }
    }
    const handleLastPage = (event) => {
        setCurPage( Math.ceil(total_count / itemPerPage)-1 );
    }

    const getRow = (data) => {
        let rows = [];
        let isExpan = _.findIndex(expandedRows, data) > -1;

        const firstRow = (<tr key={data.Name}>
            <td className="px-6 py-4 text-gray-900" >
                <div className="m-auto h-6 w-6 cursor-pointer" onClick={() => handleExpand(data)}>
                    {isExpan ? <MinusIcon /> : <PlusIcon />}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                {data.Name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                {data.Price}
            </td>
            <td className="px-6 py-1 whitespace-nowrap text-gray-900">
                {iconNftType(data.Type)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {data.Owner}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {data.Publisher}
            </td>
        </tr>)
        rows.push(firstRow);
        if (isExpan) {
            const expandedRow = (<tr key={data.Name + "_expanded"}>
                <td></td>
                <td colSpan={5} >
                    <div className="p-5 pl-10">
                        <img
                            className="inline-block w-20 h-20 rounded ring-2 ring-white"
                            src={data.image}
                            alt=""
                        />

                        <button type="button"
                            className="inline-flex justify-center item-center ml-10 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Purchase
                        </button>
                    </div>
                </td>
            </tr>);
            rows.push(expandedRow);
        }
        return rows;
    }

    const orderByDataList = (dataList, limit:number) => {

        let results = [];
        let orderData = _.orderBy(dataList, [orderBy], [order]);
        orderData.map((data,idx) => {
            if (searchText === "" ||
                _.includes(data.Name.toLowerCase(), searchText) ||
                _.includes(data.Publisher.toLowerCase(), searchText)
            ) {
                if (filterType === "All" || filterType === data.Type) {
                    total_count ++;
                    if (results.length == limit){
                        return;
                    }
                    if (idx < curPage * itemPerPage)
                        return;
                    results.push(getRow(data));
                }
            }
        });
        return results;
    }
    let total_count = 0;
    let orderList = orderByDataList(nftList, itemPerPage)

    return (
        <div className="flex flex-col">
            <div className="flex justify-between mb-3">
                <div className="flex items-end">
                    <label className="text-gray-800">Result Count: {total_count}</label>
                </div>
                <div className="flex">
                    <div className="items-center w-1/2 mr-3 mt-1 block w-full px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm flex">
                        <SearchIcon className="w-5 h-5 text-gray-500" />
                        <input
                            className="w-5/6  border-transparent focus:border-transparent focus:ring-0 focus:placeholder-gray-400 focus:outline-none"
                            type="text"
                            name="first-name"
                            id="first-name"
                            placeholder="Search Text"
                            autoComplete="off"
                            onChange={handleSearchText}
                        />
                    </div>

                    <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="w-1/2  mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={filterNftType}
                    >
                        <option>All</option>
                        <option>Image</option>
                        <option>Audio</option>
                        <option>Domain</option>
                        <option>Other</option>
                    </select>
                </div>
            </div>

            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-800 text-gray-200">
                                <tr>
                                    <th className="w-20"></th>
                                    {
                                        props.headCells.map(headCell => (

                                            <th key={headCell.id}
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                            >
                                                <div className="flex">
                                                    <div className="cursor-pointer" onClick={() => { handleRequestSort(headCell.id), setOrderBy(headCell.id) }}> {headCell.label}</div>
                                                    {
                                                        order === "asc" ?
                                                            <ArrowNarrowUpIcon className={`h-4 w-4 ${headCell.id === orderBy ? "visible" : "invisible"}`} />
                                                            :
                                                            <ArrowNarrowDownIcon className={`h-4 w-4 ${headCell.id === orderBy ? "visible" : "invisible"}`} />
                                                    }
                                                </div>
                                            </th>
                                        ))
                                    }
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    orderList
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="flex mt-3 justify-end h-10">
                        <div className="flex justify-between w-1/4 gap-2">
                            <div className={`w-1/5 p-1 cursor-pointer border-gray-300 bg-white rounded-md shadow-sm ${curPage === 0?"text-gray-200":"text-gray-700 hover:bg-gray-300"} `} onClick={handleFirstPage}><ChevronDoubleLeftIcon className="h-8 m-auto" /></div>
                            <div className={`w-1/5 p-1 cursor-pointer border-gray-300 bg-white rounded-md shadow-sm ${curPage === 0?"text-gray-200":"text-gray-700 hover:bg-gray-300"} `} onClick={handlePreviousPage}><ChevronLeftIcon className="h-8 m-auto"/></div>
                            <div className="w-1/5 text-gray-700  items-center flex" ><span className="w-full text-center">{total_count == 0 ? 0 : curPage+1}/{Math.ceil(total_count/itemPerPage)}</span></div>
                            <div className={`w-1/5 p-1 cursor-pointer border-gray-300 bg-white rounded-md shadow-sm ${total_count == 0 || curPage === Math.ceil(total_count/itemPerPage)-1?"text-gray-200":"text-gray-700 hover:bg-gray-300"} `} onClick={handleNextPage}><ChevronRightIcon className="h-8 m-auto"/></div>
                            <div className={`w-1/5 p-1 cursor-pointer border-gray-300 bg-white rounded-md shadow-sm ${total_count == 0 || curPage === Math.ceil(total_count/itemPerPage)-1?"text-gray-200":"text-gray-700 hover:bg-gray-300"} `} onClick={handleLastPage}><ChevronDoubleRightIcon className="h-8 m-auto"/></div>
                        </div>
                        <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className=" w-20 ml-5 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={handleItemPerPage}
                        >
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NftTable;