import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
interface DropDownToSortProps {
    dropdownlist: string[];
    onDopdownSelect: (data: any) => void;
}
function DropDownToSort({ dropdownlist, onDopdownSelect }: DropDownToSortProps) {
    const [finalDropdonList, setfinalDropdonList] = useState<any>([]);

    //Method to prepeare the dropdown options
    const prepareDropDownList = () => {
        let dropdownData: any = []
        dropdownlist.forEach(function (value) {
            let eachAscendingOption = {
                "displaytext": value + "- ascending",
                "field": value,
                "sort": "asc"
            }
            let eachDescendingOption = {
                "displaytext": value + "- descending",
                "field": value,
                "sort": "dsc"
            }
            dropdownData.push(eachAscendingOption)
            dropdownData.push(eachDescendingOption)
        });
        setfinalDropdonList(dropdownData)
        onDopdownSelect(dropdownData[0])
    }
    useEffect(() => {
        prepareDropDownList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <Form.Select aria-label="Default select example" onChange={(e: any) => { onDopdownSelect(finalDropdonList[e.target.value]) }}>
                {finalDropdonList.map((eachoption: any, rowindex: number) => (
                    <option key={eachoption.displaytext + eachoption.field + rowindex} value={rowindex}>{eachoption.displaytext}</option>
                ))}
            </Form.Select>
        </>
    );
}
export default DropDownToSort;
