// Original file: proto/greet.proto

import type { HelloRequest as _greet_HelloRequest, HelloRequest__Output as _greet_HelloRequest__Output } from '../greet/HelloRequest';

export interface DelayedReply {
  'message'?: (string);
  'request'?: (_greet_HelloRequest)[];
}

export interface DelayedReply__Output {
  'message'?: (string);
  'request'?: (_greet_HelloRequest__Output)[];
}
