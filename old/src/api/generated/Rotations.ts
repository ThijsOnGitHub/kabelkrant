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

import { GetRotationsParams, PostRotationsPayload, PutRotationsIdPayload } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Rotations<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
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
  getRotations = (query: GetRotationsParams, params: RequestParams = {}) =>
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
    });
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
  postRotations = (data: PostRotationsPayload, params: RequestParams = {}) =>
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
    });
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
  getRotationsId = (id: string, params: RequestParams = {}) =>
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
    });
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
  putRotationsId = (id: string, data: PutRotationsIdPayload, params: RequestParams = {}) =>
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
    });
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
  deleteRotationsId = (id: string, params: RequestParams = {}) =>
    this.request<number, { error: { status?: number; name?: string; message?: string } }>({
      path: `/rotations/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
