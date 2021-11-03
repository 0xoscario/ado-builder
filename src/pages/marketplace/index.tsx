import type { NextPage } from 'next';
import NftTable from '@/components/NftTable';
import Layout from '@/components/DefaultLayout';
import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache
  } from "@apollo/client";

// import testNftDataList from '@/assets/MarketplaceData.json';
// import nftDataList  from '../api/nft-list';
const headCells = [
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


const MarketPlace: NextPage = () => {    
    const client = new ApolloClient({
        uri: 'https://graphql.andromedaprotocol.io:8080',
        cache: new InMemoryCache()
    });
    console.log(client);

    return (
        <ApolloProvider client={client}>            
            <Layout title="Marketpalce" currentNavIndex="1" >
                <NftTable headCells={headCells} />            
            </Layout>
        </ApolloProvider>
    )
}

export default MarketPlace;