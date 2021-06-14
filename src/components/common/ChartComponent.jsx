import React, { useState } from 'react';
import LineChart from '../charts/Chart';
import DataRangeCalendar from '../common/DateRangeCalendar';

const ChartComponent = ({ date }) => {
    const headings = [
        { head: 'Heading1', num: '24,350' },
        { head: 'Heading2', num: '12,360' },
        { head: 'Heading3', num: '10,671' },
        { head: 'Heading4', num: '6,562' },
    ];

    const [open, setOpen] = useState(false);

    return (
        <div className="chart">
            <div className="chart-bg">
                <div className="chart-header">
                    <div className="font-bold text-title">Analytics</div>
                    <div className="chart-header-items">
                        <div className="calender" onClick={() => setOpen(!open)}>
                            <span>{date}</span>
                            <i className="fas fa-calendar" style={{ color: '#888787' }}></i>
                        </div>
                        <div className="btn-group">
                            {headings.map((heading, index) => {
                                return <div key={index} style={{ fontWeight: 'bold' }}>{heading.head}<br /><span style={{ color: '#aba8a8' }}>{heading.num}</span></div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="date-range-calendar">
                    <DataRangeCalendar
                        open={open}
                    />
                </div>
                <div className="chartjs">
                    <LineChart />
                </div>
            </div>
        </div>
    );
}

export default ChartComponent;