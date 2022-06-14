import React from 'react'
import DateTimeDisplay from './DateTimeDisplay'

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
    <div className='show-counter'>
        <span style={{display: "flex", padding: "8em"}}>
            <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
            <p>:</p>
            <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
            <p>:</p>
            <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
            <p>:</p>
            <DateTimeDisplay value={seconds} type={'Seoonds'} isDanger={false} />
        </span>
    </div>
  )
}

export default ShowCounter