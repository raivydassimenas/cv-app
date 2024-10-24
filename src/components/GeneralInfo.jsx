import { useState } from "react";

import "./../styles/general-info-styles.css";

export default function GeneralInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [editMode, setEditMode] = useState(true)

    function generateGeneralInfo(event) {
        event.preventDefault();
        
        if (name !== '' && email !== '' && phone !== '')
            setEditMode(false);
    }

    return (
        <div>
            { editMode ?
            <form className="form-container" onSubmit={generateGeneralInfo}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <button type="submit">Save</button>
            </form>
            :
            <div classname="container">
                <h2>General Info</h2>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
            </div>
            }
        </div>
    )
}