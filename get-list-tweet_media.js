import http from "k6/http";
import { check, sleep } from "k6";
import { baseUrl, headers, testOptions } from './helpers/config.js';

export let options = testOptions;

export default () => {
    const tweetID = "c30d3099-e41b-4a16-b98b-070c01a33bf6";

    const res = http.get(
        `${baseUrl}/api/tweets-media/list?tweet_id=${tweetID}`,
        { headers: headers }
    );

    check(res, { "status was 200": (r) => r.status === 200 });
    sleep(1);
};