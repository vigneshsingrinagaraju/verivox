import TariffList from '../model/TariffList';

const GetTariffListMock: TariffList[] = [{
        "id": 1,
        "tariffname": "Vodafone",
        "downloadspeed":30,
        "downloadspeedunit":"Mbit/s",
        "uploadspeed":20,
        "uploadspeedunit":"Mbit/s",
        "tariffbenefits":["Fiber Optic & Phone","Incl. landline flat rate","Personal Advisor","Onsite facility"],
        "tariffprice":26.70,
        "tariffpriceunit":"€"
}];

export default GetTariffListMock;
