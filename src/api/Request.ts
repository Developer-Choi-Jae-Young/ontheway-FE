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
  Create1Data,
  DeliveryRequestListData,
  RequestSaveRequestDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Request<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 물품 의뢰 요청
   * @name Create1
   * @summary 물품 의뢰 요청하기
   * @request POST:/request
   * @response `200` `Create1Data` OK
   */
  create1 = (data: RequestSaveRequestDto, params: RequestParams = {}) =>
    this.request<Create1Data, any>({
      path: `/request`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 물품 의뢰 요청
   * @name DeliveryRequestList
   * @summary 이동 경로 게시글 상세 > 의뢰 요청 목록 조회
   * @request GET:/request/list/{deliveryId}
   * @response `200` `DeliveryRequestListData` OK
   */
  deliveryRequestList = (deliveryId: number, params: RequestParams = {}) =>
    this.request<DeliveryRequestListData, any>({
      path: `/request/list/${deliveryId}`,
      method: "GET",
      ...params,
    });
}
