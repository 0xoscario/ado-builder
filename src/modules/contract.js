import React from "react";

/* References for Andromeda Contract Functions

Andromeda Factory
===================================
create(name, symbol,?)
token_creation(symbol, creator)
update_address(symbol, new_address)

MintLog (token_id, owner)
TransferLog(tokenID, from, to)
BurnLog(token_id, burner)
ArchiveLog(token_id, archiver)
Whitelisting(address, whitelister, whitelisted)


Andromeda Token
===================================
Mint(msg)
TransferNFT(recipient, token_id)
SendNFT(contract, token_id,msg)
Approve(spender, expires, token_id
Revoke(spender, token_id)
ApproveAll(operator, expires)
RevokeAll(operator)
TransferAgreement(token_id, denim, amount, purchaser)
Whitelist(address, whitelisted)
Blacklist(address, blacklisted)

*/


class ADPContract {
    api;
    deployed = observable(false);

    constructor() {
        this.init();
    }

    init = async () => {
        const isDeployed = await this.isDeployed();
        this.deployed.update(() => isDeployed);
    };

    isDeployed = async () => {
        const res = await api.get("/deploy");

        return res.data;
    };

    deploy = async () => {
        const res = await api.post("/deploy");
        this.deployed.update(() => true);
        return res;
    };
}
  
  const contract = new ADPContract();
  
  export default contract;
  