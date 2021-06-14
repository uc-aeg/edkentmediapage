import React, { useState } from 'react'
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DateRangeCalendar = ({ open }) => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);

    return (
        <>
            { open && (
                <DateRangePicker
                    onChange={item => setState([item.selection])}
                    // showSelectionPreview={true}
                    editableDateInputs={true}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    ranges={state}
                    direction='horizontal'
                />
            )}
        </>
    );
}

export default DateRangeCalendar;