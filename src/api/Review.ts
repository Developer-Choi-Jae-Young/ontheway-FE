/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  CreateData,
  ListData,
  ReviewListRequestDto,
  ReviewSaveRequestDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Review<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 후기
   * @name Create
   * @summary 후기 작성하기
   * @request POST:/review
   * @response `200` `CreateData` OK
   */
  create = (data: ReviewSaveRequestDto, params: RequestParams = {}) =>
    this.request<CreateData, any>({
      path: `/review`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 후기
   * @name List
   * @summary 내 후기 목록 조회
   * @request GET:/review/me/list
   * @response `200` `ListData` OK
   */
  list = (
    query: {
      reviewListRequestDto: ReviewListRequestDto;
    },
    params: RequestParams = {},
  ) =>
    this.request<ListData, any>({
      path: `/review/me/list`,
      method: "GET",
      query: query,
      ...params,
    });
}
