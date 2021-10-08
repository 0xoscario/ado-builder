import type { NextPage } from 'next';

import Layout from '@/components/DefaultLayout';

const NFT: NextPage = () => {
  return (
    <Layout title="Andromeda">
      <section className="text-gray-600">
        <div className="container mx-auto">
          <div className="flex flex-col text-center w-full mt-4 mb-8">
            <h1 className="sm:text-2xl text-xl font-medium title-font text-gray-900 py-8">
              NFT Collectible
            </h1>
            <p>Configure draft of your NFT.</p>
          </div>
          <div className="flex flex-wrap -m-4"></div>
        </div>
      </section>
    </Layout>
  );
};

export default NFT;
