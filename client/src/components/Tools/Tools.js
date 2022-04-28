import React, { useState, useEffect, useContext } from "react";
import "./Tools.css"
import '../../../node_modules/antd/dist/antd.min.css'
import Axios from "axios"
import {
  Alert,
  Form,
  Input,
  Button,
  Select,
  DatePicker
} from 'antd';

import AdminProvider, { AdminContext } from "../../Context/AdminContext";

const { Search } = Input;
const { Option } = Select;

export default function Tools() {
  
  const {adminpage} = useContext(AdminContext)

  const [id, setId] = useState('')
  const [spie, setSpie] = useState('')
  const [num, setNum] = useState('')
  const [ref, setRef] = useState('')
  const [sn, setSn] = useState('')
  const [userid, setUserid] = useState('')
  const [attrib, setAttrib] = useState('*')
  const [design, setDesign] = useState('')
  const [rev, setRev] = useState('')
  const [obs, setObs] = useState('')
  const [idlist, setIdlist] = useState([])
  const [userslist, setUserslist] = useState([])
  const [user, setUser] = useState([])
  const [companylist, setCompanylist] = useState([])
  const [company, setCompany] = useState([])
  const [searchcol, setSearchcol] = useState('')
  const [searchspie, setSearchspie] = useState('')
  const [updateid, setUpdateId] = useState('')
  const [update, setUpdate] = useState('')
  const [updatecde, setUpdateCde] = useState('')
  const [error, setError] = useState(null)
  
  useEffect (() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setIdlist(response.data)
    }).catch(err=>{
      setError(err)
    })

    Axios.get("http://localhost:3001/api/get_users").then((response) => {
      setUserslist(response.data)
    }).catch(err=>{
      setError(err)
    })

    Axios.get("http://localhost:3001/api/get_company").then((response) => {
      setCompanylist(response.data)
    }).catch(err=>{
      setError(err)
    })
    setUpdateCde('0')
  },[updatecde])
  
  // console.log(process.env)
  
  const submitId = async () => {
    await Axios.post("http://localhost:3001/api/insert", {
      spie : spie,
      num : num,
      ref : ref,
      design : design,
      obs : obs,
      sn : sn,
      rev : rev,
      userid :userid,
      attrib : attrib
    });
    setIdlist([
      ...idlist,
      {
        spie : spie,
        num : num,
        ref : ref,
        design : design,
        obs : obs,
        sn : sn,
        rev : rev,
        userid : userid,
        attrib : attrib
      }
    ])
  }

  const btdeleteId = async (id) => {
    await Axios.delete(`http://localhost:3001/api/delete/${id}`)
}

const btupdateId = async (id) => {
  await Axios.put("http://localhost:3001/api/update", {
    id : id,
    updateid : updateid,
    update : update,
  })
  .then (
    console.log("Updated", update, id),
    setUpdateId(''),
    setUpdate(''),
    setUpdateCde('1')
    )
  }
  
  const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 32,
  },
};

const onNumChange = (value) => {
  setNum(value)
}

const onUserChange = (value) => {
  setUserid(value)
}

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const onRevChange = (date, dateString) => {
  setRev(dateString)
}

const onSetRevChange = (date, dateString) => {
  setUpdate(dateString)
}

const handleChangeCol = (value) => {
  setSearchcol(value)
  
  const company = companylist.sort((a,b) => a.num > b.num ? 1 : -1)
  setCompany(company)

  const user = userslist.sort((a,b) => a.lastname > b.lastname ? 1 : -1)
  setUser(user)
}

const onSearch = (value) => {
  setSearchspie(value)
}

const handleChangeUpdateId = (value) => {
  setUpdateId(value)
}

const handleChangeUser = (value, val) => {
  setUpdate(val.key)
}

