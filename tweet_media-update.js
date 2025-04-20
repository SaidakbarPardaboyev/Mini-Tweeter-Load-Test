import http from "k6/http";
import { check, sleep } from "k6";
import { baseUrl, headers, testOptions } from './helpers/config.js';

export let options = testOptions;

export default () => {
    const payload = JSON.stringify({
        "id": "da6d1a6e-185c-4cc1-98d8-7c458a0cb5b1",
        "media_type": "image",
        "tweet_id": "c30d3099-e41b-4a16-b98b-070c01a33bf6",
        "url": "string load test"
    });

    const res = http.put(
        `${baseUrl}/tweets-media`,
        payload,
        { headers: headers }
    );

    check(res, { "status was 200": (r) => r.status === 200 });
    sleep(1);
};