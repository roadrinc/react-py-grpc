# react-py-grpc


## 1. How to run?

```bash
git clone git@github.com:roadrinc/react-py-grpc.git
```

### SERVER

```bash
cd server
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

python server.py
```

### CLIENT
```bash
cd client
npm i
npm run start
```

### PROXI
```bash
docker compose up -d
```

- **[react/](http://localhost:3000/)**
- **[server/](http://localhost:50051/)**
- **[envoy/](http://localhost:9901/)*