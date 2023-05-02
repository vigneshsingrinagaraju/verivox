import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  TariffActionTypes,
  FetchTariffListRequest,
  FetchTariffListSuccess,
  FetchTariffListFailure,
  TariffSorting
} from './TariffActions';
import HTTPService from '../../services/HTTPService';
import UrlConstant from '../../constants/URLConstants';
import TariffList from '../../api/model/TariffList';
import TariffListState from '../state/TariffListState';
 
//Fetch Tariff List action creator
export const fetchTariffListBegin = (): FetchTariffListRequest => {
  return {
    type: TariffActionTypes.FETCH_TARIFF_BEGIN
  };
}

//Fetch Tariff List Success action creator
export const fetchTariffListSuccess = (results: TariffList[]): FetchTariffListSuccess => {
  return {
    type: TariffActionTypes.FETCH_TARIFF_SUCCESS,
    payload: { tariffList: results }
  };
}

//Fetch Tariff List Failure action creator
export const fetchTariffListFailure = (error: string): FetchTariffListFailure => {
  return {
    type: TariffActionTypes.FETCH_TARIFF_FAILURE,
    payload: { message: error }
  };
}

// Tariff List Sort action creator
export const tariffSorting = (data: any): TariffSorting => {
  return {
    type: TariffActionTypes.TARIFF_SORT,
    payload: { field: data.field, sort: data.sort }
  };
}

// To fetch Tariff List from the API
export const fetchTariffList = (): ThunkAction<Promise<void>, TariffListState, null, Action<string>> => {
  return (dispatch: any) => {
    dispatch(fetchTariffListBegin());
    return HTTPService("GET", UrlConstant.base_url + UrlConstant.tariffList).then((response) => {
      dispatch(fetchTariffListSuccess(response['data']))
    })
      .catch((e) => {
        alert(e['message'])
        dispatch(fetchTariffListFailure(e['message']))
      });
  };
};

// To sorr the Tariff List
export const sortTariffList = (sortingparameters: any): ThunkAction<void, TariffListState, null, Action<string>> => {
  return (dispatch: any) => {
    dispatch(tariffSorting(sortingparameters));
  };
};

