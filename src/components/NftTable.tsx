import React from 'react';
import _ from 'lodash';

import {
  ArrowNarrowUpIcon,
  ArrowNarrowDownIcon,
  SearchIcon,
  ChevronLeftIcon,
  ChevronDoubleLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/solid';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import AudioSvg from '@/assets/audio.svg';
import ImageSvg from '@/assets/image.svg';
import DomainSvg from '@/assets/domain.svg';
import OtherSvg from '@/assets/other.svg';
import PlusIcon from '@/assets/plus-rounded.svg';
import MinusIcon from '@/assets/minus.svg';
import VideoSvg from '@/assets/video.svg';
import JsonSvg from '@/assets/json.svg';

import {formatAddressShort} from "@/utils/address";

// interface Item {
//   Name: string;
//   Price: number;
//   Type: number;
//   Owner: string;
//   Publisher: string;
// }

enum NftType {
  Image = 'Image',
  Audio = 'Audio',
  Video = 'Video',
  Json = 'Json',
  Domain = 'Domain',
  Other = 'Other',
}

const NftTable = (props) => {
  const [order, setOrder] = React.useState(0);
  const [orderBy, setOrderBy] = React.useState('item');
  const [expandedRows, setExpandedRows] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  const [filterType, setFilterType] = React.useState('All');
  const [filterMinPrice, setFilterMinPrice] = React.useState(0);
  const [filterMaxPrice, setFilterMaxPrice] = React.useState(0);

  const [itemPerPage, setItemPerPage] = React.useState(25);
  const [curPage, setCurPage] = React.useState(0);

  React.useEffect(()=>{
    props.searchText.current = handleSearchText;
    props.filterNftType.current = filterNftType;
    props.minPrice.current = handleMinPrice;
    props.maxPrice.current = handleMaxPrice;
  })

  const handleRequestSort = (property) => {
    if (order === 0){
      setOrder(1);
      setOrderBy(property);
    }
    else if (order === 1){
      setOrder(2);
      setOrderBy(property);
    }else{
      setOrder(0);
      setOrderBy("");
    }
  };

  const iconNftType = (data: NftType) => {
    if (data == NftType.Audio) {
      return <AudioSvg className="l-6 w-8" alt="Audio" />;
    } else if (data == NftType.Image) {
      return <ImageSvg className="l-6 w-8" />;
    }else if (data == NftType.Video) {
      return <VideoSvg className="l-6 w-8 mt-2" />;
    }else if (data == NftType.Json) {
      return <JsonSvg className="l-6 w-8" />;
    }
    else if (data == NftType.Domain) {
      return <DomainSvg className="l-6 w-8" />;
    } else if (data == NftType.Other) {
      return <OtherSvg className="l-6 w-8" />;
    }
  };
  const nftTypeName = (data: NftType):string=>{
    if (data == NftType.Audio) {
      return "Audio";
    } else if (data == NftType.Image) {
      return "Digital Art";
    } else if (data == NftType.Video) {
      return "Video";
    } else if (data == NftType.Json) {
      return "JSON";
    } else if (data == NftType.Domain) {
      return "Domain name";
    } else if (data == NftType.Other) {
      return "Other";
    }
  }



  /* Ignore prefer constant declarations for flexible reassignment without state */
  /*eslint prefer-const:off*/
  const handleExpand = (nftData) => {
    let newExpandedRows = [...expandedRows];
    let index = _.findIndex(expandedRows, nftData);
    index > -1
      ? newExpandedRows.splice(index, 1)
      : newExpandedRows.push(nftData);
    setExpandedRows(newExpandedRows);
  };

  const handleExpandAll = ()=>{

    let newExpandedRows = [];
    _.forEach(props.dataList, (value)=>{
      newExpandedRows.push(value);
    })
    setExpandedRows(newExpandedRows);

  }

  const handleSearchText = (event) => {
    setSearchText(event.target.value.toLowerCase());
    setCurPage(0);
  };
  const filterNftType = (event) => {
    setFilterType(event.target.value);
    setCurPage(0);
  };
  const handleMinPrice = (event) =>{
    const min = parseFloat(event.target.value);
    if (!Number.isNaN(min)){
      setFilterMinPrice(min);
    }else{
      setFilterMinPrice(0);
    }
  };
  const handleMaxPrice = (event) =>{
    const max =  parseFloat(event.target.value);
    if (!Number.isNaN(max)){
      setFilterMaxPrice(max);
    }else{
      setFilterMaxPrice(0);
    }

  };

  const handleItemPerPage = (event) => {
    setItemPerPage(event.target.value);
  };

  const handleFirstPage = (event) => {
    setCurPage(0);
  };
  const handlePreviousPage = (event) => {
    if (curPage > 0) setCurPage(curPage - 1);
  };
  const handleNextPage = (event) => {
    if (curPage < Math.ceil(total_count / itemPerPage) - 1) {
      setCurPage(curPage + 1);
    }
  };
  const handleLastPage = (event) => {
    setCurPage(Math.ceil(total_count / itemPerPage) - 1);
  };


  const getRow = (data) => {
    let rows = [];
    let isExpan = _.findIndex(expandedRows, data) > -1;

    const firstRow = (
      <tr key={data.name} className={isExpan?"bg-gray-200":""}>
        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
          {data.name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
          {data.pricing}
        </td>
        <td className="px-6 py-1 whitespace-nowrap text-gray-500">
          <div className="flex items-center">
            <div>{iconNftType(data.dataType)}</div>
            <div className="pl-2"> {nftTypeName(data.dataType)}</div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {formatAddressShort(data.owner)}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {data.publisher}
        </td>
        <td className="px-6 py-4 text-gray-500">
          <div
              className="float-right h-6 w-6 cursor-pointer"
              onClick={() => handleExpand(data)}
          >
            {isExpan ? <MinusIcon /> : <PlusIcon/>}
          </div>
        </td>
      </tr>
    );
    rows.push(firstRow);
    if (isExpan) {
      const expandedRow0 = (
        <tr key={data.name + '_expanded0'} className="bg-gray-200 text-gray-500">
          <td rowSpan={2} className="align-top">
            {data.dataType == "Audio"?
                (
                    <div className="pl-5 pt-5">
                    <AudioPlayer
              src={data.image}
              onPlay={e => console.log("onPlay")}
              className="pt-4"
              // other props here
                    /></div>
                )
                :
                (<img
                className="inline-block w-20 h-20 rounded ring-2 ring-white m-6"
                src={data.image}
                alt=""
            />)
            }
          </td>
          <td colSpan={2} className="align-top">
            <div className="flex flex-col p-4 text-sm">
              <div className="mt-2 font-bold">Description</div>
              <div className="mt-2">Vastness is bearable only  through love hearts of the stars rich in heavy atoms dream of the mind&apos;s eye kindling the energy hidden in matter rich in heavy atoms and billions upon billions.</div>
              <div className="mt-10 font-bold">About the Author</div>
              <div className="mt-2">Rich in heavy atoms dream of the mind&apos;s eye kindling the energy hidden in mater rich in heavy.</div>
            </div>
          </td>
          <td className="align-top">
            <div className="flex flex-col p-4 text-sm">
              <div className="mt-2 font-bold">Royalities</div>
              <div className="mt-2 text-sm">5%</div>
            </div>
          </td>
          <td className="align-top">
            <div className="flex flex-col p-4 text-sm">
              <div className="mt-2 font-bold">Taxes</div>
              <div className="mt-2 text-sm">2.50USDT</div>
            </div>
          </td>
          <td className="align-top">
            <div className="float-right mr-4 mt-4">
            <button
                type="button"
                className="inline-flex justify-center item-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Purchase
            </button>
            </div>
          </td>

        </tr>
      );
      const expandedRow1 = (
          <tr key={data.name + '_expanded1'} className="bg-gray-200 text-gray-500">
            <td>
              <div className="flex flex-col p-4  text-sm">
                <div className="mt-2 font-bold  font-small">Contract Address</div>
                <div className="mt-2 text-blue-500">terra1a99...313s</div>
              </div>
            </td>
            <td>
              <div className="flex flex-col p-4  text-sm">
                <div className="mt-2 font-bold">Token ID</div>
                <div className="mt-2">9921830918...</div>
              </div>
            </td>
            <td>
              <div className="flex flex-col p-4  text-sm">
                <div className="mt-2 font-bold">Token Standard</div>
                <div className="mt-2">ERC-0000</div>
              </div>
            </td>
            <td>
              <div className="flex flex-col p-4  text-sm">
                <div className="mt-2 font-bold">Block chain</div>
                <div className="mt-2">Terra</div>
              </div>
            </td>
            <td>
              <div className="flex flex-col p-4  text-sm">
                <div className="mt-2 font-bold">Metadata</div>
                <div className="mt-2">Editable</div>
              </div>
            </td>
          </tr>
      );
      rows.push(expandedRow0);
      rows.push(expandedRow1);
    }
    return rows;
  };

  const orderByDataList = (dataList, limit: number) => {
    let results = [];
    let orderData;
    if( order == 0 ){
      orderData = dataList;
    }else{
      orderData = _.orderBy(dataList, [orderBy], [order==1?'asc':'desc']);
    }

    orderData.map((data, idx) => {
      if (
        searchText === '' ||
        _.includes(data.name.toLowerCase(), searchText) ||
        _.includes(data.publisher.toLowerCase(), searchText)
      ) {
        if (filterMaxPrice > 0 && data.pricing >filterMaxPrice)
           return;
        if(filterMinPrice >0 && data.pricing < filterMinPrice)
          return;


        if (filterType === 'All' || filterType === data.dataType) {
          total_count++;
          if (results.length == limit) {
            return;
          }
          if (idx < curPage * itemPerPage) return;
          results.push(getRow(data));
        }
      }
    });
    return results;
  };
  let total_count = 0;
  let orderList = orderByDataList(props.dataList, itemPerPage);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-3">
        <div className="flex items-center">
          <div className="text-gray-500">Results: {total_count}</div>
          <div className="text-gray-500" >
          <select
              id="country"
              name="country"
              aria-label="country"
              autoComplete="country-name"
              className="ml-5 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
              onChange={handleItemPerPage}
          >
            <option value="25">25 per page</option>
            <option value="50">50 per page</option>
            <option value="100">100 per page</option>
          </select>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex">
            <div className="flex justify-between gap-2">
              <div
                  className={`p-1 cursor-pointer border-gray-300 bg-white rounded-md shadow-sm ${
                      curPage === 0
                          ? 'text-gray-200'
                          : 'text-gray-700 hover:bg-gray-300'
                  } `}
                  onClick={handleFirstPage}
              >
                <ChevronDoubleLeftIcon className="h-8 m-auto" />
              </div>
              <div
                  className={`p-1 cursor-pointer border-gray-300 bg-white rounded-md shadow-sm ${
                      curPage === 0
                          ? 'text-gray-200'
                          : 'text-gray-700 hover:bg-gray-300'
                  } `}
                  onClick={handlePreviousPage}
              >
                <ChevronLeftIcon className="h-8 m-auto" />
              </div>
              <div className="text-gray-500  items-center flex p-2">
                  <span className="w-full text-center">page {total_count == 0 ? 0 : curPage + 1}/{Math.ceil(total_count / itemPerPage)}
                  </span>
              </div>
              <div
                  className={`p-1 cursor-pointer border-gray-300 bg-white rounded-md shadow-sm ${
                      total_count == 0 ||
                      curPage === Math.ceil(total_count / itemPerPage) - 1
                          ? 'text-gray-200'
                          : 'text-gray-700 hover:bg-gray-300'
                  } `}
                  onClick={handleNextPage}
              >
                <ChevronRightIcon className="h-8 m-auto" />
              </div>
              <div
                  className={`p-1 cursor-pointer border-gray-300 bg-white rounded-md shadow-sm ${
                      total_count == 0 ||
                      curPage === Math.ceil(total_count / itemPerPage) - 1
                          ? 'text-gray-200'
                          : 'text-gray-700 hover:bg-gray-300'
                  } `}
                  onClick={handleLastPage}
              >
                <ChevronDoubleRightIcon className="h-8 m-auto" />
              </div>
            </div>
            <div className="ml-2 flex items-center">
              <button type="button" onClick={handleExpandAll} className="inline-flex justify-center item-center py-2 px-4 border border-gray-700 shadow-sm text-sm font-medium rounded-md text-gray-700 ">Expand all listings</button>
            </div>
          </div>
        </div>
      </div>

      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-800 text-gray-200">
                <tr>
                  {props.headCells.map((headCell) => (
                    <th
                      key={headCell.id}
                      scope="col"
                      className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider"
                    >
                      <div className="flex">
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            handleRequestSort(headCell.id)
                          }}
                        >
                          {' '}
                          {headCell.label}
                        </div>
                        {
                          order === 1 && headCell.id === orderBy?(
                              <ArrowNarrowUpIcon
                                  className={`cursor-pointer h-4 w-4 text-gray-200 `}
                                  onClick={() => {
                                      handleRequestSort(headCell.id)
                                    }
                                  }
                              />
                          ):( order === 2 && headCell.id === orderBy?(
                                <ArrowNarrowDownIcon
                                    className={`cursor-pointer h-4 w-4 text-gray-200`}
                                    onClick={() => {
                                      handleRequestSort(headCell.id)
                                     }
                                    }
                                />
                            ):(
                                <ArrowNarrowUpIcon
                                    className={`cursor-pointer h-4 w-4 text-gray-500`}
                                    onClick={() => {
                                      handleRequestSort(headCell.id)
                                      }
                                    }
                                />
                            )
                          )
                        }
                      </div>
                    </th>
                  ))}
                  <th className="w-20"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-300">
                {orderList}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};
export default NftTable;
