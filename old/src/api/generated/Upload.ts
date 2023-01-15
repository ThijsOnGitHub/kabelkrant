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

import { GetUploadFilesParams, PostUploadPayload } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Upload<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
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
  postUpload = (data: PostUploadPayload, params: RequestParams = {}) =>
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
    });
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
  getUploadFilesCount = (params: RequestParams = {}) =>
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
    });
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
  getUploadFiles = (query: GetUploadFilesParams, params: RequestParams = {}) =>
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
    });
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
  getUploadFilesId = (id: string, params: RequestParams = {}) =>
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
    });
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
  deleteUploadFilesId = (id: string, params: RequestParams = {}) =>
    this.request<number, { error: { status?: number; name?: string; message?: string } }>({
      path: `/upload/files/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
