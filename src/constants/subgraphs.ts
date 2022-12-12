interface Subgraphs {
  [key: string]: {
    [key: number]: string;
  };
}

export const subgraphs: Subgraphs = {
  dao: {
    1: "https://api.thegraph.com/subgraphs/name/nerderlyne/kali-mainnet",
    42161: "https://api.thegraph.com/subgraphs/name/nerderlyne/kali-arbitrum",
    137: "https://api.thegraph.com/subgraphs/name/nerderlyne/kali-matic",
    10: "https://api.thegraph.com/subgraphs/name/nerderlyne/kali-optimism",
    5: "https://api.thegraph.com/subgraphs/name/nerderlyne/kali-goerli",
    100: "https://api.thegraph.com/subgraphs/name/nerderlyne/kali-gnosis",
    4: "https://api.thegraph.com/subgraphs/name/nerderlyne/kali-rinkeby",
  },
  wrappr: {
    1: "https://api.thegraph.com/subgraphs/name/nerderlyne/wrappr-mainnet",
    42161: "https://api.thegraph.com/subgraphs/name/nerderlyne/wrappr-arbitrum",
    4: "https://api.thegraph.com/subgraphs/name/nerderlyne/wrappr-rinkeby",
    137: "https://api.thegraph.com/subgraphs/name/nerderlyne/wrappr-matic",
    10: "https://api.thegraph.com/subgraphs/name/nerderlyne/wrappr-optimism",
    5: "https://api.thegraph.com/subgraphs/name/nerderlyne/wrappr-goerli",
  },
};
