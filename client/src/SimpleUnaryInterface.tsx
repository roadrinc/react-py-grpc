import React, { useState } from 'react';
import { GreeterClient } from './proto/GreetServiceClientPb'; // Adjust path according to your structure
import { HelloRequest } from './proto/greet_pb'; // Adjust path

const SimpleUnaryInterface = () => {
    const [name, setName] = useState<string>('');
    const [greeting, setGreeting] = useState<string>('');
    const [replyMessage, setReplyMessage] = useState<string>('');

    const client = new GreeterClient('http://localhost:8080', null, null);

    const handleSayHello = async () => {
        const request = new HelloRequest();
        request.setName(name);
        request.setGreeting(greeting);

        client.sayHello(request, {}, (err, response) => {
            if (err) {
                console.error(err);
                return;
            }
            setReplyMessage(response.getMessage());
        });
    };

    return (
        <div>
            <h1>Unary gRPC Test</h1>
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
            <button onClick={handleSayHello}>Send Greeting</button>
            <p>Server Response: {replyMessage}</p>
        </div>
    );
};

export default SimpleUnaryInterface;