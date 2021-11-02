import type { NextPage } from 'next';
import Layout from '@/components/DefaultLayout';
import MissionLayout from '@/components/Mission/index';

const Missions: NextPage = () => {
  return (
    <Layout title="My missions" currentNavIndex="2">
      <MissionLayout />
    </Layout>
  );
};

export default Missions;
