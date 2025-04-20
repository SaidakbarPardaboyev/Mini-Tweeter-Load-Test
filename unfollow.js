import http from "k6/http";
import { check, sleep } from "k6";
import { baseUrl, headers, testOptions } from './helpers/config.js';

export let options = testOptions;

export default () => {
    const payload = JSON.stringify({
        "follower_id": "5a2409f1-c58e-4ef6-9132-7131c66081bc",
        "following_id": "e6fff4b4-1825-49ec-ac26-0b7dbe012c7e"
    });
  
    const res = http.post(`${baseUrl}/followings/unfollow`, payload, { 
    headers: headers });

    check(res, { "status was 200": (r) => r.status == 200 });
    sleep(1);
};