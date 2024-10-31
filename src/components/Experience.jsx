import { useState } from 'react';

import './../styles/experience-styles.css';

export default function Experience() {
    const [exp, setExp] = useState([]);
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');
    const [editMode, setEditMode] = useState(true)

    function addExperience(event) {
        event.preventDefault();
        
        if (company !== '' && position !== '' && startYear !== '' && endYear !== '') {
            const exp_item = {
                company,
                position,
                startYear,
                endYear
            };
            setExp([...exp, exp_item])
            setCompany('');
            setPosition('');
            setStartYear('');
            setEndYear('');
        }
    }

    function generateExperience(event) {
        event.preventDefault();
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
                <button onClick={addExperience}>Add</button>
                <button type="submit">Submit</button>
            </form>
            :
            <div className="container">
                <h2>Experience</h2>
                {exp.map((item, index) => {
                    return (
                        <div key={index} className="experience-item">
                            <h3>{item.company}</h3>
                            <p>{item.position}</p>
                            <p>{item.startYear} - {item.endYear}</p>
                        </div>
                    )
                })}
                <button onClick={() => setEditMode(true)}>Edit</button>
            </div>
            }
        </div>
    )
}