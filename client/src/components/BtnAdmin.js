import React, {useContext} from 'react'
import { AdminContext } from '../Context/AdminContext'
import { Switch } from 'antd'

export default function BtnAdmin() {

    const {toggleAdmin, adminpage} = useContext(AdminContext)

  return (
    <div>
        <Switch
          checked={adminpage}
          checkedChildren="Admin"
          unCheckedChildren="User"
          onChange={toggleAdmin}
        />
    </div>
  )
}
