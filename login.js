import http from "k6/http";
import { check, sleep } from "k6";
import { baseUrl, headers, testOptions } from './helpers/config.js';

export let options = testOptions;

export default () => {
    const payload = JSON.stringify({
        username: "stringstring",
        password: "string"
    });

    const res = http.post(
        `${baseUrl}/auth/login`,
        payload,
        { headers: headers }
    );

    check(res, { "status was 200": (r) => r.status === 200 });
    sleep(1);
};