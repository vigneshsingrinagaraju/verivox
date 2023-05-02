import TariffList from '../../api/model/TariffList';

export enum TariffActionTypes {
  FETCH_TARIFF_BEGIN   = 'FETCH_TARIFF_BEGIN',
  FETCH_TARIFF_SUCCESS = 'FETCH_TARIFF_SUCCESS',
  FETCH_TARIFF_FAILURE = 'FETCH_TARIFF_FAILURE',
  TARIFF_SORT = 'TARIFF_SORT'
} 

export interface FetchTariffListRequest {
  type: TariffActionTypes.FETCH_TARIFF_BEGIN;
}

export interface FetchTariffListSuccess {
  type: TariffActionTypes.FETCH_TARIFF_SUCCESS;
  payload: { tariffList: TariffList[]};
}

export interface FetchTariffListFailure {
  type: TariffActionTypes.FETCH_TARIFF_FAILURE;
  payload: { message: string };
}

export interface TariffSorting {
  type: TariffActionTypes.TARIFF_SORT;
  payload:{ field:string,sort:string}
}

export type TariffListActions =
  | FetchTariffListRequest
  | FetchTariffListSuccess
  | FetchTariffListFailure
  |TariffSorting

