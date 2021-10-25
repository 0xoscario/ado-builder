import type { NextPage } from 'next';
import NftTable from '@/components/NftTable';
import Layout from '@/components/DefaultLayout';

import testNftDataList from '@/assets/MarketplaceData.json';

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

    return (
        <Layout title="Marketpalce" currentNavIndex="1" >
            <NftTable dataList={testNftDataList} headCells={headCells} />
        </Layout>
    )
}

export default MarketPlace;