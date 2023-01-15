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

import { GetNewsBlocksParams, PostNewsBlocksPayload, PutNewsBlocksIdPayload } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class NewsBlocks<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
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
  getNewsBlocks = (query: GetNewsBlocksParams, params: RequestParams = {}) =>
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
    });
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
  postNewsBlocks = (data: PostNewsBlocksPayload, params: RequestParams = {}) =>
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
    });
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
  getNewsBlocksId = (id: string, params: RequestParams = {}) =>
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
    });
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
  putNewsBlocksId = (id: string, data: PutNewsBlocksIdPayload, params: RequestParams = {}) =>
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
    });
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
  deleteNewsBlocksId = (id: string, params: RequestParams = {}) =>
    this.request<number, { error: { status?: number; name?: string; message?: string } }>({
      path: `/news-blocks/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
