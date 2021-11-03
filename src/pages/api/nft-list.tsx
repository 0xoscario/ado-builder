import { gql, useQuery } from '@apollo/client';

const nftDataList = ()=>{
    const GET_NFT_LIST = gql`
        query GetNftList {
            nfts{
                nftId
                name
                owner                
                symbol
                pricing
                dataType
                publisher
                image
            }
        }
    `;    

    const { loading, error, data } = useQuery(GET_NFT_LIST, {});

    if (loading) return null;
    if (error) return `Error! ${error}`;
    
    var rows = [];
    data.nfts.map((nft, idx)=>{
        rows.push({"Name":nft.name,"Price":nft.pricing,"Type":nft.dataType,"Owner":nft.owner,"Publisher":nft.publisher,"image":nft.image})
    });
    
    return (
        rows        
    )
}

export default nftDataList;


