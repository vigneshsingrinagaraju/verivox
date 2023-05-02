export default interface TariffList {
    id: number;
    tariffname: string,
    downloadspeed: number,
    downloadspeedunit: string,
    uploadspeed: number,
    uploadspeedunit: string,
    tariffbenefits: string[],
    tariffprice: number,
    tariffpriceunit: string
}