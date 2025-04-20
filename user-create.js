import http from "k6/http";
import { check, sleep } from "k6";
import { baseUrl, headers, testOptions } from './helpers/config.js';

export let options = testOptions;

export default () => {
    const payload = JSON.stringify({
        "bio": "loadtest12112$",
        "name": "loadtest12112$",
        "password": "loadtest12112$",
        "profile_image": "loadtest12112$",
        "surname": "loadtest12112$",
        "username": "loadtest12112$"
    });

    const res = http.create(
        `${baseUrl}/api/users`,
        payload,
        { headers: headers }
    );

    check(res, { "status was 200": (r) => r.status === 200 });
    sleep(1);
};