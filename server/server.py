# Import necessary modules
from concurrent import futures
import time
import grpc
import greet_pb2
import greet_pb2_grpc
from grpc_reflection.v1alpha import reflection

# Define the GreeterServicer class which implements the Greeter service
class GreeterServicer(greet_pb2_grpc.GreeterServicer):

    # Implementation of the SayHello RPC method
    def SayHello(self, request, context):
        print("SayHello Request Made from the Client:")
        print(request)
        hello_reply = greet_pb2.HelloReply()
        hello_reply.message = f"{request.greeting} {request.name} this is the response of the server".upper()
        return hello_reply

    # Implementation of the ParrotSaysHello RPC method
    def ParrotSaysHello(self, request, context):
        print("ParrotSaysHello Request Made from the Client:")
        print(request)
        for i in range(3):
            hello_reply = greet_pb2.HelloReply()
            hello_reply.message = f"{request.greeting} {request.name} {i + 1}".upper()
            yield hello_reply
            time.sleep(3)

    # Implementation of the ChattyClientSaysHello RPC method
    def ChattyClientSaysHello(self, request_iterator, context):
        delayed_reply = greet_pb2.DelayedReply()
        for request in request_iterator:
            print("ChattyClientSaysHello Request Made:")
            print(request)
            delayed_reply.request.append(request)
        delayed_reply.message = f"You have sent {len(delayed_reply.request)} messages. Please expect a delayed response."
        return delayed_reply

    # Implementation of the InteractingHello RPC method
    def InteractingHello(self, request_iterator, context):
        for request in request_iterator:
            print("InteractingHello Request Made:")
            print(request)
            hello_reply = greet_pb2.HelloReply()
            hello_reply.message = f"{request.greeting} {request.name}".upper()
            yield hello_reply

# Function to start the gRPC server
def serve():
    # Create a gRPC server with a ThreadPoolExecutor
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    
    # Add the GreeterServicer to the server
    greet_pb2_grpc.add_GreeterServicer_to_server(GreeterServicer(), server)
    
    # Set up server reflection
    SERVICE_NAMES = (
        greet_pb2.DESCRIPTOR.services_by_name["Greeter"].full_name,
        reflection.SERVICE_NAME,
    )
    reflection.enable_server_reflection(SERVICE_NAMES, server)
    
    # Add an insecure port to listen on
    server.add_insecure_port("0.0.0.0:50051")
    
    # Start the server
    server.start()
    print("Server started, listening on 50051")
    
    # Keep the server running until terminated
    server.wait_for_termination()

# Entry point for the script
if __name__ == "__main__":
    serve()
