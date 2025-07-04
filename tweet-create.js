import http from "k6/http";
import { check, sleep } from "k6";
import { baseUrl, headers, testOptions } from './helpers/config.js';

export let options = testOptions;

export default () => {
    const payload = JSON.stringify({
        "content": "string loat test",
        "user_id": "5a2409f1-c58e-4ef6-9132-7131c66081bc"
    });

    const res = http.create(
        `${baseUrl}/tweets`,
        payload,
        { headers: headers }
    );

    check(res, { "status was 200": (r) => r.status === 200 });
    sleep(1);
};