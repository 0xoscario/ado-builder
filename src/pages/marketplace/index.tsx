import type { NextPage } from 'next';
import NftTable from '@/components/NftTable';
import Layout from '@/components/DefaultLayout';
import { gql, useQuery } from '@apollo/client';

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
  const { data } = useQuery(GET_NFTS(), {
    pollInterval: 5000,
    variables: {},
  });

  return (
    <Layout title="Marketplace">
      {data && <NftTable headCells={headCells} dataList={data.nfts} />}
    </Layout>
  );
};

export default MarketPlace;
