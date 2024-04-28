/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { MusicShop, MusicShopInterface } from "../../contracts/MusicShop";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "uid",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "customer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "AlbumBought",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "albumUid",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "customer",
        type: "address",
      },
    ],
    name: "OrderDelivered",
    type: "event",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "uid",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "addAlbum",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "albums",
    outputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "uid",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "allAlbums",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "uid",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
        ],
        internalType: "struct MusicShop.Album[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentOrderId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "delivered",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "orders",
    outputs: [
      {
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "albumUid",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "customer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "orderedAt",
        type: "uint256",
      },
      {
        internalType: "enum MusicShop.OrderStatus",
        name: "status",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561000f575f80fd5b50604051610f1c380380610f1c83398101604081905261002e91610053565b600480546001600160a01b0319166001600160a01b0392909216919091179055610080565b5f60208284031215610063575f80fd5b81516001600160a01b0381168114610079575f80fd5b9392505050565b610e8f8061008d5f395ff3fe608060405260043610610094575f3560e01c8063925931fc11610058578063925931fc14610227578063a85c38ef1461023c578063d96a094a1461026c578063ea5df0591461027f578063ec34297a146102af576100fe565b806301ffc9a71461014a57806326987b601461018f5780634b5e4108146101b25780636526deb1146101d15780638da5cb5b146101f0576100fe565b366100fe5760405162461bcd60e51b815260206004820152602f60248201527f506c656173652075736520746865206275792066756e6374696f6e20746f207060448201526e7572636861736520616c62756d732160881b60648201526084015b60405180910390fd5b348015610109575f80fd5b506101485f368080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506102d092505050565b005b348015610155575f80fd5b5061017a610164366004610a64565b6001600160e01b0319166301ffc9a760e01b1490565b60405190151581526020015b60405180910390f35b34801561019a575f80fd5b506101a460025481565b604051908152602001610186565b3480156101bd575f80fd5b506101486101cc366004610a92565b610316565b3480156101dc575f80fd5b506101486101eb366004610aa9565b610431565b3480156101fb575f80fd5b5060045461020f906001600160a01b031681565b6040516001600160a01b039091168152602001610186565b348015610232575f80fd5b506101a460035481565b348015610247575f80fd5b5061025b610256366004610a92565b610548565b604051610186959493929190610b40565b61014861027a366004610a92565b610594565b34801561028a575f80fd5b5061029e610299366004610a92565b6107e1565b604051610186959493929190610bd3565b3480156102ba575f80fd5b506102c36108a7565b6040516101869190610c05565b610313816040516024016102e49190610c9a565b60408051601f198184030181529190526020810180516001600160e01b03166305f3bfab60e11b179052610a41565b50565b6004546001600160a01b031633146103605760405162461bcd60e51b815260206004820152600d60248201526c6e6f7420616e206f776e65722160981b60448201526064016100f5565b5f6001828154811061037457610374610cac565b5f918252602090912060059091020190506001600482015460ff1660018111156103a0576103a0610b2c565b036103de5760405162461bcd60e51b815260206004820152600e60248201526d696e76616c69642073746174757360901b60448201526064016100f5565b60048101805460ff191660019081179091556002820154908201546040516001600160a01b03909216917f5bb66d85e0b78294f5d62dcc373c22e3d67e643b319cba2fba58c8180008220b905f90a35050565b6004546001600160a01b0316331461047b5760405162461bcd60e51b815260206004820152600d60248201526c6e6f7420616e206f776e65722160981b60448201526064016100f5565b5f6040518060a00160405280600254815260200187815260200186868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920182905250938552505050602080830187905260409283018690528454600181810187559583529181902084516005909302019182558301519381019390935581015190919060028201906105169082610d58565b506060820151600382015560809091015160049091015560028054905f61053c83610e2c565b91905055505050505050565b60018181548110610557575f80fd5b5f9182526020909120600590910201805460018201546002830154600384015460049094015492945090926001600160a01b039091169160ff1685565b5f8082815481106105a7576105a7610cac565b905f5260205f2090600502019050806003015434146105f85760405162461bcd60e51b815260206004820152600d60248201526c696e76616c696420707269636560981b60448201526064016100f5565b5f81600401541161063b5760405162461bcd60e51b815260206004820152600d60248201526c6f7574206f662073746f636b2160981b60448201526064016100f5565b600481018054905f61064c83610e44565b90915550506040805160a0810182526003548152600183810154602083019081523393830193845242606084019081525f608085018181528454808601865591859052855160059092027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6810192835593517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf785015595517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf8840180546001600160a01b039092166001600160a01b031990921691909117905590517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf983015593517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfa90910180549394939192909160ff191690838181111561079157610791610b2c565b0217905550506003805491505f6107a783610e2c565b90915550506001810154604051429133917f428114751c1b5d2334d5f2464a79219ffc3a15d4a23042756994f6337fdccc17905f90a45050565b5f81815481106107ef575f80fd5b905f5260205f2090600502015f91509050805f01549080600101549080600201805461081a90610cd4565b80601f016020809104026020016040519081016040528092919081815260200182805461084690610cd4565b80156108915780601f1061086857610100808354040283529160200191610891565b820191905f5260205f20905b81548152906001019060200180831161087457829003601f168201915b5050505050908060030154908060040154905085565b5f80546060918167ffffffffffffffff8111156108c6576108c6610cc0565b60405190808252806020026020018201604052801561092857816020015b6109156040518060a001604052805f81526020015f8019168152602001606081526020015f81526020015f81525090565b8152602001906001900390816108e45790505b5090505f5b82811015610a3a575f818154811061094757610947610cac565b905f5260205f2090600502016040518060a00160405290815f82015481526020016001820154815260200160028201805461098190610cd4565b80601f01602080910402602001604051908101604052809291908181526020018280546109ad90610cd4565b80156109f85780601f106109cf576101008083540402835291602001916109f8565b820191905f5260205f20905b8154815290600101906020018083116109db57829003601f168201915b5050505050815260200160038201548152602001600482015481525050828281518110610a2757610a27610cac565b602090810291909101015260010161092d565b5092915050565b610313815f6a636f6e736f6c652e6c6f6790505f80835160208501845afa505050565b5f60208284031215610a74575f80fd5b81356001600160e01b031981168114610a8b575f80fd5b9392505050565b5f60208284031215610aa2575f80fd5b5035919050565b5f805f805f60808688031215610abd575f80fd5b85359450602086013567ffffffffffffffff80821115610adb575f80fd5b818801915088601f830112610aee575f80fd5b813581811115610afc575f80fd5b896020828501011115610b0d575f80fd5b9699602092909201985095966040810135965060600135945092505050565b634e487b7160e01b5f52602160045260245ffd5b858152602081018590526001600160a01b03841660408201526060810183905260a0810160028310610b8057634e487b7160e01b5f52602160045260245ffd5b8260808301529695505050505050565b5f81518084525f5b81811015610bb457602081850181015186830182015201610b98565b505f602082860101526020601f19601f83011685010191505092915050565b85815284602082015260a060408201525f610bf160a0830186610b90565b606083019490945250608001529392505050565b5f60208083018184528085518083526040925060408601915060408160051b8701018488015f5b83811015610c8c57603f19898403018552815160a0815185528882015189860152878201518189870152610c6282870182610b90565b60608481015190880152608093840151939096019290925250509386019390860190600101610c2c565b509098975050505050505050565b602081525f610a8b6020830184610b90565b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52604160045260245ffd5b600181811c90821680610ce857607f821691505b602082108103610d0657634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115610d5357805f5260205f20601f840160051c81016020851015610d315750805b601f840160051c820191505b81811015610d50575f8155600101610d3d565b50505b505050565b815167ffffffffffffffff811115610d7257610d72610cc0565b610d8681610d808454610cd4565b84610d0c565b602080601f831160018114610db9575f8415610da25750858301515b5f19600386901b1c1916600185901b178555610e10565b5f85815260208120601f198616915b82811015610de757888601518255948401946001909101908401610dc8565b5085821015610e0457878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b634e487b7160e01b5f52601160045260245ffd5b5f60018201610e3d57610e3d610e18565b5060010190565b5f81610e5257610e52610e18565b505f19019056fea2646970667358221220f09554bb306030b10334a2d736d998fdce7bd8bcf53721c016780d65f84f24dc64736f6c63430008170033";

type MusicShopConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MusicShopConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MusicShop__factory extends ContractFactory {
  constructor(...args: MusicShopConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override deploy(
    _owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_owner, overrides || {}) as Promise<
      MusicShop & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MusicShop__factory {
    return super.connect(runner) as MusicShop__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MusicShopInterface {
    return new Interface(_abi) as MusicShopInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MusicShop {
    return new Contract(address, _abi, runner) as unknown as MusicShop;
  }
}
