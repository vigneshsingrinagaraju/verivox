import {
  TariffListActions,
  TariffActionTypes
} from '../actions/TariffActions';
import TariffListState from '../state/TariffListState'
import SortingService from '../../services/SortingService';


export const initialTariffState: TariffListState = {
  tariffList: [],
  isFetching: false,
  message:""
} 

export function tariffListReducer(
  state = initialTariffState,
  action: TariffListActions
) {
  switch (action.type) {
    case TariffActionTypes.FETCH_TARIFF_BEGIN:
      return { ...state, isFetching: true };
    case TariffActionTypes.FETCH_TARIFF_SUCCESS:
      return { ...state, tariffList: action.payload.tariffList, isFetching: false };
    case TariffActionTypes.FETCH_TARIFF_FAILURE:
      return { ...state,message:action.payload.message, isFetching: false };
    case TariffActionTypes.TARIFF_SORT:
      return { ...state, tariffList: SortingService(state.tariffList, action.payload) };
    default:
      return state;
  }
}
