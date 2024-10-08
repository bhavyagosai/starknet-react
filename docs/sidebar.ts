import { type Sidebar } from "vocs";

export const sidebar = {
  "/docs/": [
    {
      text: "Introduction",
      items: [
        {
          text: "Getting Started",
          link: "/docs/getting-started",
        },
        {
          text: "Upgrading to V3",
          link: "/docs/upgrading-to-v3",
        },
      ],
    },
    {
      text: "Hooks",
      items: [
        { text: "useAccount", link: "/docs/hooks/use-account" },
        {
          text: "useAddChain",
          link: "/docs/hooks/use-add-chain",
        },
        {
          text: "useBalance",
          link: "/docs/hooks/use-balance",
        },
        {
          text: "useBlock",
          link: "/docs/hooks/use-block",
        },
        {
          text: "useBlockNumber",
          link: "/docs/hooks/use-block-number",
        },
        {
          text: "useCall",
          link: "/docs/hooks/use-call",
        },
        {
          text: "useConnect",
          link: "/docs/hooks/use-connect",
        },
        {
          text: "useContract",
          link: "/docs/hooks/use-contract",
        },
        {
          text: "useContractFactory",
          link: "/docs/hooks/use-contract-factory",
        },
        {
          text: "useDeclareContract",
          link: "/docs/hooks/use-declare-contract",
        },
        {
          text: "useDeployAccount",
          link: "/docs/hooks/use-deploy-account",
        },
        {
          text: "useDisconnect",
          link: "/docs/hooks/use-disconnect",
        },
        {
          text: "useEstimateFees",
          link: "/docs/hooks/use-estimate-fees",
        },
        {
          text: "useExplorer",
          link: "/docs/hooks/use-explorer",
        },
        {
          text: "useInvalidateOnBlock",
          link: "/docs/hooks/use-invalidate-on-block",
        },
        {
          text: "useNetwork",
          link: "/docs/hooks/use-network",
        },
        {
          text: "useNonceForAddress",
          link: "/docs/hooks/use-nonce-for-address",
        },
        {
          text: "useProvider",
          link: "/docs/hooks/use-provider",
        },
        {
          text: "useReadContract",
          link: "/docs/hooks/use-read-contract",
        },
        {
          text: "useSendTransaction",
          link: "/docs/hooks/use-send-transaction",
        },
        {
          text: "useSignTypedData",
          link: "/docs/hooks/use-sign-typed-data",
        },
        {
          text: "useStarkAddress",
          link: "/docs/hooks/use-stark-address",
        },
        {
          text: "useStarkName",
          link: "/docs/hooks/use-stark-name",
        },
        {
          text: "useStarkProfile",
          link: "/docs/hooks/use-stark-profile",
        },
        {
          text: "useSwitchChain",
          link: "/docs/hooks/use-switch-chain",
        },
        {
          text: "useTransactionReceipt",
          link: "/docs/hooks/use-transaction-receipt",
        },
        {
          text: "useWalletRequest",
          link: "/docs/hooks/use-wallet-request",
        },
      ],
    },
  ],
} as const satisfies Sidebar;
