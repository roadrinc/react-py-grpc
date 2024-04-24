// Original file: proto/greet.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DelayedReply as _greet_DelayedReply, DelayedReply__Output as _greet_DelayedReply__Output } from '../greet/DelayedReply';
import type { HelloReply as _greet_HelloReply, HelloReply__Output as _greet_HelloReply__Output } from '../greet/HelloReply';
import type { HelloRequest as _greet_HelloRequest, HelloRequest__Output as _greet_HelloRequest__Output } from '../greet/HelloRequest';

export interface GreeterClient extends grpc.Client {
  ChattyClientSaysHello(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_greet_DelayedReply__Output>): grpc.ClientWritableStream<_greet_HelloRequest>;
  ChattyClientSaysHello(metadata: grpc.Metadata, callback: grpc.requestCallback<_greet_DelayedReply__Output>): grpc.ClientWritableStream<_greet_HelloRequest>;
  ChattyClientSaysHello(options: grpc.CallOptions, callback: grpc.requestCallback<_greet_DelayedReply__Output>): grpc.ClientWritableStream<_greet_HelloRequest>;
  ChattyClientSaysHello(callback: grpc.requestCallback<_greet_DelayedReply__Output>): grpc.ClientWritableStream<_greet_HelloRequest>;
  chattyClientSaysHello(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_greet_DelayedReply__Output>): grpc.ClientWritableStream<_greet_HelloRequest>;
  chattyClientSaysHello(metadata: grpc.Metadata, callback: grpc.requestCallback<_greet_DelayedReply__Output>): grpc.ClientWritableStream<_greet_HelloRequest>;
  chattyClientSaysHello(options: grpc.CallOptions, callback: grpc.requestCallback<_greet_DelayedReply__Output>): grpc.ClientWritableStream<_greet_HelloRequest>;
  chattyClientSaysHello(callback: grpc.requestCallback<_greet_DelayedReply__Output>): grpc.ClientWritableStream<_greet_HelloRequest>;
  
  InteractingHello(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_greet_HelloRequest, _greet_HelloReply__Output>;
  InteractingHello(options?: grpc.CallOptions): grpc.ClientDuplexStream<_greet_HelloRequest, _greet_HelloReply__Output>;
  interactingHello(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_greet_HelloRequest, _greet_HelloReply__Output>;
  interactingHello(options?: grpc.CallOptions): grpc.ClientDuplexStream<_greet_HelloRequest, _greet_HelloReply__Output>;
  
  ParrotSaysHello(argument: _greet_HelloRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_greet_HelloReply__Output>;
  ParrotSaysHello(argument: _greet_HelloRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_greet_HelloReply__Output>;
  parrotSaysHello(argument: _greet_HelloRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_greet_HelloReply__Output>;
  parrotSaysHello(argument: _greet_HelloRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_greet_HelloReply__Output>;
  
  SayHello(argument: _greet_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_greet_HelloReply__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _greet_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_greet_HelloReply__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _greet_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_greet_HelloReply__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _greet_HelloRequest, callback: grpc.requestCallback<_greet_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _greet_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_greet_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _greet_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_greet_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _greet_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_greet_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _greet_HelloRequest, callback: grpc.requestCallback<_greet_HelloReply__Output>): grpc.ClientUnaryCall;
  
}

export interface GreeterHandlers extends grpc.UntypedServiceImplementation {
  ChattyClientSaysHello: grpc.handleClientStreamingCall<_greet_HelloRequest__Output, _greet_DelayedReply>;
  
  InteractingHello: grpc.handleBidiStreamingCall<_greet_HelloRequest__Output, _greet_HelloReply>;
  
  ParrotSaysHello: grpc.handleServerStreamingCall<_greet_HelloRequest__Output, _greet_HelloReply>;
  
  SayHello: grpc.handleUnaryCall<_greet_HelloRequest__Output, _greet_HelloReply>;
  
}

export interface GreeterDefinition extends grpc.ServiceDefinition {
  ChattyClientSaysHello: MethodDefinition<_greet_HelloRequest, _greet_DelayedReply, _greet_HelloRequest__Output, _greet_DelayedReply__Output>
  InteractingHello: MethodDefinition<_greet_HelloRequest, _greet_HelloReply, _greet_HelloRequest__Output, _greet_HelloReply__Output>
  ParrotSaysHello: MethodDefinition<_greet_HelloRequest, _greet_HelloReply, _greet_HelloRequest__Output, _greet_HelloReply__Output>
  SayHello: MethodDefinition<_greet_HelloRequest, _greet_HelloReply, _greet_HelloRequest__Output, _greet_HelloReply__Output>
}
