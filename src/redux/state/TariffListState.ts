import TariffList from '../../api/model/TariffList';

export default interface TariffListState {
  tariffList: TariffList[],
  isFetching: boolean,
  message:string
} 
