import React, { useState, useEffect } from 'react';
import { GreeterClient } from './proto/GreetServiceClientPb'; // Adjust path according to your structure
import { HelloRequest } from './proto/greet_pb'; // Adjust path

const BiDirectionalStreamingInterface = () => {
    const [name, setName] = useState<string>('');
    const [greeting, setGreeting] = useState<string>('');
    const [messages, setMessages] = useState<string[]>([]);
    const [isStreaming, setIsStreaming] = useState<boolean>(false);

    const client = new GreeterClient('http://localhost:8080', null, null);

    // Function to handle sending messages manually
    const handleSendMessage = async () => {
        const request = new HelloRequest();
        request.setName(name);
        request.setGreeting(greeting);
        try {
            const response = await client.sayHello(request, {}); // Assuming 'sayHello' is used for sending messages
            setMessages(prev => [...prev, `Server says: ${response.getMessage()}`]);
        } catch (err: any) {
            console.error('Error sending message:', err.message);
        }
    };

    // Function to continuously send requests, simulating streaming
    const sendRepeatedRequests = async () => {
        while (isStreaming) {
            const request = new HelloRequest();
            request.setName(name);
            request.setGreeting(greeting);
            try {
                const response = await client.sayHello(request, {}); // Simulate a stream by sending requests repeatedly
                setMessages(prev => [...prev, `Server says: ${response.getMessage()}`]);
                await new Promise(resolve => setTimeout(resolve, 1000)); // Delay next request
            } catch (err: any) {
                console.error('Error with streaming:', err.message);
                setIsStreaming(false); // Stop streaming on error
            }
        }
    };

    // Start or stop the simulated streaming
    const toggleStreaming = () => {
        setIsStreaming(!isStreaming);
        if (!isStreaming) {
            sendRepeatedRequests();
        }
    };

    useEffect(() => {
        // Cleanup on component unmount
        return () => {
            setIsStreaming(false);
        };
    }, []);

    return (
        <div>
            <h1>Simulated Bi-Directional gRPC Streaming Test</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <input
                type="text"
                value={greeting}
                onChange={(e) => setGreeting(e.target.value)}
                placeholder="Enter your greeting"
            />
            <button onClick={toggleStreaming}>{isStreaming ? 'Stop Streaming' : 'Start Streaming'}</button>
            <button onClick={handleSendMessage} disabled={!isStreaming}>Send Message</button>
            <div>
                <h2>Messages from server:</h2>
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
        </div>
    );
};

export default BiDirectionalStreamingInterface;