import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewVisitor = () => {

    const [logData, setData] = new useState([])

    const getData=()=>{
        axios.get('http://localhost:3001/api/visitor/view').then((response)=>{
            setData(response.data)
        })
    }
    useEffect(()=>{getData()},[])

    return (
        <div>

            <NavBar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table className="table table-warning">
                            <thead>
                                <tr>
                                    <th scope="col">Visitor Name</th>
                                    <th scope="col">Phone No</th>
                                    <th scope="col">Purpose</th>
                                    <th scope="col">Aadhar No</th>
                                    <th scope="col">Place</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                              {
                                logData.map(
                                    (value,index)=>{
                                        return  <tr>
                                        <th scope="row">{value.vistorName}</th>
                                        <td>{value.vistorPhone}</td>
                                        <td>{value.PurposeOfVisit}</td>
                                        <td>{value.vistorAadhar}</td>
                                        <td>{value.vistorPhone}</td>
                                    </tr>
                                    }
                                    
                                )
                              }
                               
                               
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewVisitor