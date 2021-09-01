import React , {useState} from 'react';
import './Search.css';
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
function Search(){
    const [startDate , setStartDate]=useState(new Date());
    const [endDate , setEndtDate]=useState(new Date());

    const selectionRange = {
        startDate:startDate,
        endDate:endDate,
        key:"selection",
    };
    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndtDate(ranges.selection.endDate);
    }
    return (
        <div className="Search">
            <DateRangePicker ranges={
            [selectionRange]} onChange=
            {handleSelect} />
        </div>
    )
}

export default Search;