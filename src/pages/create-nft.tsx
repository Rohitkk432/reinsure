import type { NextPageWithLayout } from '@/types';
import { NextSeo } from 'next-seo';
import RootLayout from '@/layouts/_root-layout';
import CreateNFT from '@/components/create-nft/create-nft';

const CreateNFTPage: NextPageWithLayout = () => {
  // render default create NFT component
  return (
    <>
      <NextSeo title="Create NFT" description="ReInsure" />
      <CreateNFT />
    </>
  );
};

CreateNFTPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default CreateNFTPage;
