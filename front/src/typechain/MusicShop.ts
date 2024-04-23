/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace MusicShop {
  export type AlbumStruct = {
    index: BigNumberish;
    uid: BytesLike;
    title: string;
    price: BigNumberish;
    quantity: BigNumberish;
  };

  export type AlbumStructOutput = [
    index: bigint,
    uid: string,
    title: string,
    price: bigint,
    quantity: bigint
  ] & {
    index: bigint;
    uid: string;
    title: string;
    price: bigint;
    quantity: bigint;
  };
}

export interface MusicShopInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addAlbum"
      | "albums"
      | "allAlbums"
      | "buy"
      | "currentIndex"
      | "currentOrderId"
      | "delivered"
      | "orders"
      | "owner"
      | "supportsInterface"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "AlbumBought" | "OrderDelivered"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addAlbum",
    values: [BytesLike, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "albums",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "allAlbums", values?: undefined): string;
  encodeFunctionData(functionFragment: "buy", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "currentIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentOrderId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "delivered",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "orders",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "addAlbum", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "albums", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allAlbums", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentOrderId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delivered", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "orders", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
}

export namespace AlbumBoughtEvent {
  export type InputTuple = [
    uid: BytesLike,
    customer: AddressLike,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [uid: string, customer: string, timestamp: bigint];
  export interface OutputObject {
    uid: string;
    customer: string;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OrderDeliveredEvent {
  export type InputTuple = [albumUid: BytesLike, customer: AddressLike];
  export type OutputTuple = [albumUid: string, customer: string];
  export interface OutputObject {
    albumUid: string;
    customer: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MusicShop extends BaseContract {
  connect(runner?: ContractRunner | null): MusicShop;
  waitForDeployment(): Promise<this>;

  interface: MusicShopInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addAlbum: TypedContractMethod<
    [
      uid: BytesLike,
      title: string,
      price: BigNumberish,
      quantity: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  albums: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, string, bigint, bigint] & {
        index: bigint;
        uid: string;
        title: string;
        price: bigint;
        quantity: bigint;
      }
    ],
    "view"
  >;

  allAlbums: TypedContractMethod<[], [MusicShop.AlbumStructOutput[]], "view">;

  buy: TypedContractMethod<[_index: BigNumberish], [void], "payable">;

  currentIndex: TypedContractMethod<[], [bigint], "view">;

  currentOrderId: TypedContractMethod<[], [bigint], "view">;

  delivered: TypedContractMethod<[_index: BigNumberish], [void], "nonpayable">;

  orders: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, string, bigint, bigint] & {
        orderId: bigint;
        albumUid: string;
        customer: string;
        orderedAt: bigint;
        status: bigint;
      }
    ],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addAlbum"
  ): TypedContractMethod<
    [
      uid: BytesLike,
      title: string,
      price: BigNumberish,
      quantity: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "albums"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, string, bigint, bigint] & {
        index: bigint;
        uid: string;
        title: string;
        price: bigint;
        quantity: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "allAlbums"
  ): TypedContractMethod<[], [MusicShop.AlbumStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "buy"
  ): TypedContractMethod<[_index: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "currentIndex"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "currentOrderId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "delivered"
  ): TypedContractMethod<[_index: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "orders"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, string, bigint, bigint] & {
        orderId: bigint;
        albumUid: string;
        customer: string;
        orderedAt: bigint;
        status: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;

  getEvent(
    key: "AlbumBought"
  ): TypedContractEvent<
    AlbumBoughtEvent.InputTuple,
    AlbumBoughtEvent.OutputTuple,
    AlbumBoughtEvent.OutputObject
  >;
  getEvent(
    key: "OrderDelivered"
  ): TypedContractEvent<
    OrderDeliveredEvent.InputTuple,
    OrderDeliveredEvent.OutputTuple,
    OrderDeliveredEvent.OutputObject
  >;

  filters: {
    "AlbumBought(bytes32,address,uint256)": TypedContractEvent<
      AlbumBoughtEvent.InputTuple,
      AlbumBoughtEvent.OutputTuple,
      AlbumBoughtEvent.OutputObject
    >;
    AlbumBought: TypedContractEvent<
      AlbumBoughtEvent.InputTuple,
      AlbumBoughtEvent.OutputTuple,
      AlbumBoughtEvent.OutputObject
    >;

    "OrderDelivered(bytes32,address)": TypedContractEvent<
      OrderDeliveredEvent.InputTuple,
      OrderDeliveredEvent.OutputTuple,
      OrderDeliveredEvent.OutputObject
    >;
    OrderDelivered: TypedContractEvent<
      OrderDeliveredEvent.InputTuple,
      OrderDeliveredEvent.OutputTuple,
      OrderDeliveredEvent.OutputObject
    >;
  };
}