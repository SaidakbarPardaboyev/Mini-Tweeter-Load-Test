import http from "k6/http";
import { check, sleep } from "k6";
import { baseUrl, headers, testOptions } from './helpers/config.js';

export let options = testOptions;

export default () => {
    const tweetMediaID = "da6d1a6e-185c-4cc1-98d8-7c458a0cb5b1"

    const res = http.get(
        `${baseUrl}/api/tweets-media/${tweetMediaID}`,
        { headers: headers }
    );

    check(res, { "status was 200": (r) => r.status === 200 });
    sleep(1);
};