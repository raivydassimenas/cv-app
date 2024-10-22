import { useState } from "react";

export default function GeneralInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [editMode, setEditMode] = useState(true)

    function generateGeneralInfo() {
        
    }

    return (
        <div>
            { editMode ?
            <form action={generateGeneralInfo}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <button type="submit">Save</button>
            </form>
            :
            null
            }
        </div>
    )
}