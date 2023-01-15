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

export interface GetNewsBlocksParams {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;

  /** Retun page/pageSize (default: true) */
  "pagination[withCount]"?: boolean;

  /** Page number (default: 0) */
  "pagination[page]"?: number;

  /** Page size (default: 25) */
  "pagination[pageSize]"?: number;

  /** Offset value (default: 0) */
  "pagination[start]"?: number;

  /** Number of entities to return (default: 25) */
  "pagination[limit]"?: number;

  /** Fields to return (ex: title,author) */
  fields?: string;

  /** Relations to return */
  populate?: string;
}

export interface PostNewsBlocksPayload {
  data?: { title?: string };
}

export interface PutNewsBlocksIdPayload {
  data?: {
    title?: string;
    body?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: number | string;
    updatedBy?: number | string;
  };
}

export interface GetRotationsParams {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;

  /** Retun page/pageSize (default: true) */
  "pagination[withCount]"?: boolean;

  /** Page number (default: 0) */
  "pagination[page]"?: number;

  /** Page size (default: 25) */
  "pagination[pageSize]"?: number;

  /** Offset value (default: 0) */
  "pagination[start]"?: number;

  /** Number of entities to return (default: 25) */
  "pagination[limit]"?: number;

  /** Fields to return (ex: title,author) */
  fields?: string;

  /** Relations to return */
  populate?: string;
}

export interface PostRotationsPayload {
  data?: { name?: string };
}

export interface PutRotationsIdPayload {
  data?: {
    name?: string;
    broadcastDates?: { startTime?: string }[];
    standardBroadcastDates?: {
      Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag";
      Tijd?: string;
    }[];
    videos?: (number | string)[];
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: number | string;
    updatedBy?: number | string;
  };
}

export interface GetVideosParams {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;

  /** Retun page/pageSize (default: true) */
  "pagination[withCount]"?: boolean;

  /** Page number (default: 0) */
  "pagination[page]"?: number;

  /** Page size (default: 25) */
  "pagination[pageSize]"?: number;

  /** Offset value (default: 0) */
  "pagination[start]"?: number;

  /** Number of entities to return (default: 25) */
  "pagination[limit]"?: number;

  /** Fields to return (ex: title,author) */
  fields?: string;

  /** Relations to return */
  populate?: string;
}

export interface PostVideosPayload {
  data?: {
    file?: number | string;
    rotations?: (number | string)[];
    name?: string;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: number | string;
    updatedBy?: number | string;
  };
}

export interface PutVideosIdPayload {
  data?: {
    file?: number | string;
    rotations?: (number | string)[];
    name?: string;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: number | string;
    updatedBy?: number | string;
  };
}

export interface PostEmailPayload {
  data?: { foo?: string };
}

export interface PostEmailTestPayload {
  data?: { foo?: string };
}

export interface PostUploadPayload {
  data?: { name?: string; hash?: string; mime?: string; size?: number; url?: string; provider?: string };
}

export interface GetUploadFilesParams {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;

  /** Retun page/pageSize (default: true) */
  "pagination[withCount]"?: boolean;

  /** Page number (default: 0) */
  "pagination[page]"?: number;

  /** Page size (default: 25) */
  "pagination[pageSize]"?: number;

  /** Offset value (default: 0) */
  "pagination[start]"?: number;

  /** Number of entities to return (default: 25) */
  "pagination[limit]"?: number;

  /** Fields to return (ex: title,author) */
  fields?: string;

