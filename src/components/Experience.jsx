import { useState } from 'react';

import './../styles/experience-styles.css';

export default function Experience() {
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');
    const [editMode, setEditMode] = useState(true)

    function generateExperience(event) {
        event.preventDefault();
        
        if (company !== '' && position !== '' && startYear !== '' && endYear !== '')
            setEditMode(false);
    }

    return (
        <div>
            { editMode ?
            <form className="form-container" onSubmit={generateExperience}>
                <label htmlFor="company">Company</label>
                <input type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} />
                <label htmlFor="position">Position</label>
                <input type="text" id="position" value={position} onChange={(e) => setPosition(e.target.value)} />
                <label htmlFor="start-year">Start Year</label>
                <input type="number" id="start-year" value={startYear} onChange={(e) => setStartYear(e.target.value)} />
                <label htmlFor="end-year">End Year</label>
                <input type="number" id="end-year" value={endYear} onChange={(e) => setEndYear(e.target.value)} />
                <button type="submit">Save</button>
            </form>
            :
            <div className="container">
                <h2>Experience</h2>
                <p>Company: {company}</p>
                <p>Position: {position}</p>
                <p>Start Year: {startYear}</p>
                <p>End Year: {endYear}</p>
                <button onClick={() => setEditMode(true)}>Edit</button>
            </div>
            }
        </div>
    )
}