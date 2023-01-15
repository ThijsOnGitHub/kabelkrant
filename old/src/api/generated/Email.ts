/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { PostEmailPayload, PostEmailTestPayload } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Email<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Email
   * @name PostEmail
   * @request POST:/email
   * @secure
   * @response `200` `{ data?: { id?: string, attributes?: { foo?: string } }, meta?: object }` OK
   * @response `400` `{ error: { status?: number, name?: string, message?: string } }` Bad Request
   * @response `401` `{ error: { status?: number, name?: string, message?: string } }` Unauthorized
   * @response `403` `{ error: { status?: number, name?: string, message?: string } }` Forbidden
   * @response `404` `{ error: { status?: number, name?: string, message?: string } }` Not Found
   * @response `500` `{ error: { status?: number, name?: string, message?: string } }` Internal Server Error
   */
  postEmail = (data: PostEmailPayload, params: RequestParams = {}) =>
    this.request<
      { data?: { id?: string; attributes?: { foo?: string } }; meta?: object },
      { error: { status?: number; name?: string; message?: string } }
    >({
      path: `/email`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Email
   * @name PostEmailTest
   * @request POST:/email/test
   * @secure
   * @response `200` `{ data?: { id?: string, attributes?: { foo?: string } }, meta?: object }` OK
   * @response `400` `{ error: { status?: number, name?: string, message?: string } }` Bad Request
   * @response `401` `{ error: { status?: number, name?: string, message?: string } }` Unauthorized
   * @response `403` `{ error: { status?: number, name?: string, message?: string } }` Forbidden
   * @response `404` `{ error: { status?: number, name?: string, message?: string } }` Not Found
   * @response `500` `{ error: { status?: number, name?: string, message?: string } }` Internal Server Error
   */
  postEmailTest = (data: PostEmailTestPayload, params: RequestParams = {}) =>
    this.request<
      { data?: { id?: string; attributes?: { foo?: string } }; meta?: object },
      { error: { status?: number; name?: string; message?: string } }
    >({
      path: `/email/test`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Email
   * @name GetEmailSettings
   * @request GET:/email/settings
   * @secure
   * @response `200` `{ data?: { id?: string, attributes?: { foo?: string } }, meta?: object }` OK
   * @response `400` `{ error: { status?: number, name?: string, message?: string } }` Bad Request
   * @response `401` `{ error: { status?: number, name?: string, message?: string } }` Unauthorized
   * @response `403` `{ error: { status?: number, name?: string, message?: string } }` Forbidden
   * @response `404` `{ error: { status?: number, name?: string, message?: string } }` Not Found
   * @response `500` `{ error: { status?: number, name?: string, message?: string } }` Internal Server Error
   */
  getEmailSettings = (params: RequestParams = {}) =>
    this.request<
      { data?: { id?: string; attributes?: { foo?: string } }; meta?: object },
      { error: { status?: number; name?: string; message?: string } }
    >({
      path: `/email/settings`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