  /** Relations to return */
  populate?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://localhost:1337/api";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title DOCUMENTATION
 * @version 1.0.0
 * @license Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0.html)
 * @termsOfService YOUR_TERMS_OF_SERVICE_URL
 * @baseUrl http://localhost:1337/api
 * @externalDocs https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html
 * @contact TEAM <contact-email@something.io> (mywebsite.io)
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  newsBlocks = {
    /**
     * No description
     *
     * @tags News-block
     * @name GetNewsBlocks
     * @request GET:/news-blocks
     * @secure
     * @response `200` `{ data?: ({ id?: string, attributes?: { title?: string, body?: string, createdAt?: string, updatedAt?: string, publishedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[], meta?: { pagination?: { page?: number, pageSize?: number, pageCount?: number, total?: number } } }` OK
     * @response `400` `{ error: { status?: number, name?: string, message?: string } }` Bad Request
     * @response `401` `{ error: { status?: number, name?: string, message?: string } }` Unauthorized
     * @response `403` `{ error: { status?: number, name?: string, message?: string } }` Forbidden
     * @response `404` `{ error: { status?: number, name?: string, message?: string } }` Not Found
     * @response `500` `{ error: { status?: number, name?: string, message?: string } }` Internal Server Error
     */
    getNewsBlocks: (query: GetNewsBlocksParams, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            id?: string;
            attributes?: {
              title?: string;
              body?: string;
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: {
                data?: {
                  id?: string;
                  attributes?: {
                    firstname?: string;
                    lastname?: string;
                    username?: string;
                    email?: string;
                    resetPasswordToken?: string;
                    registrationToken?: string;
                    isActive?: boolean;
                    roles?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          code?: string;
                          description?: string;
                          users?: { data?: { id?: string; attributes?: object }[] };
                          permissions?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                action?: string;
                                subject?: string;
                                properties?: any;
                                conditions?: any;
                                role?: { data?: { id?: string; attributes?: object } };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            }[];
                          };
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: { data?: { id?: string; attributes?: object } };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      }[];
                    };
                    blocked?: boolean;
                    preferedLanguage?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                };
              };
              updatedBy?: { data?: { id?: string; attributes?: object } };
            };
          }[];
          meta?: { pagination?: { page?: number; pageSize?: number; pageCount?: number; total?: number } };
        },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/news-blocks`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags News-block
     * @name PostNewsBlocks
     * @request POST:/news-blocks
     * @secure
     * @response `200` `{ data?: { id?: string, attributes?: { title?: string, body?: string, createdAt?: string, updatedAt?: string, publishedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } }, meta?: object }` OK
     * @response `400` `{ error: { status?: number, name?: string, message?: string } }` Bad Request
     * @response `401` `{ error: { status?: number, name?: string, message?: string } }` Unauthorized
     * @response `403` `{ error: { status?: number, name?: string, message?: string } }` Forbidden
     * @response `404` `{ error: { status?: number, name?: string, message?: string } }` Not Found
     * @response `500` `{ error: { status?: number, name?: string, message?: string } }` Internal Server Error
     */
    postNewsBlocks: (data: PostNewsBlocksPayload, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            id?: string;
            attributes?: {
              title?: string;
              body?: string;
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: {
                data?: {
                  id?: string;
                  attributes?: {
                    firstname?: string;
                    lastname?: string;
                    username?: string;
                    email?: string;
                    resetPasswordToken?: string;
                    registrationToken?: string;
                    isActive?: boolean;
                    roles?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          code?: string;
                          description?: string;
                          users?: { data?: { id?: string; attributes?: object }[] };
                          permissions?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                action?: string;
                                subject?: string;
                                properties?: any;
                                conditions?: any;
                                role?: { data?: { id?: string; attributes?: object } };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            }[];
                          };
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: { data?: { id?: string; attributes?: object } };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      }[];
                    };
                    blocked?: boolean;
                    preferedLanguage?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                };
              };
              updatedBy?: { data?: { id?: string; attributes?: object } };
            };
          };
          meta?: object;
        },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/news-blocks`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags News-block
     * @name GetNewsBlocksId
     * @request GET:/news-blocks/{id}
     * @secure
     * @response `200` `{ data?: { id?: string, attributes?: { title?: string, body?: string, createdAt?: string, updatedAt?: string, publishedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } }, meta?: object }` OK
     * @response `400` `{ error: { status?: number, name?: string, message?: string } }` Bad Request
     * @response `401` `{ error: { status?: number, name?: string, message?: string } }` Unauthorized
     * @response `403` `{ error: { status?: number, name?: string, message?: string } }` Forbidden
     * @response `404` `{ error: { status?: number, name?: string, message?: string } }` Not Found
     * @response `500` `{ error: { status?: number, name?: string, message?: string } }` Internal Server Error
     */
    getNewsBlocksId: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            id?: string;
            attributes?: {
              title?: string;
              body?: string;
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: {
                data?: {
                  id?: string;
                  attributes?: {
                    firstname?: string;
                    lastname?: string;
                    username?: string;
                    email?: string;
                    resetPasswordToken?: string;
                    registrationToken?: string;
                    isActive?: boolean;
                    roles?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          code?: string;
                          description?: string;
                          users?: { data?: { id?: string; attributes?: object }[] };
                          permissions?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                action?: string;
                                subject?: string;
                                properties?: any;
                                conditions?: any;
                                role?: { data?: { id?: string; attributes?: object } };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            }[];
                          };
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: { data?: { id?: string; attributes?: object } };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      }[];
                    };
                    blocked?: boolean;
                    preferedLanguage?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                };
              };
              updatedBy?: { data?: { id?: string; attributes?: object } };
            };
          };
          meta?: object;
        },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/news-blocks/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags News-block
     * @name PutNewsBlocksId
     * @request PUT:/news-blocks/{id}
     * @secure
     * @response `200` `{ data?: { id?: string, attributes?: { title?: string, body?: string, createdAt?: string, updatedAt?: string, publishedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } }, meta?: object }` OK
     * @response `400` `{ error: { status?: number, name?: string, message?: string } }` Bad Request
     * @response `401` `{ error: { status?: number, name?: string, message?: string } }` Unauthorized
     * @response `403` `{ error: { status?: number, name?: string, message?: string } }` Forbidden
     * @response `404` `{ error: { status?: number, name?: string, message?: string } }` Not Found
     * @response `500` `{ error: { status?: number, name?: string, message?: string } }` Internal Server Error
     */
    putNewsBlocksId: (id: string, data: PutNewsBlocksIdPayload, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            id?: string;
            attributes?: {
              title?: string;
              body?: string;
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: {
                data?: {
                  id?: string;
                  attributes?: {
                    firstname?: string;
                    lastname?: string;
                    username?: string;
                    email?: string;
                    resetPasswordToken?: string;
                    registrationToken?: string;
                    isActive?: boolean;
                    roles?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          code?: string;
                          description?: string;
                          users?: { data?: { id?: string; attributes?: object }[] };
                          permissions?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                action?: string;
                                subject?: string;
                                properties?: any;
                                conditions?: any;
                                role?: { data?: { id?: string; attributes?: object } };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            }[];
                          };
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: { data?: { id?: string; attributes?: object } };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      }[];
                    };
                    blocked?: boolean;
                    preferedLanguage?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                };
              };
              updatedBy?: { data?: { id?: string; attributes?: object } };
            };
          };
          meta?: object;
        },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/news-blocks/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags News-block
     * @name DeleteNewsBlocksId
     * @request DELETE:/news-blocks/{id}
     * @secure
     * @response `200` `number` OK
     * @response `400` `{ error: { status?: number, name?: string, message?: string } }` Bad Request
     * @response `401` `{ error: { status?: number, name?: string, message?: string } }` Unauthorized
     * @response `403` `{ error: { status?: number, name?: string, message?: string } }` Forbidden
     * @response `404` `{ error: { status?: number, name?: string, message?: string } }` Not Found
     * @response `500` `{ error: { status?: number, name?: string, message?: string } }` Internal Server Error
     */
    deleteNewsBlocksId: (id: string, params: RequestParams = {}) =>
      this.request<number, { error: { status?: number; name?: string; message?: string } }>({
        path: `/news-blocks/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  rotations = {
    /**
     * No description
     *
     * @tags Rotation
     * @name GetRotations
     * @request GET:/rotations
     * @secure
     * @response `200` `{ data?: ({ id?: string, attributes?: { name?: string, broadcastDates?: ({ id?: string, startTime?: string })[], standardBroadcastDates?: ({ id?: string, Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag", Tijd?: string })[], videos?: { data?: ({ id?: string, attributes?: { file?: { data?: { id?: string, attributes?: { name?: string, alternativeText?: string, caption?: string, width?: number, height?: number, formats?: any, hash?: string, ext?: string, mime?: string, size?: number, url?: string, previewUrl?: string, provider?: string, provider_metadata?: any, related?: { data?: ({ id?: string, attributes?: object })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, rotations?: { data?: ({ id?: string, attributes?: { name?: string, broadcastDates?: ({ id?: string, startTime?: string })[], standardBroadcastDates?: ({ id?: string, Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag", Tijd?: string })[], videos?: { data?: ({ id?: string, attributes?: object })[] }, createdAt?: string, updatedAt?: string, publishedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, name?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, publishedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[], meta?: { pagination?: { page?: number, pageSize?: number, pageCount?: number, total?: number } } }` OK
     * @response `400` `{ error: { status?: number, name?: string, message?: string } }` Bad Request
     * @response `401` `{ error: { status?: number, name?: string, message?: string } }` Unauthorized
     * @response `403` `{ error: { status?: number, name?: string, message?: string } }` Forbidden
     * @response `404` `{ error: { status?: number, name?: string, message?: string } }` Not Found
     * @response `500` `{ error: { status?: number, name?: string, message?: string } }` Internal Server Error
     */
    getRotations: (query: GetRotationsParams, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            id?: string;
            attributes?: {
              name?: string;
              broadcastDates?: { id?: string; startTime?: string }[];
              standardBroadcastDates?: {
                id?: string;
                Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag";
                Tijd?: string;
              }[];
              videos?: {
                data?: {
                  id?: string;
                  attributes?: {
                    file?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          alternativeText?: string;
                          caption?: string;
                          width?: number;
                          height?: number;
                          formats?: any;
                          hash?: string;
                          ext?: string;
                          mime?: string;
                          size?: number;
                          url?: string;
                          previewUrl?: string;
                          provider?: string;
                          provider_metadata?: any;
                          related?: { data?: { id?: string; attributes?: object }[] };
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                firstname?: string;
                                lastname?: string;
                                username?: string;
                                email?: string;
                                resetPasswordToken?: string;
                                registrationToken?: string;
                                isActive?: boolean;
                                roles?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      name?: string;
                                      code?: string;
                                      description?: string;
                                      users?: { data?: { id?: string; attributes?: object }[] };
                                      permissions?: {
                                        data?: {
                                          id?: string;
                                          attributes?: {
                                            action?: string;
                                            subject?: string;
                                            properties?: any;
                                            conditions?: any;
                                            role?: { data?: { id?: string; attributes?: object } };
                                            createdAt?: string;
                                            updatedAt?: string;
                                            createdBy?: { data?: { id?: string; attributes?: object } };
                                            updatedBy?: { data?: { id?: string; attributes?: object } };
                                          };
                                        }[];
                                      };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  }[];
                                };
                                blocked?: boolean;
                                preferedLanguage?: string;
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            };
                          };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      };
                    };
                    rotations?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          broadcastDates?: { id?: string; startTime?: string }[];
                          standardBroadcastDates?: {
                            id?: string;
                            Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag";
                            Tijd?: string;
                          }[];
                          videos?: { data?: { id?: string; attributes?: object }[] };
                          createdAt?: string;
                          updatedAt?: string;
                          publishedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                firstname?: string;
                                lastname?: string;
                                username?: string;
                                email?: string;
                                resetPasswordToken?: string;
                                registrationToken?: string;
                                isActive?: boolean;
                                roles?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      name?: string;
                                      code?: string;
                                      description?: string;
                                      users?: { data?: { id?: string; attributes?: object }[] };
                                      permissions?: {
                                        data?: {
                                          id?: string;
                                          attributes?: {
                                            action?: string;
                                            subject?: string;
                                            properties?: any;
                                            conditions?: any;
                                            role?: { data?: { id?: string; attributes?: object } };
                                            createdAt?: string;
                                            updatedAt?: string;
                                            createdBy?: { data?: { id?: string; attributes?: object } };
                                            updatedBy?: { data?: { id?: string; attributes?: object } };
                                          };
                                        }[];
                                      };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  }[];
                                };
                                blocked?: boolean;
                                preferedLanguage?: string;
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            };
                          };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      }[];
                    };
                    name?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                }[];
              };
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { data?: { id?: string; attributes?: object } };
              updatedBy?: { data?: { id?: string; attributes?: object } };
            };
          }[];
          meta?: { pagination?: { page?: number; pageSize?: number; pageCount?: number; total?: number } };
        },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/rotations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Rotation
     * @name PostRotations
     * @request POST:/rotations
     * @secure
     * @response `200` `{ data?: { id?: string, attributes?: { name?: string, broadcastDates?: ({ id?: string, startTime?: string })[], standardBroadcastDates?: ({ id?: string, Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag", Tijd?: string })[], videos?: { data?: ({ id?: string, attributes?: { file?: { data?: { id?: string, attributes?: { name?: string, alternativeText?: string, caption?: string, width?: number, height?: number, formats?: any, hash?: string, ext?: string, mime?: string, size?: number, url?: string, previewUrl?: string, provider?: string, provider_metadata?: any, related?: { data?: ({ id?: string, attributes?: object })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, rotations?: { data?: ({ id?: string, attributes?: { name?: string, broadcastDates?: ({ id?: string, startTime?: string })[], standardBroadcastDates?: ({ id?: string, Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag", Tijd?: string })[], videos?: { data?: ({ id?: string, attributes?: object })[] }, createdAt?: string, updatedAt?: string, publishedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, name?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, publishedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } }, meta?: object }` OK
     * @response `400` `{ error: { status?: number, name?: string, message?: string } }` Bad Request
     * @response `401` `{ error: { status?: number, name?: string, message?: string } }` Unauthorized
     * @response `403` `{ error: { status?: number, name?: string, message?: string } }` Forbidden
     * @response `404` `{ error: { status?: number, name?: string, message?: string } }` Not Found
     * @response `500` `{ error: { status?: number, name?: string, message?: string } }` Internal Server Error
     */
    postRotations: (data: PostRotationsPayload, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            id?: string;
            attributes?: {
              name?: string;
              broadcastDates?: { id?: string; startTime?: string }[];
              standardBroadcastDates?: {
                id?: string;
                Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag";
                Tijd?: string;
              }[];
              videos?: {
                data?: {
                  id?: string;
                  attributes?: {
                    file?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          alternativeText?: string;
                          caption?: string;
                          width?: number;
                          height?: number;
                          formats?: any;
                          hash?: string;
                          ext?: string;
                          mime?: string;
                          size?: number;
                          url?: string;
                          previewUrl?: string;
                          provider?: string;
                          provider_metadata?: any;
                          related?: { data?: { id?: string; attributes?: object }[] };
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                firstname?: string;
                                lastname?: string;
                                username?: string;
                                email?: string;
                                resetPasswordToken?: string;
                                registrationToken?: string;
                                isActive?: boolean;
                                roles?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      name?: string;
                                      code?: string;
                                      description?: string;
                                      users?: { data?: { id?: string; attributes?: object }[] };
                                      permissions?: {
                                        data?: {
                                          id?: string;
                                          attributes?: {
                                            action?: string;
                                            subject?: string;
                                            properties?: any;
                                            conditions?: any;
                                            role?: { data?: { id?: string; attributes?: object } };
                                            createdAt?: string;
                                            updatedAt?: string;
                                            createdBy?: { data?: { id?: string; attributes?: object } };
                                            updatedBy?: { data?: { id?: string; attributes?: object } };
                                          };
                                        }[];
                                      };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  }[];
                                };
                                blocked?: boolean;
                                preferedLanguage?: string;
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            };
                          };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      };
                    };
                    rotations?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          broadcastDates?: { id?: string; startTime?: string }[];
                          standardBroadcastDates?: {
                            id?: string;
                            Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag";
                            Tijd?: string;
                          }[];
                          videos?: { data?: { id?: string; attributes?: object }[] };
                          createdAt?: string;
                          updatedAt?: string;
                          publishedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                firstname?: string;
                                lastname?: string;
                                username?: string;
                                email?: string;
                                resetPasswordToken?: string;
                                registrationToken?: string;
                                isActive?: boolean;
                                roles?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      name?: string;
                                      code?: string;
                                      description?: string;
                                      users?: { data?: { id?: string; attributes?: object }[] };
                                      permissions?: {
                                        data?: {
                                          id?: string;
                                          attributes?: {
                                            action?: string;
                                            subject?: string;
                                            properties?: any;
                                            conditions?: any;
                                            role?: { data?: { id?: string; attributes?: object } };
                                            createdAt?: string;
                                            updatedAt?: string;
                                            createdBy?: { data?: { id?: string; attributes?: object } };
                                            updatedBy?: { data?: { id?: string; attributes?: object } };
                                          };
                                        }[];
                                      };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  }[];
                                };
                                blocked?: boolean;
                                preferedLanguage?: string;
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            };
                          };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      }[];
                    };
                    name?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                }[];
              };
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { data?: { id?: string; attributes?: object } };
              updatedBy?: { data?: { id?: string; attributes?: object } };
            };
          };
          meta?: object;
        },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/rotations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Rotation
     * @name GetRotationsId
     * @request GET:/rotations/{id}
     * @secure
     * @response `200` `{ data?: { id?: string, attributes?: { name?: string, broadcastDates?: ({ id?: string, startTime?: string })[], standardBroadcastDates?: ({ id?: string, Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag", Tijd?: string })[], videos?: { data?: ({ id?: string, attributes?: { file?: { data?: { id?: string, attributes?: { name?: string, alternativeText?: string, caption?: string, width?: number, height?: number, formats?: any, hash?: string, ext?: string, mime?: string, size?: number, url?: string, previewUrl?: string, provider?: string, provider_metadata?: any, related?: { data?: ({ id?: string, attributes?: object })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, rotations?: { data?: ({ id?: string, attributes?: { name?: string, broadcastDates?: ({ id?: string, startTime?: string })[], standardBroadcastDates?: ({ id?: string, Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag", Tijd?: string })[], videos?: { data?: ({ id?: string, attributes?: object })[] }, createdAt?: string, updatedAt?: string, publishedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, name?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, publishedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } }, meta?: object }` OK
     * @response `400` `{ error: { status?: number, name?: string, message?: string } }` Bad Request
     * @response `401` `{ error: { status?: number, name?: string, message?: string } }` Unauthorized
     * @response `403` `{ error: { status?: number, name?: string, message?: string } }` Forbidden
     * @response `404` `{ error: { status?: number, name?: string, message?: string } }` Not Found
     * @response `500` `{ error: { status?: number, name?: string, message?: string } }` Internal Server Error
     */
    getRotationsId: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            id?: string;
            attributes?: {
              name?: string;
              broadcastDates?: { id?: string; startTime?: string }[];
              standardBroadcastDates?: {
                id?: string;
                Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag";
                Tijd?: string;
              }[];
              videos?: {
                data?: {
                  id?: string;
                  attributes?: {
                    file?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          alternativeText?: string;
                          caption?: string;
                          width?: number;
                          height?: number;
                          formats?: any;
                          hash?: string;
                          ext?: string;
                          mime?: string;
                          size?: number;
                          url?: string;
                          previewUrl?: string;
                          provider?: string;
                          provider_metadata?: any;
                          related?: { data?: { id?: string; attributes?: object }[] };
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                firstname?: string;
                                lastname?: string;
                                username?: string;
                                email?: string;
                                resetPasswordToken?: string;
                                registrationToken?: string;
                                isActive?: boolean;
                                roles?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      name?: string;
                                      code?: string;
                                      description?: string;
                                      users?: { data?: { id?: string; attributes?: object }[] };
                                      permissions?: {
                                        data?: {
                                          id?: string;
                                          attributes?: {
                                            action?: string;
                                            subject?: string;
                                            properties?: any;
                                            conditions?: any;
                                            role?: { data?: { id?: string; attributes?: object } };
                                            createdAt?: string;
                                            updatedAt?: string;
                                            createdBy?: { data?: { id?: string; attributes?: object } };
                                            updatedBy?: { data?: { id?: string; attributes?: object } };
                                          };
                                        }[];
                                      };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  }[];
                                };
                                blocked?: boolean;
                                preferedLanguage?: string;
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            };
                          };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      };
                    };
                    rotations?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          broadcastDates?: { id?: string; startTime?: string }[];
                          standardBroadcastDates?: {
                            id?: string;
                            Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag";
                            Tijd?: string;
                          }[];
                          videos?: { data?: { id?: string; attributes?: object }[] };
                          createdAt?: string;
                          updatedAt?: string;
                          publishedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                firstname?: string;
                                lastname?: string;
                                username?: string;
                                email?: string;
                                resetPasswordToken?: string;
                                registrationToken?: string;
                                isActive?: boolean;
                                roles?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      name?: string;
                                      code?: string;
                                      description?: string;
                                      users?: { data?: { id?: string; attributes?: object }[] };
                                      permissions?: {
                                        data?: {
                                          id?: string;
                                          attributes?: {
                                            action?: string;
                                            subject?: string;
                                            properties?: any;
                                            conditions?: any;
                                            role?: { data?: { id?: string; attributes?: object } };
                                            createdAt?: string;
                                            updatedAt?: string;
                                            createdBy?: { data?: { id?: string; attributes?: object } };
                                            updatedBy?: { data?: { id?: string; attributes?: object } };
                                          };
                                        }[];
                                      };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  }[];
                                };
                                blocked?: boolean;
                                preferedLanguage?: string;
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            };
                          };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      }[];
                    };
                    name?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                }[];
              };
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { data?: { id?: string; attributes?: object } };
              updatedBy?: { data?: { id?: string; attributes?: object } };
            };
          };
          meta?: object;
        },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/rotations/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Rotation
     * @name PutRotationsId
     * @request PUT:/rotations/{id}
     * @secure
     * @response `200` `{ data?: { id?: string, attributes?: { name?: string, broadcastDates?: ({ id?: string, startTime?: string })[], standardBroadcastDates?: ({ id?: string, Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag", Tijd?: string })[], videos?: { data?: ({ id?: string, attributes?: { file?: { data?: { id?: string, attributes?: { name?: string, alternativeText?: string, caption?: string, width?: number, height?: number, formats?: any, hash?: string, ext?: string, mime?: string, size?: number, url?: string, previewUrl?: string, provider?: string, provider_metadata?: any, related?: { data?: ({ id?: string, attributes?: object })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, rotations?: { data?: ({ id?: string, attributes?: { name?: string, broadcastDates?: ({ id?: string, startTime?: string })[], standardBroadcastDates?: ({ id?: string, Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag", Tijd?: string })[], videos?: { data?: ({ id?: string, attributes?: object })[] }, createdAt?: string, updatedAt?: string, publishedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, name?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, publishedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } }, meta?: object }` OK
     * @response `400` `{ error: { status?: number, name?: string, message?: string } }` Bad Request
     * @response `401` `{ error: { status?: number, name?: string, message?: string } }` Unauthorized
     * @response `403` `{ error: { status?: number, name?: string, message?: string } }` Forbidden
     * @response `404` `{ error: { status?: number, name?: string, message?: string } }` Not Found
     * @response `500` `{ error: { status?: number, name?: string, message?: string } }` Internal Server Error
     */
    putRotationsId: (id: string, data: PutRotationsIdPayload, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            id?: string;
            attributes?: {
              name?: string;
              broadcastDates?: { id?: string; startTime?: string }[];
              standardBroadcastDates?: {
                id?: string;
                Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag";
                Tijd?: string;
              }[];
              videos?: {
                data?: {
                  id?: string;
                  attributes?: {
                    file?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          alternativeText?: string;
                          caption?: string;
                          width?: number;
                          height?: number;
                          formats?: any;
                          hash?: string;
                          ext?: string;
                          mime?: string;
                          size?: number;
                          url?: string;
                          previewUrl?: string;
                          provider?: string;
                          provider_metadata?: any;
                          related?: { data?: { id?: string; attributes?: object }[] };
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                firstname?: string;
                                lastname?: string;
                                username?: string;
                                email?: string;
                                resetPasswordToken?: string;
                                registrationToken?: string;
                                isActive?: boolean;
                                roles?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      name?: string;
                                      code?: string;
                                      description?: string;
                                      users?: { data?: { id?: string; attributes?: object }[] };
                                      permissions?: {
                                        data?: {
                                          id?: string;
                                          attributes?: {
                                            action?: string;
                                            subject?: string;
                                            properties?: any;
                                            conditions?: any;
                                            role?: { data?: { id?: string; attributes?: object } };
                                            createdAt?: string;
                                            updatedAt?: string;
                                            createdBy?: { data?: { id?: string; attributes?: object } };
                                            updatedBy?: { data?: { id?: string; attributes?: object } };
                                          };
                                        }[];
                                      };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  }[];
                                };
                                blocked?: boolean;
                                preferedLanguage?: string;
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            };
                          };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      };
                    };
                    rotations?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          broadcastDates?: { id?: string; startTime?: string }[];
                          standardBroadcastDates?: {
                            id?: string;
                            Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag";
                            Tijd?: string;
                          }[];
                          videos?: { data?: { id?: string; attributes?: object }[] };
                          createdAt?: string;
                          updatedAt?: string;
                          publishedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                firstname?: string;
                                lastname?: string;
                                username?: string;
                                email?: string;
                                resetPasswordToken?: string;
                                registrationToken?: string;
                                isActive?: boolean;
                                roles?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      name?: string;
                                      code?: string;
                                      description?: string;
                                      users?: { data?: { id?: string; attributes?: object }[] };
                                      permissions?: {
                                        data?: {
                                          id?: string;
                                          attributes?: {
                                            action?: string;
                                            subject?: string;
                                            properties?: any;
                                            conditions?: any;
                                            role?: { data?: { id?: string; attributes?: object } };
                                            createdAt?: string;
                                            updatedAt?: string;
                                            createdBy?: { data?: { id?: string; attributes?: object } };
                                            updatedBy?: { data?: { id?: string; attributes?: object } };
                                          };
                                        }[];
                                      };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  }[];
                                };
                                blocked?: boolean;
                                preferedLanguage?: string;
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            };
                          };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      }[];
                    };
                    name?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                }[];
              };
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { data?: { id?: string; attributes?: object } };
              updatedBy?: { data?: { id?: string; attributes?: object } };
            };
          };
          meta?: object;
        },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/rotations/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Rotation
     * @name DeleteRotationsId
     * @request DELETE:/rotations/{id}
     * @secure
     * @response `200` `number` OK
     * @response `400` `{ error: { status?: number, name?: string, message?: string } }` Bad Request
     * @response `401` `{ error: { status?: number, name?: string, message?: string } }` Unauthorized
     * @response `403` `{ error: { status?: number, name?: string, message?: string } }` Forbidden
     * @response `404` `{ error: { status?: number, name?: string, message?: string } }` Not Found
     * @response `500` `{ error: { status?: number, name?: string, message?: string } }` Internal Server Error
     */
    deleteRotationsId: (id: string, params: RequestParams = {}) =>
      this.request<number, { error: { status?: number; name?: string; message?: string } }>({
        path: `/rotations/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  videos = {
    /**
     * No description
     *
     * @tags Video
     * @name GetVideos
     * @request GET:/videos
     * @secure
     * @response `200` `{ data?: ({ id?: string, attributes?: { file?: { data?: { id?: string, attributes?: { name?: string, alternativeText?: string, caption?: string, width?: number, height?: number, formats?: any, hash?: string, ext?: string, mime?: string, size?: number, url?: string, previewUrl?: string, provider?: string, provider_metadata?: any, related?: { data?: ({ id?: string, attributes?: object })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, rotations?: { data?: ({ id?: string, attributes?: { name?: string, broadcastDates?: ({ id?: string, startTime?: string })[], standardBroadcastDates?: ({ id?: string, Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag", Tijd?: string })[], videos?: { data?: ({ id?: string, attributes?: { file?: { data?: { id?: string, attributes?: { name?: string, alternativeText?: string, caption?: string, width?: number, height?: number, formats?: any, hash?: string, ext?: string, mime?: string, size?: number, url?: string, previewUrl?: string, provider?: string, provider_metadata?: any, related?: { data?: ({ id?: string, attributes?: object })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, rotations?: { data?: ({ id?: string, attributes?: object })[] }, name?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, publishedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, name?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[], meta?: { pagination?: { page?: number, pageSize?: number, pageCount?: number, total?: number } } }` OK
     * @response `400` `{ error: { status?: number, name?: string, message?: string } }` Bad Request
     * @response `401` `{ error: { status?: number, name?: string, message?: string } }` Unauthorized
     * @response `403` `{ error: { status?: number, name?: string, message?: string } }` Forbidden
     * @response `404` `{ error: { status?: number, name?: string, message?: string } }` Not Found
     * @response `500` `{ error: { status?: number, name?: string, message?: string } }` Internal Server Error
     */
    getVideos: (query: GetVideosParams, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            id?: string;
            attributes?: {
              file?: {
                data?: {
                  id?: string;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: { data?: { id?: string; attributes?: object }[] };
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: { data?: { id?: string; attributes?: object }[] };
                                permissions?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      action?: string;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: { data?: { id?: string; attributes?: object } };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  }[];
                                };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: { data?: { id?: string; attributes?: object } };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      };
                    };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                };
              };
              rotations?: {
                data?: {
                  id?: string;
                  attributes?: {
                    name?: string;
                    broadcastDates?: { id?: string; startTime?: string }[];
                    standardBroadcastDates?: {
                      id?: string;
                      Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag";
                      Tijd?: string;
                    }[];
                    videos?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          file?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                name?: string;
                                alternativeText?: string;
                                caption?: string;
                                width?: number;
                                height?: number;
                                formats?: any;
                                hash?: string;
                                ext?: string;
                                mime?: string;
                                size?: number;
                                url?: string;
                                previewUrl?: string;
                                provider?: string;
                                provider_metadata?: any;
                                related?: { data?: { id?: string; attributes?: object }[] };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      firstname?: string;
                                      lastname?: string;
                                      username?: string;
                                      email?: string;
                                      resetPasswordToken?: string;
                                      registrationToken?: string;
                                      isActive?: boolean;
                                      roles?: {
                                        data?: {
                                          id?: string;
                                          attributes?: {
                                            name?: string;
                                            code?: string;
                                            description?: string;
                                            users?: { data?: { id?: string; attributes?: object }[] };
                                            permissions?: {
                                              data?: {
                                                id?: string;
                                                attributes?: {
                                                  action?: string;
                                                  subject?: string;
                                                  properties?: any;
                                                  conditions?: any;
                                                  role?: { data?: { id?: string; attributes?: object } };
                                                  createdAt?: string;
                                                  updatedAt?: string;
                                                  createdBy?: { data?: { id?: string; attributes?: object } };
                                                  updatedBy?: { data?: { id?: string; attributes?: object } };
                                                };
                                              }[];
                                            };
                                            createdAt?: string;
                                            updatedAt?: string;
                                            createdBy?: { data?: { id?: string; attributes?: object } };
                                            updatedBy?: { data?: { id?: string; attributes?: object } };
                                          };
                                        }[];
                                      };
                                      blocked?: boolean;
                                      preferedLanguage?: string;
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  };
                                };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            };
                          };
                          rotations?: { data?: { id?: string; attributes?: object }[] };
                          name?: string;
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                firstname?: string;
                                lastname?: string;
                                username?: string;
                                email?: string;
                                resetPasswordToken?: string;
                                registrationToken?: string;
                                isActive?: boolean;
                                roles?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      name?: string;
                                      code?: string;
                                      description?: string;
                                      users?: { data?: { id?: string; attributes?: object }[] };
                                      permissions?: {
                                        data?: {
                                          id?: string;
                                          attributes?: {
                                            action?: string;
                                            subject?: string;
                                            properties?: any;
                                            conditions?: any;
                                            role?: { data?: { id?: string; attributes?: object } };
                                            createdAt?: string;
                                            updatedAt?: string;
                                            createdBy?: { data?: { id?: string; attributes?: object } };
                                            updatedBy?: { data?: { id?: string; attributes?: object } };
                                          };
                                        }[];
                                      };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  }[];
                                };
                                blocked?: boolean;
                                preferedLanguage?: string;
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            };
                          };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      }[];
                    };
                    createdAt?: string;
                    updatedAt?: string;
                    publishedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                }[];
              };
              name?: string;
              createdAt?: string;
              updatedAt?: string;
              createdBy?: { data?: { id?: string; attributes?: object } };
              updatedBy?: { data?: { id?: string; attributes?: object } };
            };
          }[];
          meta?: { pagination?: { page?: number; pageSize?: number; pageCount?: number; total?: number } };
        },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/videos`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Video
     * @name PostVideos
     * @request POST:/videos
     * @secure
     * @response `200` `{ data?: { id?: string, attributes?: { file?: { data?: { id?: string, attributes?: { name?: string, alternativeText?: string, caption?: string, width?: number, height?: number, formats?: any, hash?: string, ext?: string, mime?: string, size?: number, url?: string, previewUrl?: string, provider?: string, provider_metadata?: any, related?: { data?: ({ id?: string, attributes?: object })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, rotations?: { data?: ({ id?: string, attributes?: { name?: string, broadcastDates?: ({ id?: string, startTime?: string })[], standardBroadcastDates?: ({ id?: string, Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag", Tijd?: string })[], videos?: { data?: ({ id?: string, attributes?: { file?: { data?: { id?: string, attributes?: { name?: string, alternativeText?: string, caption?: string, width?: number, height?: number, formats?: any, hash?: string, ext?: string, mime?: string, size?: number, url?: string, previewUrl?: string, provider?: string, provider_metadata?: any, related?: { data?: ({ id?: string, attributes?: object })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, rotations?: { data?: ({ id?: string, attributes?: object })[] }, name?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, publishedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, name?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } }, meta?: object }` OK
     * @response `400` `{ error: { status?: number, name?: string, message?: string } }` Bad Request
     * @response `401` `{ error: { status?: number, name?: string, message?: string } }` Unauthorized
     * @response `403` `{ error: { status?: number, name?: string, message?: string } }` Forbidden
     * @response `404` `{ error: { status?: number, name?: string, message?: string } }` Not Found
     * @response `500` `{ error: { status?: number, name?: string, message?: string } }` Internal Server Error
     */
    postVideos: (data: PostVideosPayload, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            id?: string;
            attributes?: {
              file?: {
                data?: {
                  id?: string;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: { data?: { id?: string; attributes?: object }[] };
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: { data?: { id?: string; attributes?: object }[] };
                                permissions?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      action?: string;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: { data?: { id?: string; attributes?: object } };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  }[];
                                };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: { data?: { id?: string; attributes?: object } };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      };
                    };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                };
              };
              rotations?: {
                data?: {
                  id?: string;
                  attributes?: {
                    name?: string;
                    broadcastDates?: { id?: string; startTime?: string }[];
                    standardBroadcastDates?: {
                      id?: string;
                      Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag";
                      Tijd?: string;
                    }[];
                    videos?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          file?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                name?: string;
                                alternativeText?: string;
                                caption?: string;
                                width?: number;
                                height?: number;
                                formats?: any;
                                hash?: string;
                                ext?: string;
                                mime?: string;
                                size?: number;
                                url?: string;
                                previewUrl?: string;
                                provider?: string;
                                provider_metadata?: any;
                                related?: { data?: { id?: string; attributes?: object }[] };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      firstname?: string;
                                      lastname?: string;
                                      username?: string;
                                      email?: string;
                                      resetPasswordToken?: string;
                                      registrationToken?: string;
                                      isActive?: boolean;
                                      roles?: {
                                        data?: {
                                          id?: string;
                                          attributes?: {
                                            name?: string;
                                            code?: string;
                                            description?: string;
                                            users?: { data?: { id?: string; attributes?: object }[] };
                                            permissions?: {
                                              data?: {
                                                id?: string;
                                                attributes?: {
                                                  action?: string;
                                                  subject?: string;
                                                  properties?: any;
                                                  conditions?: any;
                                                  role?: { data?: { id?: string; attributes?: object } };
                                                  createdAt?: string;
                                                  updatedAt?: string;
                                                  createdBy?: { data?: { id?: string; attributes?: object } };
                                                  updatedBy?: { data?: { id?: string; attributes?: object } };
                                                };
                                              }[];
                                            };
                                            createdAt?: string;
                                            updatedAt?: string;
                                            createdBy?: { data?: { id?: string; attributes?: object } };
                                            updatedBy?: { data?: { id?: string; attributes?: object } };
                                          };
                                        }[];
                                      };
                                      blocked?: boolean;
                                      preferedLanguage?: string;
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  };
                                };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            };
                          };
                          rotations?: { data?: { id?: string; attributes?: object }[] };
                          name?: string;
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                firstname?: string;
                                lastname?: string;
                                username?: string;
                                email?: string;
                                resetPasswordToken?: string;
                                registrationToken?: string;
                                isActive?: boolean;
                                roles?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      name?: string;
                                      code?: string;
                                      description?: string;
                                      users?: { data?: { id?: string; attributes?: object }[] };
                                      permissions?: {
                                        data?: {
                                          id?: string;
                                          attributes?: {
                                            action?: string;
                                            subject?: string;
                                            properties?: any;
                                            conditions?: any;
                                            role?: { data?: { id?: string; attributes?: object } };
                                            createdAt?: string;
                                            updatedAt?: string;
                                            createdBy?: { data?: { id?: string; attributes?: object } };
                                            updatedBy?: { data?: { id?: string; attributes?: object } };
                                          };
                                        }[];
                                      };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  }[];
                                };
                                blocked?: boolean;
                                preferedLanguage?: string;
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            };
                          };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      }[];
                    };
                    createdAt?: string;
                    updatedAt?: string;
                    publishedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                }[];
              };
              name?: string;
              createdAt?: string;
              updatedAt?: string;
              createdBy?: { data?: { id?: string; attributes?: object } };
              updatedBy?: { data?: { id?: string; attributes?: object } };
            };
          };
          meta?: object;
        },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/videos`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Video
     * @name GetVideosId
     * @request GET:/videos/{id}
     * @secure
     * @response `200` `{ data?: { id?: string, attributes?: { file?: { data?: { id?: string, attributes?: { name?: string, alternativeText?: string, caption?: string, width?: number, height?: number, formats?: any, hash?: string, ext?: string, mime?: string, size?: number, url?: string, previewUrl?: string, provider?: string, provider_metadata?: any, related?: { data?: ({ id?: string, attributes?: object })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, rotations?: { data?: ({ id?: string, attributes?: { name?: string, broadcastDates?: ({ id?: string, startTime?: string })[], standardBroadcastDates?: ({ id?: string, Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag", Tijd?: string })[], videos?: { data?: ({ id?: string, attributes?: { file?: { data?: { id?: string, attributes?: { name?: string, alternativeText?: string, caption?: string, width?: number, height?: number, formats?: any, hash?: string, ext?: string, mime?: string, size?: number, url?: string, previewUrl?: string, provider?: string, provider_metadata?: any, related?: { data?: ({ id?: string, attributes?: object })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, rotations?: { data?: ({ id?: string, attributes?: object })[] }, name?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, publishedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, name?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } }, meta?: object }` OK
     * @response `400` `{ error: { status?: number, name?: string, message?: string } }` Bad Request
     * @response `401` `{ error: { status?: number, name?: string, message?: string } }` Unauthorized
     * @response `403` `{ error: { status?: number, name?: string, message?: string } }` Forbidden
     * @response `404` `{ error: { status?: number, name?: string, message?: string } }` Not Found
     * @response `500` `{ error: { status?: number, name?: string, message?: string } }` Internal Server Error
     */
    getVideosId: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            id?: string;
            attributes?: {
              file?: {
                data?: {
                  id?: string;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: { data?: { id?: string; attributes?: object }[] };
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: { data?: { id?: string; attributes?: object }[] };
                                permissions?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      action?: string;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: { data?: { id?: string; attributes?: object } };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  }[];
                                };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: { data?: { id?: string; attributes?: object } };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      };
                    };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                };
              };
              rotations?: {
                data?: {
                  id?: string;
                  attributes?: {
                    name?: string;
                    broadcastDates?: { id?: string; startTime?: string }[];
                    standardBroadcastDates?: {
                      id?: string;
                      Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag";
                      Tijd?: string;
                    }[];
                    videos?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          file?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                name?: string;
                                alternativeText?: string;
                                caption?: string;
                                width?: number;
                                height?: number;
                                formats?: any;
                                hash?: string;
                                ext?: string;
                                mime?: string;
                                size?: number;
                                url?: string;
                                previewUrl?: string;
                                provider?: string;
                                provider_metadata?: any;
                                related?: { data?: { id?: string; attributes?: object }[] };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      firstname?: string;
                                      lastname?: string;
                                      username?: string;
                                      email?: string;
                                      resetPasswordToken?: string;
                                      registrationToken?: string;
                                      isActive?: boolean;
                                      roles?: {
                                        data?: {
                                          id?: string;
                                          attributes?: {
                                            name?: string;
                                            code?: string;
                                            description?: string;
                                            users?: { data?: { id?: string; attributes?: object }[] };
                                            permissions?: {
                                              data?: {
                                                id?: string;
                                                attributes?: {
                                                  action?: string;
                                                  subject?: string;
                                                  properties?: any;
                                                  conditions?: any;
                                                  role?: { data?: { id?: string; attributes?: object } };
                                                  createdAt?: string;
                                                  updatedAt?: string;
                                                  createdBy?: { data?: { id?: string; attributes?: object } };
                                                  updatedBy?: { data?: { id?: string; attributes?: object } };
                                                };
                                              }[];
                                            };
                                            createdAt?: string;
                                            updatedAt?: string;
                                            createdBy?: { data?: { id?: string; attributes?: object } };
                                            updatedBy?: { data?: { id?: string; attributes?: object } };
                                          };
                                        }[];
                                      };
                                      blocked?: boolean;
                                      preferedLanguage?: string;
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  };
                                };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            };
                          };
                          rotations?: { data?: { id?: string; attributes?: object }[] };
                          name?: string;
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                firstname?: string;
                                lastname?: string;
                                username?: string;
                                email?: string;
                                resetPasswordToken?: string;
                                registrationToken?: string;
                                isActive?: boolean;
                                roles?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      name?: string;
                                      code?: string;
                                      description?: string;
                                      users?: { data?: { id?: string; attributes?: object }[] };
                                      permissions?: {
                                        data?: {
                                          id?: string;
                                          attributes?: {
                                            action?: string;
                                            subject?: string;
                                            properties?: any;
                                            conditions?: any;
                                            role?: { data?: { id?: string; attributes?: object } };
                                            createdAt?: string;
                                            updatedAt?: string;
                                            createdBy?: { data?: { id?: string; attributes?: object } };
                                            updatedBy?: { data?: { id?: string; attributes?: object } };
                                          };
                                        }[];
                                      };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  }[];
                                };
                                blocked?: boolean;
                                preferedLanguage?: string;
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            };
                          };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      }[];
                    };
                    createdAt?: string;
                    updatedAt?: string;
                    publishedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                }[];
              };
              name?: string;
              createdAt?: string;
              updatedAt?: string;
              createdBy?: { data?: { id?: string; attributes?: object } };
              updatedBy?: { data?: { id?: string; attributes?: object } };
            };
          };
          meta?: object;
        },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/videos/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Video
     * @name PutVideosId
     * @request PUT:/videos/{id}
     * @secure
     * @response `200` `{ data?: { id?: string, attributes?: { file?: { data?: { id?: string, attributes?: { name?: string, alternativeText?: string, caption?: string, width?: number, height?: number, formats?: any, hash?: string, ext?: string, mime?: string, size?: number, url?: string, previewUrl?: string, provider?: string, provider_metadata?: any, related?: { data?: ({ id?: string, attributes?: object })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, rotations?: { data?: ({ id?: string, attributes?: { name?: string, broadcastDates?: ({ id?: string, startTime?: string })[], standardBroadcastDates?: ({ id?: string, Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag", Tijd?: string })[], videos?: { data?: ({ id?: string, attributes?: { file?: { data?: { id?: string, attributes?: { name?: string, alternativeText?: string, caption?: string, width?: number, height?: number, formats?: any, hash?: string, ext?: string, mime?: string, size?: number, url?: string, previewUrl?: string, provider?: string, provider_metadata?: any, related?: { data?: ({ id?: string, attributes?: object })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, rotations?: { data?: ({ id?: string, attributes?: object })[] }, name?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, publishedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, name?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } }, meta?: object }` OK
     * @response `400` `{ error: { status?: number, name?: string, message?: string } }` Bad Request
     * @response `401` `{ error: { status?: number, name?: string, message?: string } }` Unauthorized
     * @response `403` `{ error: { status?: number, name?: string, message?: string } }` Forbidden
     * @response `404` `{ error: { status?: number, name?: string, message?: string } }` Not Found
     * @response `500` `{ error: { status?: number, name?: string, message?: string } }` Internal Server Error
     */
    putVideosId: (id: string, data: PutVideosIdPayload, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            id?: string;
            attributes?: {
              file?: {
                data?: {
                  id?: string;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: { data?: { id?: string; attributes?: object }[] };
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: { data?: { id?: string; attributes?: object }[] };
                                permissions?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      action?: string;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: { data?: { id?: string; attributes?: object } };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  }[];
                                };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: { data?: { id?: string; attributes?: object } };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      };
                    };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                };
              };
              rotations?: {
                data?: {
                  id?: string;
                  attributes?: {
                    name?: string;
                    broadcastDates?: { id?: string; startTime?: string }[];
                    standardBroadcastDates?: {
                      id?: string;
                      Dag?: "Zondag" | "Maandag" | "Dinsdag" | "Woensdag" | "Donderdag" | "Vrijdag" | "Zaterdag";
                      Tijd?: string;
                    }[];
                    videos?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          file?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                name?: string;
                                alternativeText?: string;
                                caption?: string;
                                width?: number;
                                height?: number;
                                formats?: any;
                                hash?: string;
                                ext?: string;
                                mime?: string;
                                size?: number;
                                url?: string;
                                previewUrl?: string;
                                provider?: string;
                                provider_metadata?: any;
                                related?: { data?: { id?: string; attributes?: object }[] };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      firstname?: string;
                                      lastname?: string;
                                      username?: string;
                                      email?: string;
                                      resetPasswordToken?: string;
                                      registrationToken?: string;
                                      isActive?: boolean;
                                      roles?: {
                                        data?: {
                                          id?: string;
                                          attributes?: {
                                            name?: string;
                                            code?: string;
                                            description?: string;
                                            users?: { data?: { id?: string; attributes?: object }[] };
                                            permissions?: {
                                              data?: {
                                                id?: string;
                                                attributes?: {
                                                  action?: string;
                                                  subject?: string;
                                                  properties?: any;
                                                  conditions?: any;
                                                  role?: { data?: { id?: string; attributes?: object } };
                                                  createdAt?: string;
                                                  updatedAt?: string;
                                                  createdBy?: { data?: { id?: string; attributes?: object } };
                                                  updatedBy?: { data?: { id?: string; attributes?: object } };
                                                };
                                              }[];
                                            };
                                            createdAt?: string;
                                            updatedAt?: string;
                                            createdBy?: { data?: { id?: string; attributes?: object } };
                                            updatedBy?: { data?: { id?: string; attributes?: object } };
                                          };
                                        }[];
                                      };
                                      blocked?: boolean;
                                      preferedLanguage?: string;
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  };
                                };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            };
                          };
                          rotations?: { data?: { id?: string; attributes?: object }[] };
                          name?: string;
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                firstname?: string;
                                lastname?: string;
                                username?: string;
                                email?: string;
                                resetPasswordToken?: string;
                                registrationToken?: string;
                                isActive?: boolean;
                                roles?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      name?: string;
                                      code?: string;
                                      description?: string;
                                      users?: { data?: { id?: string; attributes?: object }[] };
                                      permissions?: {
                                        data?: {
                                          id?: string;
                                          attributes?: {
                                            action?: string;
                                            subject?: string;
                                            properties?: any;
                                            conditions?: any;
                                            role?: { data?: { id?: string; attributes?: object } };
                                            createdAt?: string;
                                            updatedAt?: string;
                                            createdBy?: { data?: { id?: string; attributes?: object } };
                                            updatedBy?: { data?: { id?: string; attributes?: object } };
                                          };
                                        }[];
                                      };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  }[];
                                };
                                blocked?: boolean;
                                preferedLanguage?: string;
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            };
                          };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      }[];
                    };
                    createdAt?: string;
                    updatedAt?: string;
                    publishedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                }[];
              };
              name?: string;
              createdAt?: string;
              updatedAt?: string;
              createdBy?: { data?: { id?: string; attributes?: object } };
              updatedBy?: { data?: { id?: string; attributes?: object } };
            };
          };
          meta?: object;
        },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/videos/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Video
     * @name DeleteVideosId
     * @request DELETE:/videos/{id}
     * @secure
     * @response `200` `number` OK
     * @response `400` `{ error: { status?: number, name?: string, message?: string } }` Bad Request
     * @response `401` `{ error: { status?: number, name?: string, message?: string } }` Unauthorized
     * @response `403` `{ error: { status?: number, name?: string, message?: string } }` Forbidden
     * @response `404` `{ error: { status?: number, name?: string, message?: string } }` Not Found
     * @response `500` `{ error: { status?: number, name?: string, message?: string } }` Internal Server Error
     */
    deleteVideosId: (id: string, params: RequestParams = {}) =>
      this.request<number, { error: { status?: number; name?: string; message?: string } }>({
        path: `/videos/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  email = {
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
    postEmail: (data: PostEmailPayload, params: RequestParams = {}) =>
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
      }),

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
    postEmailTest: (data: PostEmailTestPayload, params: RequestParams = {}) =>
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
      }),

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
    getEmailSettings: (params: RequestParams = {}) =>
      this.request<
        { data?: { id?: string; attributes?: { foo?: string } }; meta?: object },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/email/settings`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  upload = {
    /**
     * No description
     *
     * @tags Upload - file
     * @name PostUpload
     * @request POST:/upload
     * @secure
     * @response `200` `{ data?: { id?: string, attributes?: { name?: string, alternativeText?: string, caption?: string, width?: number, height?: number, formats?: any, hash?: string, ext?: string, mime?: string, size?: number, url?: string, previewUrl?: string, provider?: string, provider_metadata?: any, related?: { data?: ({ id?: string, attributes?: object })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } }, meta?: object }` OK
     * @response `400` `{ error: { status?: number, name?: string, message?: string } }` Bad Request
     * @response `401` `{ error: { status?: number, name?: string, message?: string } }` Unauthorized
     * @response `403` `{ error: { status?: number, name?: string, message?: string } }` Forbidden
     * @response `404` `{ error: { status?: number, name?: string, message?: string } }` Not Found
     * @response `500` `{ error: { status?: number, name?: string, message?: string } }` Internal Server Error
     */
    postUpload: (data: PostUploadPayload, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            id?: string;
            attributes?: {
              name?: string;
              alternativeText?: string;
              caption?: string;
              width?: number;
              height?: number;
              formats?: any;
              hash?: string;
              ext?: string;
              mime?: string;
              size?: number;
              url?: string;
              previewUrl?: string;
              provider?: string;
              provider_metadata?: any;
              related?: { data?: { id?: string; attributes?: object }[] };
              createdAt?: string;
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: string;
                  attributes?: {
                    firstname?: string;
                    lastname?: string;
                    username?: string;
                    email?: string;
                    resetPasswordToken?: string;
                    registrationToken?: string;
                    isActive?: boolean;
                    roles?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          code?: string;
                          description?: string;
                          users?: { data?: { id?: string; attributes?: object }[] };
                          permissions?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                action?: string;
                                subject?: string;
                                properties?: any;
                                conditions?: any;
                                role?: { data?: { id?: string; attributes?: object } };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            }[];
                          };
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: { data?: { id?: string; attributes?: object } };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      }[];
                    };
                    blocked?: boolean;
                    preferedLanguage?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                };
              };
              updatedBy?: { data?: { id?: string; attributes?: object } };
            };
          };
          meta?: object;
        },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/upload`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Upload - file
     * @name GetUploadFilesCount
     * @request GET:/upload/files/count
     * @secure
     * @response `200` `{ data?: { id?: string, attributes?: { name?: string, alternativeText?: string, caption?: string, width?: number, height?: number, formats?: any, hash?: string, ext?: string, mime?: string, size?: number, url?: string, previewUrl?: string, provider?: string, provider_metadata?: any, related?: { data?: ({ id?: string, attributes?: object })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } }, meta?: object }` OK
     * @response `400` `{ error: { status?: number, name?: string, message?: string } }` Bad Request
     * @response `401` `{ error: { status?: number, name?: string, message?: string } }` Unauthorized
     * @response `403` `{ error: { status?: number, name?: string, message?: string } }` Forbidden
     * @response `404` `{ error: { status?: number, name?: string, message?: string } }` Not Found
     * @response `500` `{ error: { status?: number, name?: string, message?: string } }` Internal Server Error
     */
    getUploadFilesCount: (params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            id?: string;
            attributes?: {
              name?: string;
              alternativeText?: string;
              caption?: string;
              width?: number;
              height?: number;
              formats?: any;
              hash?: string;
              ext?: string;
              mime?: string;
              size?: number;
              url?: string;
              previewUrl?: string;
              provider?: string;
              provider_metadata?: any;
              related?: { data?: { id?: string; attributes?: object }[] };
              createdAt?: string;
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: string;
                  attributes?: {
                    firstname?: string;
                    lastname?: string;
                    username?: string;
                    email?: string;
                    resetPasswordToken?: string;
                    registrationToken?: string;
                    isActive?: boolean;
                    roles?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          code?: string;
                          description?: string;
                          users?: { data?: { id?: string; attributes?: object }[] };
                          permissions?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                action?: string;
                                subject?: string;
                                properties?: any;
                                conditions?: any;
                                role?: { data?: { id?: string; attributes?: object } };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            }[];
                          };
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: { data?: { id?: string; attributes?: object } };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      }[];
                    };
                    blocked?: boolean;
                    preferedLanguage?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                };
              };
              updatedBy?: { data?: { id?: string; attributes?: object } };
            };
          };
          meta?: object;
        },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/upload/files/count`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Upload - file
     * @name GetUploadFiles
     * @request GET:/upload/files
     * @secure
     * @response `200` `{ data?: ({ id?: string, attributes?: { name?: string, alternativeText?: string, caption?: string, width?: number, height?: number, formats?: any, hash?: string, ext?: string, mime?: string, size?: number, url?: string, previewUrl?: string, provider?: string, provider_metadata?: any, related?: { data?: ({ id?: string, attributes?: object })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[], meta?: { pagination?: { page?: number, pageSize?: number, pageCount?: number, total?: number } } }` OK
     * @response `400` `{ error: { status?: number, name?: string, message?: string } }` Bad Request
     * @response `401` `{ error: { status?: number, name?: string, message?: string } }` Unauthorized
     * @response `403` `{ error: { status?: number, name?: string, message?: string } }` Forbidden
     * @response `404` `{ error: { status?: number, name?: string, message?: string } }` Not Found
     * @response `500` `{ error: { status?: number, name?: string, message?: string } }` Internal Server Error
     */
    getUploadFiles: (query: GetUploadFilesParams, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            id?: string;
            attributes?: {
              name?: string;
              alternativeText?: string;
              caption?: string;
              width?: number;
              height?: number;
              formats?: any;
              hash?: string;
              ext?: string;
              mime?: string;
              size?: number;
              url?: string;
              previewUrl?: string;
              provider?: string;
              provider_metadata?: any;
              related?: { data?: { id?: string; attributes?: object }[] };
              createdAt?: string;
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: string;
                  attributes?: {
                    firstname?: string;
                    lastname?: string;
                    username?: string;
                    email?: string;
                    resetPasswordToken?: string;
                    registrationToken?: string;
                    isActive?: boolean;
                    roles?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          code?: string;
                          description?: string;
                          users?: { data?: { id?: string; attributes?: object }[] };
                          permissions?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                action?: string;
                                subject?: string;
                                properties?: any;
                                conditions?: any;
                                role?: { data?: { id?: string; attributes?: object } };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            }[];
                          };
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: { data?: { id?: string; attributes?: object } };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      }[];
                    };
                    blocked?: boolean;
                    preferedLanguage?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                };
              };
              updatedBy?: { data?: { id?: string; attributes?: object } };
            };
          }[];
          meta?: { pagination?: { page?: number; pageSize?: number; pageCount?: number; total?: number } };
        },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/upload/files`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Upload - file
     * @name GetUploadFilesId
     * @request GET:/upload/files/{id}
     * @secure
     * @response `200` `{ data?: { id?: string, attributes?: { name?: string, alternativeText?: string, caption?: string, width?: number, height?: number, formats?: any, hash?: string, ext?: string, mime?: string, size?: number, url?: string, previewUrl?: string, provider?: string, provider_metadata?: any, related?: { data?: ({ id?: string, attributes?: object })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: { firstname?: string, lastname?: string, username?: string, email?: string, resetPasswordToken?: string, registrationToken?: string, isActive?: boolean, roles?: { data?: ({ id?: string, attributes?: { name?: string, code?: string, description?: string, users?: { data?: ({ id?: string, attributes?: object })[] }, permissions?: { data?: ({ id?: string, attributes?: { action?: string, subject?: string, properties?: any, conditions?: any, role?: { data?: { id?: string, attributes?: object } }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } })[] }, blocked?: boolean, preferedLanguage?: string, createdAt?: string, updatedAt?: string, createdBy?: { data?: { id?: string, attributes?: object } }, updatedBy?: { data?: { id?: string, attributes?: object } } } } }, updatedBy?: { data?: { id?: string, attributes?: object } } } }, meta?: object }` OK
     * @response `400` `{ error: { status?: number, name?: string, message?: string } }` Bad Request
     * @response `401` `{ error: { status?: number, name?: string, message?: string } }` Unauthorized
     * @response `403` `{ error: { status?: number, name?: string, message?: string } }` Forbidden
     * @response `404` `{ error: { status?: number, name?: string, message?: string } }` Not Found
     * @response `500` `{ error: { status?: number, name?: string, message?: string } }` Internal Server Error
     */
    getUploadFilesId: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            id?: string;
            attributes?: {
              name?: string;
              alternativeText?: string;
              caption?: string;
              width?: number;
              height?: number;
              formats?: any;
              hash?: string;
              ext?: string;
              mime?: string;
              size?: number;
              url?: string;
              previewUrl?: string;
              provider?: string;
              provider_metadata?: any;
              related?: { data?: { id?: string; attributes?: object }[] };
              createdAt?: string;
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: string;
                  attributes?: {
                    firstname?: string;
                    lastname?: string;
                    username?: string;
                    email?: string;
                    resetPasswordToken?: string;
                    registrationToken?: string;
                    isActive?: boolean;
                    roles?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          code?: string;
                          description?: string;
                          users?: { data?: { id?: string; attributes?: object }[] };
                          permissions?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                action?: string;
                                subject?: string;
                                properties?: any;
                                conditions?: any;
                                role?: { data?: { id?: string; attributes?: object } };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            }[];
                          };
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: { data?: { id?: string; attributes?: object } };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      }[];
                    };
                    blocked?: boolean;
                    preferedLanguage?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                };
              };
              updatedBy?: { data?: { id?: string; attributes?: object } };
            };
          };
          meta?: object;
        },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/upload/files/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Upload - file
     * @name DeleteUploadFilesId
     * @request DELETE:/upload/files/{id}
     * @secure
     * @response `200` `number` OK
     * @response `400` `{ error: { status?: number, name?: string, message?: string } }` Bad Request
     * @response `401` `{ error: { status?: number, name?: string, message?: string } }` Unauthorized
     * @response `403` `{ error: { status?: number, name?: string, message?: string } }` Forbidden
     * @response `404` `{ error: { status?: number, name?: string, message?: string } }` Not Found
     * @response `500` `{ error: { status?: number, name?: string, message?: string } }` Internal Server Error
     */
    deleteUploadFilesId: (id: string, params: RequestParams = {}) =>
      this.request<number, { error: { status?: number; name?: string; message?: string } }>({
        path: `/upload/files/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
