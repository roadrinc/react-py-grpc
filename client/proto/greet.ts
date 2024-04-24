import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { GreeterClient as _greet_GreeterClient, GreeterDefinition as _greet_GreeterDefinition } from './greet/Greeter';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  greet: {
    DelayedReply: MessageTypeDefinition
    Greeter: SubtypeConstructor<typeof grpc.Client, _greet_GreeterClient> & { service: _greet_GreeterDefinition }
    HelloReply: MessageTypeDefinition
    HelloRequest: MessageTypeDefinition
  }
}

