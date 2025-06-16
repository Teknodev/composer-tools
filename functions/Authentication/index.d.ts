export function login(config: any): any;
export function register(config: any): any;
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
export function loginWithStrategyFn(config: loginWithStrategyFnRequestConfig & {
    [x: string]: any;
}): Promise<any>;
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
export function changePassword(config: ChangePasswordRequestConfig & {
    [x: string]: any;
}): Promise<any>;
export function changePasswordEmail(config: any): any;
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
export function changeEmail(config: ChangeEmailRequestConfig & {
    [x: string]: any;
}): Promise<any>;
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
export function forgotPassword(config: ForgotPasswordRequestConfig & {
    [x: string]: any;
}): Promise<any>;
export function passwordRecovery(config: any): any;
export function deleteAccount(config: any): any;
export function verifyEmail(config: any): any;
export function emailVerificationRequest(config: any): any;
export function verifyToken(config: any): any;
export type loginWithStrategyFnData = {
    /**
     * - Identity token
     */
    token: any;
    /**
     * - Anonim token
     */
    anonim_token?: any;
};
export type loginWithStrategyFnRequestConfig = {
    /**
     * - body of the request
     */
    data: loginWithStrategyFnData;
};
export type ChangePasswordData = {
    /**
     * - Current Password
     */
    currentPassword: string;
    /**
     * - New Password
     */
    newPassword: string;
    /**
     * - Authorization token. Only identity tokens are allowed!
     */
    authorization: string;
};
export type ChangePasswordRequestConfig = {
    /**
     * - body of the request
     */
    data: ChangePasswordData;
};
export type ChangeEmailData = {
    /**
     * - Email
     */
    email: string;
    /**
     * - New email value
     */
    newEmail: string;
    /**
     * - Current password!
     */
    password: string;
};
export type ChangeEmailRequestConfig = {
    /**
     * - body of the request
     */
    data: ChangeEmailData;
};
export type ForgotPasswordData = {
    /**
     * - Email
     */
    email: string;
};
export type ForgotPasswordRequestConfig = {
    /**
     * - body of the request
     */
    data: ForgotPasswordData;
};
