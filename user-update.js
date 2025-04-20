import http from "k6/http";
import { check, sleep } from "k6";
import { baseUrl, headers, testOptions } from './helpers/config.js';

export let options = testOptions;

export default () => {
    const payload = JSON.stringify({
        "id": "5a2409f1-c58e-4ef6-9132-7131c66081bc",
        "name": "staging",
        "surname": "staging",
        "bio": "staging",
        "profile_image": "staging",
        "username": "stagingstagingov",
        "password": "string"
    });

    const res = http.put(
        `${baseUrl}/users`,
        payload,
        { headers: headers }
    );

    check(res, { "status was 200": (r) => r.status === 200 });
    sleep(1);
};