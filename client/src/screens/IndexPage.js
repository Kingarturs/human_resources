import React, { useState, useEffect } from 'react'

import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './IndexPage.css'


function IndexPage() {
    const [employees, setEmployees] = useState([])
    const history = useHistory();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            history.push("/login");
        }
        
        const getEmployees = async () => {
            await axios({
                url: "http://localhost:5000/employees", 
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }).then((res) => {
                const response = res.data.message
                setEmployees(response)
            })
            // await axios.("http://localhost:5000/employees", {
            //     headers: {
            //         "Authorization": `Bearer ${localStorage.getItem("token")}`
            //     }
            // }).then(response => {
            //     console.log(response.json)
            // })
        }
        getEmployees()
    }, []);

    return (
        <>
            <div className="flex items-center justify-center w-full h-1/6 bg-blue-200">
                <input className="w-3/4 h-10 px-8 py-6 rounded-xl outline-none shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="search" placeholder="Search"></input>
                <button className="bg-blue-600 rounded-xl w-12 h-12 ml-3 shadow-xl transform transition hover:scale-90 focus:outline-none" type="button"><i className="text-white fas fa-search"></i></button>
            </div>
    
            <div className="p-24">
            <table className="table-auto p-24">
                <thead>
                    <tr>
                        <th className="w-1/2 px-4 py-2 text-blue-600">Name</th>
                        <th className="w-1/2 px-4 py-2 text-blue-600">Last Name</th>
                        <th className="w-1/2 px-4 py-2 text-blue-600">Phone Number</th>
                        <th className="w-1/2 px-4 py-2 text-blue-600">Email</th>
                        <th className="w-1/2 px-4 py-2 text-blue-600">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee => {
                            const {name, lastname, phone, email, address} = employee

                            return(
                                <tr className="">
                                    <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{name}</td>
                                    <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{lastname}</td>
                                    <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{phone}</td>
                                    <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{email}</td>
                                    <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{address}</td>
                                </tr>
                            )
                        })
                    }
                    {/* <tr className="">
                        <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">Andres</td>
                        <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">Leal</td>
                        <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">4421234567</td>
                        <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">andres@gmail.com</td>
                        <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">1221 Jackson St.</td>
                    </tr> */}
                </tbody>
            </table>
            <a href="/newEmployee">
                <button className="w-16 h-16 absolute bottom-12 right-12 transform transition hover:scale-90 hover:shadow-lg focus:outline-none rounded-full bg-blue-600 shadow-xl text-white">
                    <i className="fas fa-plus"></i>
                </button>
            </a>
            </div>
        </>
    )
}

export default IndexPage;
