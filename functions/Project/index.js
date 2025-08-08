import axios from "axios";
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
export function onSendDeletionMail(config) {
    config = { ...config, method: "post", url: "https://blinkpage-staging-bbc49.hq.spicaengine.com/api/fn-execute/onSendDeletionMail" };
    axiosWriteValidator(config);
    axiosReadValidator(config);
    return axios.request(config).then(r => r.data);
}
export function projectDeleteConfirm(config) {
    config = { ...config, method: "get", url: "https://blinkpage-staging-bbc49.hq.spicaengine.com/api/fn-execute/project-delete-confirm" };
    axiosWriteValidator(config);
    axiosReadValidator(config);
    return axios.request(config).then(r => r.data);
}
// This statement has been deleted.
;
export function publishProject(config) {
    config = { ...config, method: "post", url: "https://blinkpage-staging-bbc49.hq.spicaengine.com/api/fn-execute/publish-project" };
    axiosWriteValidator(config);
    axiosReadValidator(config);
    return axios.request(config).then(r => r.data);
}
// This statement has been deleted.
;
// This statement has been deleted.
;
export function onCommitPushed(config) {
    config = { ...config, method: "post", url: "https://blinkpage-staging-bbc49.hq.spicaengine.com/api/fn-execute/on-commit-pushed" };
    axiosWriteValidator(config);
    axiosReadValidator(config);
    return axios.request(config).then(r => r.data);
}
export function addDomain(config) {
    config = { ...config, method: "post", url: "https://blinkpage-staging-bbc49.hq.spicaengine.com/api/fn-execute/project/domain" };
    axiosWriteValidator(config);
    axiosReadValidator(config);
    return axios.request(config).then(r => r.data);
}
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
// This statement has been deleted.
;
export function insertForm(config) {
    config = { ...config, method: "post", url: "https://blinkpage-staging-bbc49.hq.spicaengine.com/api/fn-execute/project/form" };
    axiosWriteValidator(config);
    axiosReadValidator(config);
    return axios.request(config).then(r => r.data);
}
// This statement has been deleted.
;
// This statement has been deleted.
;
export function getPages(config) {
    config = { ...config, method: "post", url: "https://blinkpage-staging-bbc49.hq.spicaengine.com/api/fn-execute/get-public-pages" };
    axiosWriteValidator(config);
    axiosReadValidator(config);
    return axios.request(config).then(r => r.data);
}
// This statement has been deleted.
;
// This statement has been deleted.
;
function axiosWriteValidator(config) {
    if (["post", "put", "patch"].includes(config.method) && !config.data) {
        console.warn("Sending empty request body for post, put, patch requests is unusual. If it's not intented, please use config.data or update your spica function.");
    }
}
function axiosReadValidator(config) {
    if (["get", "delete", "trace", "options", "head"].includes(config.method) && config.data) {
        console.warn("Sending request body for get, delete, trace, options, head requests is unusual. If it's not intented, please remove config.data or update your spica function.");
    }
}
