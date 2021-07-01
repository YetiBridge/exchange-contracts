require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('hardhat-deploy');
require("@nomiclabs/hardhat-web3");
require('hardhat-spdx-license-identifier');


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.16"
      },
      {
        version: "0.6.2"
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      },
      {
        version: "0.7.0"
      },
      {
        version: "0.8.0"
      }
    ]
    
  },
  spdxLicenseIdentifier: {
    overwrite: true,
    runOnCompile: true,
  },
  paths: {
    sources: "./src",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
    deploy: "./deploy2",
  },
  mocha: {
    timeout: 20000
  },
  networks: {
    hardhat: {
      gasPrice: 470000000000,
      chainId: 43112,
      initialDate: "2020-10-10",
    },
    avash: {
      url: 'http://localhost:9650/ext/bc/C/rpc',
      gasPrice: 470000000000,
      chainId: 43112,
      accounts: ["0xb8e14836c99d84cf5d4e9463747dd9a4cfb86bf85e9149ce48a99e987e476570"]
    },
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 470000000000,
      chainId: 43113,
      accounts: ["0xb8e14836c99d84cf5d4e9463747dd9a4cfb86bf85e9149ce48a99e987e476570"]
    },
    mainnet: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 470000000000,
      chainId: 43114,
      accounts: ["0xb8e14836c99d84cf5d4e9463747dd9a4cfb86bf85e9149ce48a99e987e476570"]
    },
  }
};

// module.exports = {
//   defaultNetwork: "rinkeby",
//   networks: {
//     hardhat: {
//     },
//     rinkeby: {
//       url: "https://eth-mainnet.alchemyapi.io/v2/123abc123abc123abc123abc123abcde",
//       accounts: [privateKey1, privateKey2, ...]
//     }
//   },
//   solidity: {
//     version: "0.5.15",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200
//       }
//     }
//   },
//   paths: {
//     sources: "./contracts",
//     tests: "./test",
//     cache: "./cache",
//     artifacts: "./artifacts"
//   },
//   mocha: {
//     timeout: 20000
//   }
// }