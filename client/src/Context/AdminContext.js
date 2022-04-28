import React, {createContext, useState} from 'react'

export const AdminContext = createContext()

const AdminProvider = (props) => {
    const [adminpage, setAdminPage] = useState(false)
    const toggleAdmin = () => {
        setAdminPage(!adminpage)
    }

    return (
        <AdminContext.Provider value={{adminpage, toggleAdmin}}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminProvider;