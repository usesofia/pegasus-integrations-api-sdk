"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Sofia Pegasus integrations-api
 * Api principal do sistema Pegasus para integração com outros sistemas.
 *
 * The version of the OpenAPI document: 1.2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailForwardingApi = void 0;
var runtime = require("../runtime");
var index_1 = require("../models/index");
/**
 *
 */
var EmailForwardingApi = /** @class */ (function (_super) {
    __extends(EmailForwardingApi, _super);
    function EmailForwardingApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Receives email forwarding webhooks from email parsing service and processes them to create forwarded email records
     * Email forwarding webhook endpoint
     */
    EmailForwardingApi.prototype.emailForwardingWebhookRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, consumes, canConsumeForm, formParams, useForm, urlPath, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters['to'] == null) {
                            throw new runtime.RequiredError('to', 'Required parameter "to" was null or undefined when calling emailForwardingWebhook().');
                        }
                        if (requestParameters['from'] == null) {
                            throw new runtime.RequiredError('from', 'Required parameter "from" was null or undefined when calling emailForwardingWebhook().');
                        }
                        if (requestParameters['subject'] == null) {
                            throw new runtime.RequiredError('subject', 'Required parameter "subject" was null or undefined when calling emailForwardingWebhook().');
                        }
                        if (requestParameters['email'] == null) {
                            throw new runtime.RequiredError('email', 'Required parameter "email" was null or undefined when calling emailForwardingWebhook().');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        consumes = [
                            { contentType: 'multipart/form-data' },
                        ];
                        canConsumeForm = runtime.canConsumeForm(consumes);
                        useForm = false;
                        if (useForm) {
                            formParams = new FormData();
                        }
                        else {
                            formParams = new URLSearchParams();
                        }
                        if (requestParameters['to'] != null) {
                            formParams.append('to', requestParameters['to']);
                        }
                        if (requestParameters['from'] != null) {
                            formParams.append('from', requestParameters['from']);
                        }
                        if (requestParameters['subject'] != null) {
                            formParams.append('subject', requestParameters['subject']);
                        }
                        if (requestParameters['email'] != null) {
                            formParams.append('email', requestParameters['email']);
                        }
                        if (requestParameters['envelope'] != null) {
                            formParams.append('envelope', requestParameters['envelope']);
                        }
                        if (requestParameters['spamScore'] != null) {
                            formParams.append('spam_score', requestParameters['spamScore']);
                        }
                        if (requestParameters['spamReport'] != null) {
                            formParams.append('spam_report', requestParameters['spamReport']);
                        }
                        if (requestParameters['charsets'] != null) {
                            formParams.append('charsets', requestParameters['charsets']);
                        }
                        if (requestParameters['senderIp'] != null) {
                            formParams.append('sender_ip', requestParameters['senderIp']);
                        }
                        if (requestParameters['sPF'] != null) {
                            formParams.append('SPF', requestParameters['sPF']);
                        }
                        if (requestParameters['dkim'] != null) {
                            formParams.append('dkim', new Blob([JSON.stringify((0, index_1.ForwardedEmailEntityToJSON)(requestParameters['dkim']))], { type: "application/json", }));
                        }
                        urlPath = "/external/email-forwarding/webhook";
                        return [4 /*yield*/, this.request({
                                path: urlPath,
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                                body: formParams,
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, index_1.ForwardedEmailEntityFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Receives email forwarding webhooks from email parsing service and processes them to create forwarded email records
     * Email forwarding webhook endpoint
     */
    EmailForwardingApi.prototype.emailForwardingWebhook = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.emailForwardingWebhookRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Process email for forwarding integration
     */
    EmailForwardingApi.prototype.processEmailRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, urlPath, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters['processEmailForForwardingIntegrationRequestBodyDto'] == null) {
                            throw new runtime.RequiredError('processEmailForForwardingIntegrationRequestBodyDto', 'Required parameter "processEmailForForwardingIntegrationRequestBodyDto" was null or undefined when calling processEmail().');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
                        urlPath = "/internal/queues/process-email-for-forwarding-integration";
                        return [4 /*yield*/, this.request({
                                path: urlPath,
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                                body: (0, index_1.ProcessEmailForForwardingIntegrationRequestBodyDtoToJSON)(requestParameters['processEmailForForwardingIntegrationRequestBodyDto']),
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.VoidApiResponse(response)];
                }
            });
        });
    };
    /**
     * Process email for forwarding integration
     */
    EmailForwardingApi.prototype.processEmail = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.processEmailRaw(requestParameters, initOverrides)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return EmailForwardingApi;
}(runtime.BaseAPI));
exports.EmailForwardingApi = EmailForwardingApi;
