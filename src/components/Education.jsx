import { useState } from 'react';

import './../styles/education-styles.css';

export default function Education() {
    const [school, setSchool] = useState('');
    const [degree, setDegree] = useState('');
    const [graduationYear, setGraduationYear] = useState('');
    const [editMode, setEditMode] = useState(true)

    function generateEducation(event) {
        event.preventDefault();
        
        if (school !== '' && degree !== '' && graduationYear !== '')
            setEditMode(false);
    }

    return (
        <div>
            { editMode ?
            <form className="form-container" onSubmit={generateEducation}>
                <label htmlFor="school">School</label>
                <input type="text" id="school" value={school} onChange={(e) => setSchool(e.target.value)} />
                <label htmlFor="degree">Degree</label>
                <input type="text" id="degree" value={degree} onChange={(e) => setDegree(e.target.value)} />
                <label htmlFor="graduation-year">Graduation Year</label>
                <input type="number" id="graduation-year" value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} />
                <button type="submit">Save</button>
            </form>
            :
            <div className="container">
                <h2>Education</h2>
                <p>School: {school}</p>
                <p>Degree: {degree}</p>
                <p>Graduation Year: {graduationYear}</p>
                <button onClick={() => setEditMode(true)}>Edit</button>
            </div>
            }
        </div>
    )
}