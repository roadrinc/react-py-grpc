import React, { useState } from 'react';
import { GreeterClient } from './proto/GreetServiceClientPb'; // Adjust path according to your structure
import { HelloRequest } from './proto/greet_pb'; // Adjust path

const ClientStreamingInterface = () => {
    const [name, setName] = useState<string>('');
    const [greeting, setGreeting] = useState<string>('');
    const [requests, setRequests] = useState<HelloRequest.AsObject[]>([]);
    const [isStreaming, setIsStreaming] = useState<boolean>(false);
    const [summaryResponse, setSummaryResponse] = useState<string>('');

    const client = new GreeterClient('http://localhost:8080', null, null);

    // Function to handle adding messages to the local "sent" list
    const handleSendMessage = () => {
        const newRequest = { name, greeting };
        setRequests(prev => [...prev, newRequest]);
    };

    // Function to send all collected messages as a summary request when streaming ends
    const endStreamingAndSummarize = async () => {
        setIsStreaming(false);
        try {
            // Simulating a response, so we don't actually need to assign it to 'response'
            await client.sayHello(new HelloRequest(), {}); // Assume this sends the collected data
            // Simulating the response content directly in state update
            setSummaryResponse(JSON.stringify({
                request: requests,
                message: `You have sent ${requests.length} messages. Please expect a delayed response.`
            }, null, 2));  // Format the JSON for display
        } catch (err: any) {
            console.error('Error with summary request:', err.message);
        }
    };
    
    // Start or stop the simulated streaming
    const toggleStreaming = () => {
        setIsStreaming(!isStreaming);
        if (isStreaming) {
            endStreamingAndSummarize();
        } else {
            setRequests([]);  // Clear previous session data
            setSummaryResponse('');
        }
    };

    return (
        <div>
            <h1>Simulated Client Streaming gRPC Test</h1>
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
            <button onClick={toggleStreaming}>{isStreaming ? 'Stop Streaming & Summarize' : 'Start Streaming'}</button>
            <button onClick={handleSendMessage} disabled={!isStreaming}>Send Message</button>
            <div>
                <h2>Messages:</h2>
                {requests.map((req, index) => (
                    <p key={index}>{`Sent: ${req.name} says '${req.greeting}'`}</p>
                ))}
            </div>
            {summaryResponse && (
                <div>
                    <h2>Summary Response from Server:</h2>
                    <pre>{summaryResponse}</pre>
                </div>
            )}
        </div>
    );
};

export default ClientStreamingInterface;