import React, { useState } from 'react';
import { GreeterClient } from './proto/GreetServiceClientPb'; // Adjust path according to your structure
import { HelloRequest } from './proto/greet_pb'; // Adjust path

const ServerStreamingInterface = () => {
    const [name, setName] = useState<string>('');
    const [greeting, setGreeting] = useState<string>('');
    const [messages, setMessages] = useState<string[]>([]);

    const client = new GreeterClient('http://localhost:8080', null, null);

    const handleParrotSaysHello = () => {
        const request = new HelloRequest();
        request.setName(name);
        request.setGreeting(greeting);

        const stream = client.parrotSaysHello(request, {});
        stream.on('data', function(response) {
            setMessages(prev => [...prev, response.getMessage()]);
        });

        stream.on('error', function(err) {
            console.error('Stream error:', err);
        });

        stream.on('end', function() {
            console.log('Stream ended.');
        });
    };

    return (
        <div>
            <h1>Server Streaming gRPC Test</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input
                type="text"
                value={greeting}
                onChange={(e) => setGreeting(e.target.value)}
                placeholder="Greeting"
            />
            <button onClick={handleParrotSaysHello}>Start Streaming</button>
            <div>
                <h2>Messages from server:</h2>
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
        </div>
    );
};

export default ServerStreamingInterface;