import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.23",
    settings: {
      evmVersion: "shanghai",
      optimizer:{
        enabled: true,
        runs: 200,
      }
    },
  },
  networks:{
    hardhat:{
      chainId: 1337,
      initialBaseFeePerGas: 0,
    }
  }
};

export default config;