return (
  <main className='main article'>
  <Form {...layout} name="control-ref">
    {error !== null? <Alert message="Error" type="warning" showIcon/> : <></>}
    <div className="app">
      <div className="header">
      </div>
        <div className="card">
            <h4>GESTION DE L'OUTILLAGE</h4>
                <div className="card2">
                  <Form
                    warpperCol = {{
                      span:4
                    }}
                  >
                    <Form.Item
                      label="Sélectionner une option de tri"
                    >
                      <Select 
                        placeholder ="Select by:"
                        onChange = {handleChangeCol}
                        style={{width:250, marginRight: 10}}>
                        <Option value="spie">N° ID SPIE</Option>
                        <Option value="num">FABRIQUANT</Option>
                        <Option value="userid">ATTRIBUE A</Option>
                      </Select>
                    </Form.Item>
                  </Form>
                <div>
                    { searchcol === "spie"?
                      <Search
                        placeholder="input search"
                        allowClear
                        enterButton="search"
                        size="middle"
                        onSearch={onSearch}
                        style={{width:250}}
                      />
                      : <></>
                    }
                    { searchcol === "userid"?
                          <Form.Item
                            name="userid"
                            rules={[{required: true,},]}
                          >
                            <Select
                              placeholder="Select a name"
                              value={id.lastname}
                              onChange={onSearch}
                              style={{width:200, marginRight: 10}}
                            >
                            {user.map((val) => (
                              <Select.Option key={val.id} value={val.lastname}>{val.lastname}</Select.Option>
                            ))
                            }
                            </Select>
                          </Form.Item>
                          : <></>
                    }
                    { searchcol === "num"?
                          <Form.Item
                          name="num"
                          rules={[{required: true,},]}
                          >
                          <Select
                            placeholder="Select a company"
                            value={id.num}
                            onChange={onSearch}
                            style={{width:200, marginRight: 10}}
                            >
                          {company.map((val) => (
                            <Select.Option key={val.num} value={val.num}>{val.num}</Select.Option>
                            ))
                          }
                          </Select>
                          </Form.Item>
                          : <></>
                        }
                  </div>
                </div>
{/* ADD */}
                { adminpage === true ? 
                  <div className="card1">
                    <div className="card3">
                          <table>
                            <thead>
                              <tr>
                                <th>N° Spie</th>
                                <th>Marque</th>
                                <th>Type</th>
                                <th>Désignation</th>
                                <th>Commentaire</th>
                                <th>N.Série</th>
                                <th>Validité</th>
                                <th>Attribué à:</th>
                                <th>Nom:</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <Form.Item
                                      onChange={(e) => {setSpie(e.target.value)}}
                                      name="spie"
                                      rules={[{required: true,},]}
                                      
                                      >
                                      <Input
                                      placeholder="N° Identification Spie"
                                      maxLength={20}
                                      />
                                  </Form.Item>
                                </td>
                                <td>
                                  <Form.Item
                                    name="num"
                                    rules={[{required: true,},]}
                                  >
                                    <Select
                                      placeholder="Marque / Fourn."
                                      value={id.num}
                                      onChange={onNumChange}
                                      >
                                      {company.map((id) => (
                                        <Select.Option key={id.num} value={id.num}>{id.num}</Select.Option>
                                        ))
                                      }
                                    </Select>
                                  </Form.Item>
                                </td>
                                <td>
                                  <Form.Item >
                                    <Input type="text" name="ref" onChange={(e) => {
                                      setRef(e.target.value)
                                    }}/>
                                  </Form.Item>
                                </td>
                                <td>
                                  <Form.Item>
                                    <Input type="text" name="design" onChange={(e) => {
                                      setDesign(e.target.value)
                                    }}/>
                                  </Form.Item>
                                </td>
                                <td>
                                  <Form.Item>
                                    <Input type="text" maxLength={20} name="obs" onChange={(e) => {
                                      setObs(e.target.value)
                                    }}/>
                                  </Form.Item>
                                </td>
                                <td>
                                  <Form.Item>
                                    <Input type="text"  name="sn" onChange={(e) => {
                                      setSn(e.target.value)
                                    }}/>
                                  </Form.Item>
                                </td>
                                <td>
                                  <Form.Item>
                                    <DatePicker type="text" name="rev" onChange={onRevChange}/>
                                  </Form.Item>
                                </td>
                                <td>
                                <Form.Item
                                    name="userid"
                                    rules={[{required: true,},]}
                                  >
                                    <Select
                                      placeholder="Attribué à:"
                                      value={id.lastname}
                                      onChange={onUserChange}
                                      >
                                      {user.map((val) => (
                                        <Select.Option key={val.id} value={val.lastname}>{val.lastname}</Select.Option>
                                        ))
                                      }
                                    </Select>
                                  </Form.Item>
                                </td>
                                <td>
                                  <Form.Item>
                                    <Input type="text" maxLength={20} name="attrib" onChange={(e) => {
                                      setAttrib(e.target.value)
                                    }}/>
                                  </Form.Item>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                    </div>
                    <Form.Item>
                      <Button type="primary" onClick={submitId}>Submit</Button>
                    </Form.Item>
                  </div> : <></>}
{/* Tableau final */}
          {idlist.filter((val) => {
                if (searchcol === "spie" && val.spie.toLocaleLowerCase().includes(searchspie.toLocaleLowerCase())) {
                  return val
                }
                else if (searchcol === "num" && val.num.toLocaleLowerCase().includes(searchspie.toLocaleLowerCase())) {
                  return val
                }
                else if (searchcol === "userid" && val.userid.toLocaleLowerCase().includes(searchspie.toLocaleLowerCase())) {
                  return val
                }
                return false
          }).map((val) => {
            return (
              <div className="card1" key={val.id}>
                <div className="card3">
                    <table>
                      <thead>
                        <tr>
                          <th>N°</th>
                          <th>Marque</th>
                          <th>Type</th>
                          <th>Désignation</th>
                          <th>Commentaire</th>
                          <th>N.Série</th>
                          <th>Validitée</th>
                          <th>Attribué à</th>
                          { {adminpage} === true ? <th>Nom</th>:<></>}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><h4>{val.spie}</h4></td>
                          <td><h4>{val.num}</h4></td>
                          <td><h4>{val.ref}</h4></td>
                          <td><h4>{val.design}</h4></td>
                          <td><h4>{val.obs}</h4></td>
                          <td><h4>{val.sn}</h4></td>
                          <td><h4>{val.rev}</h4></td>
                          <td><h4>{val.userid}</h4></td>
                          { {adminpage} === true ? <td><h4>{val.attrib}</h4></td>:<></>}
                        </tr>
                      </tbody>
                    </table>
                </div>
{/* Card Update */}
                  { adminpage === true ?
                    <>
                      <div className="card2">
                        <tr>
                          <td><h4>MODIFICATION</h4></td>
                        </tr>
                      </div>
                      <div className="card2">
                        <Select
                          showSearch
                          placeholder ="Select Option"
                          // value={updateid}
                          onChange = {handleChangeUpdateId}
                          style={{width:250, marginRight: 10}}
                        >
                          <Option value="spie">N° Spie</Option>
                          <Option value="num">Marque</Option>
                          <Option value="ref">Type</Option>
                          <Option value="design">Désignation</Option>
                          <Option value="obs">Commentaire</Option>
                          <Option value="sn">N° de série</Option>
                          <Option value="rev">Validitée</Option>
                          <Option value="userid">Attribué à:</Option>
                        </Select>
                        { updateid === "rev" ?
                          <Form.Item>
                            <DatePicker format={dateFormatList} type="text" name="rev" onChange={onSetRevChange}/>
                          </Form.Item> : <></>
                        }
                        { updateid === "userid" ?
                          <Form.Item
                            name="userid"
                            rules={[{required: true,},]}
                          >
                          <Select
                            placeholder="Select a name"
                            value={id.lastname}
                            onChange={handleChangeUser}
                            style={{width:200, marginRight: 10}}
                          >
                            {userslist.map((val) => (
                                <Select.Option key={val.id} value={val.lastname}>{val.lastname}</Select.Option>
                              ))
                            }
                          </Select>
                          </Form.Item> : <></>
                        }
                        { updateid === "spie" || "ref" || "design" || "obs" || "sn" ?
                          <Form.Item>
                            <Input value={update} onChange={(e) => {setUpdate(e.target.value)}}/>
                          </Form.Item> : <></>
                        }
                        <Form.Item>
                          <Button type="primary" ghost onClick={() => {btupdateId(val.id)}}>Update</Button>
                        </Form.Item>
                        <Form.Item>
                          <Button type="primary" danger ghost onClick={() => {btdeleteId(val.id)}}>Delete</Button>
                        </Form.Item>
                      </div>
                    </> : <></>
                    }
              </div>
            )
          })}
        </div>
      </div>
    </Form>


  </main>

  );
}