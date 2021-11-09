import type { NextPage } from 'next';
import NftTable from '@/components/NftTable';
import Layout from '@/components/DefaultLayout';
import { gql, useQuery } from '@apollo/client';
import {SearchIcon} from "@heroicons/react/solid";
import React, {useState} from "react";

const GET_NFTS = () => {
  return gql`
    query NFTS {
      nfts {
        nftId
        owner
        symbol
        pricing
        dataType
        publisher
        image
        name
      }
    }
  `;
};

const headCells = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'pricing',
    label: 'Price(UST)',
  },
  {
    id: 'dataType',
    label: 'Type',
  },
  {
    id: 'owner',
    label: 'Owner',
  },
  {
    id: 'publisher',
    label: 'Publisher',
  },
];

const dataList ={nfts: [
  {
    dataType: "Video",
    image: "https://mypass.ace-energy.co.th/asset/img/avatar.jpg",
    name:" token_name",
    nftId:" token_id1",
    owner:"terra1qqhd8edcc590tdvy7zhhjt62e2gs49wcl22xaq",
    pricing:"100",
    publisher:"terra1qqhd8edcc590tdvy7zhhjt62e2gs49wcl22xaq",
    symbol: "TOK"
  },
  {
    dataType: "Audio",
    image: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
    name:" token_name2",
    nftId:" token_id2",
    owner:"terra1aqhd8edcc590tdvy7zhhjt62e2gs49wcl22xaq",
    pricing:"102",
    publisher:"terra1qqhd8edcc590tdvy7zhhjt62e2gs49wcl22xaq",
    symbol: "TOK"
  }
  ]
}


const MarketPlace: NextPage = () => {
  // const { data } = useQuery(GET_NFTS(), {
  //   pollInterval: 5000,
  //   variables: {},
  // });
  const data = dataList;
  const searchText = React.useRef(null)
  const filterNftType = React.useRef(null)
  const minPrice = React.useRef(null)
  const maxPrice = React.useRef(null)

  return (
    <Layout title="Marketplace">
      <div className="flex justify-between">
        <h1 className="text-3xl text-gray-500 font-medium">Marketplace</h1>
        <div className="flex">
          <div className="items-center mr-3 pl-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm flex">
            <SearchIcon className="w-5 h-5 text-gray-500" />
            <input
                className="w-5/6  border-transparent focus:border-transparent focus:ring-0 focus:placeholder-gray-400 focus:outline-none"
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Search Marketplace"
                autoComplete="off"
                onChange={(event)=>searchText.current(event)}
            />
          </div>
          <select
              id="country"
              name="country"
              aria-label="nft-type"
              autoComplete="country-name"
              className="text-gray-500 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(event)=>filterNftType.current(event)}
          >
            <option value="All">All types</option>
            <option>Image</option>
            <option>Video</option>
            <option>Audio</option>
            <option>Domain</option>
            <option>Json</option>
            <option>Other</option>
          </select>

          <div className="flex flex-col pl-3 text-gray-500 text-sm">
            <div>Minium Price</div>
            <div>
              <input
                  type="text"
                  aria-label="minimum-price"
                  className="rounded-md border-gray-300 py-1 w-20 text-sm"
                  autoComplete="off"
                  onChange={(event)=>minPrice.current(event)}
              />
            </div>
          </div>
          <div className="flex flex-col pl-3 text-gray-500 text-sm">
            <div>Maxium Price</div>
            <div>
              <input
                  type="text"
                  aria-label="maximum-price"
                  className="rounded-md border-gray-300 py-1 w-20 text-sm"
                  autoComplete="off"
                  onChange={(event)=>maxPrice.current(event)}
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4"/>
      {data && <NftTable headCells={headCells} dataList={data.nfts} searchText={searchText} filterNftType={filterNftType} minPrice={minPrice} maxPrice={maxPrice} />}
    </Layout>
  );
};

export default MarketPlace;
