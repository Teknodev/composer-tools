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
export function login(config) {
    config = { ...config, method: "post", url: "https://blinkpage-staging-bbc49.hq.spicaengine.com/api/fn-execute/login" };
    axiosWriteValidator(config);
    axiosReadValidator(config);
    return axios.request(config).then(r => r.data);
}
export function register(config) {
    config = { ...config, method: "post", url: "https://blinkpage-staging-bbc49.hq.spicaengine.com/api/fn-execute/register" };
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
/**
 * @typedef loginWithStrategyFnData
 * @type {Object}
 * @property {any} token - Identity token
 * @property {any} [anonim_token] - Anonim token
 */
/**
 * @typedef loginWithStrategyFnRequestConfig
 * @type {Object}
 * @property {loginWithStrategyFnData} data - body of the request
 */
/**
 * @param {loginWithStrategyFnRequestConfig & Object<string,any>} config
 * @returns {Promise<any>}
 */
export function loginWithStrategyFn(config) {
    config = { ...config, method: "post", url: "https://blinkpage-staging-bbc49.hq.spicaengine.com/api/fn-execute/login-with-strategy" };
    axiosWriteValidator(config);
    axiosReadValidator(config);
    return axios.request(config).then(r => r.data);
}
/**
 * @typedef ChangePasswordData
 * @type {Object}
 * @property {string} currentPassword - Current Password
 * @property {string} newPassword - New Password
 * @property {string} authorization - Authorization token. Only identity tokens are allowed!
 */
/**
 * @typedef ChangePasswordRequestConfig
 * @type {Object}
 * @property {ChangePasswordData} data - body of the request
 */
/**
 * @param {ChangePasswordRequestConfig & Object<string,any>} config
 * @returns {Promise<any>}
 */
export function changePassword(config) {
    config = { ...config, method: "post", url: "https://blinkpage-staging-bbc49.hq.spicaengine.com/api/fn-execute/change-password" };
    axiosWriteValidator(config);
    axiosReadValidator(config);
    return axios.request(config).then(r => r.data);
}
export function changePasswordEmail(config) {
    config = { ...config, method: "post", url: "https://blinkpage-staging-bbc49.hq.spicaengine.com/api/fn-execute/change-password-email" };
    axiosWriteValidator(config);
    axiosReadValidator(config);
    return axios.request(config).then(r => r.data);
}
/**
 * @typedef ChangeEmailData
 * @type {Object}
 * @property {string} email - Email
 * @property {string} newEmail - New email value
 * @property {string} password - Current password!
 */
/**
 * @typedef ChangeEmailRequestConfig
 * @type {Object}
 * @property {ChangeEmailData} data - body of the request
 */
/**
 * @param {ChangeEmailRequestConfig & Object<string,any>} config
 * @returns {Promise<any>}
 */
export function changeEmail(config) {
    config = { ...config, method: "post", url: "https://blinkpage-staging-bbc49.hq.spicaengine.com/api/fn-execute/change-email" };
    axiosWriteValidator(config);
    axiosReadValidator(config);
    return axios.request(config).then(r => r.data);
}
/**
 * @typedef ForgotPasswordData
 * @type {Object}
 * @property {string} email - Email
 */
/**
 * @typedef ForgotPasswordRequestConfig
 * @type {Object}
 * @property {ForgotPasswordData} data - body of the request
 */
/**
 * @param {ForgotPasswordRequestConfig & Object<string,any>} config
 * @returns {Promise<any>}
 */
export function forgotPassword(config) {
    config = { ...config, method: "post", url: "https://blinkpage-staging-bbc49.hq.spicaengine.com/api/fn-execute/forgot-password" };
    axiosWriteValidator(config);
    axiosReadValidator(config);
    return axios.request(config).then(r => r.data);
}
export function passwordRecovery(config) {
    config = { ...config, method: "post", url: "https://blinkpage-staging-bbc49.hq.spicaengine.com/api/fn-execute/password-recovery" };
    axiosWriteValidator(config);
    axiosReadValidator(config);
    return axios.request(config).then(r => r.data);
}
export function deleteAccount(config) {
    config = { ...config, method: "post", url: "https://blinkpage-staging-bbc49.hq.spicaengine.com/api/fn-execute/delete-account" };
    axiosWriteValidator(config);
    axiosReadValidator(config);
    return axios.request(config).then(r => r.data);
}
export function verifyEmail(config) {
    config = { ...config, method: "get", url: "https://blinkpage-staging-bbc49.hq.spicaengine.com/api/fn-execute/verify-email" };
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
export function emailVerificationRequest(config) {
    config = { ...config, method: "post", url: "https://blinkpage-staging-bbc49.hq.spicaengine.com/api/fn-execute/email-verification-request" };
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
export function verifyToken(config) {
    config = { ...config, method: "get", url: "https://blinkpage-staging-bbc49.hq.spicaengine.com/api/fn-execute/verifyToken" };
    axiosWriteValidator(config);
    axiosReadValidator(config);
    return axios.request(config).then(r => r.data);
}
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
