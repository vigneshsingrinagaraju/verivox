import React from 'react';
import { shallow } from 'enzyme';
import TariffCard from './TariffCard';
import GetTariffListMock from '../../api/rest/GetTariffListMock';

describe("TariffCard", () => {

    it("should render Tariff Card details", () => {

        const GetTariffList = GetTariffListMock[0];
        const wrapper = shallow(<TariffCard tariff={GetTariffList} index={1} />);

        const text = wrapper.text();
        console.log(text)
        expect(text.includes(GetTariffList.tariffname)).toBe(true);
        expect(text.includes(GetTariffList.downloadspeed.toString())).toBe(true);
        expect(text.includes(GetTariffList.downloadspeedunit)).toBe(true);
        expect(text.includes(GetTariffList.uploadspeed.toString())).toBe(true);
        expect(text.includes(GetTariffList.uploadspeedunit)).toBe(true);
        expect(text.includes(GetTariffList.tariffprice.toString())).toBe(true);
        expect(text.includes(GetTariffList.tariffpriceunit)).toBe(true);
        GetTariffList.tariffbenefits.forEach(benefit =>
            expect(text.includes(benefit)).toBe(true));
    })
}); 
