
require("@nomiclabs/hardhat-waffle");

//exporta la configuracion 
module.exports = {
  solidity: "0.8.0",
  networks : {
    ropsten : {
      url:"https://eth-ropsten.alchemyapi.io/v2/DjT-GXAcNRhz65tsUXrYCi_K7G2c71lR",
      accounts:["f1ba7f40047cb9acfa36950e167158e188c1ea6234c46a79e430d976d3756ee7"]
    }
  }
};
