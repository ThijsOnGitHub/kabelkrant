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

import { GetVideosParams, PostVideosPayload, PutVideosIdPayload } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Videos<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
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
  getVideos = (query: GetVideosParams, params: RequestParams = {}) =>
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
    });
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
  postVideos = (data: PostVideosPayload, params: RequestParams = {}) =>
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
    });
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
  getVideosId = (id: string, params: RequestParams = {}) =>
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
    });
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
  putVideosId = (id: string, data: PutVideosIdPayload, params: RequestParams = {}) =>
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
    });
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
  deleteVideosId = (id: string, params: RequestParams = {}) =>
    this.request<number, { error: { status?: number; name?: string; message?: string } }>({
      path: `/videos/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
