export const baseUrl = `https://staging.mini-tweet.uz/v1`

export const headers = {
    'Content-Type': 'application/json'
};

export const postHeaders = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0YWdpbmdzdGFnaW5nIiwiaWF0IjoxNjU1MDI4MjYxLCJleHAiOjE2NTUwMjgzNjF9.4yDnZU5jwOwv1H5oAa9hH5S0dZg4ZxhZlNnG8k2Nn6o'
};

export const testOptions = {
    thresholds: {
        http_req_failed: [{ threshold: 'rate<0.01'}],
        http_req_duration: ['p(95)<3000']
    },
    stages: [
        { duration: '10s', target:   250 },
        { duration: '60s', target:   250 },
        { duration: '10s', target: 0 }
    ]

    // Write Load test for frequently used GET API endpionts using k6, they should respond 100k rps.
    // Write load test that supports 5k TPS (Transaction per second) for CREATE or UPDATE endpoints.
};