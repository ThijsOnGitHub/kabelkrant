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
