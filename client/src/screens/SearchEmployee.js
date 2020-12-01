import React, { useState, useEffect } from 'react'

import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

import SearchBar from '../components/SearchBar';

import './IndexPage.css'


function IndexPage() {
    const [results, setResults] = useState([])
	const history = useHistory();
	const { name } = useParams();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            history.push("/login");
        }
        
        const getResults = async () => {
            await axios({
                url: `http://localhost:5000/employees/${name}`, 
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }).then((res) => {
                const response = res.data.message
                setResults(response)
            })
        }
        getResults()
    });

    return (
        <>
            {/* <div className="flex items-center justify-center w-full h-1/6 bg-blue-200">
                <input className="w-3/4 h-10 px-8 py-6 rounded-xl outline-none shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="search" placeholder="Search"></input>
                <button className="bg-blue-600 rounded-xl w-12 h-12 ml-3 shadow-xl transform transition hover:scale-90 focus:outline-none" type="button"><i className="text-white fas fa-search"></i></button>
            </div> */}
			<SearchBar />
    
            <div className="p-24">
            <table className="table-auto p-24">
                <thead>
                    <tr>
                        <th className="w-1/2 px-4 py-2 text-blue-600">Name</th>
                        <th className="w-1/2 px-4 py-2 text-blue-600">Last Name</th>
                        <th className="w-1/2 px-4 py-2 text-blue-600">Phone Number</th>
                        <th className="w-1/2 px-4 py-2 text-blue-600">Email</th>
                        <th className="w-1/2 px-4 py-2 text-blue-600">Address</th>
                        <th className="w-1/2 px-4 py-2 text-blue-600">Edit</th>
                        <th className="w-1/2 px-4 py-2 text-blue-600">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        results.map(employee => {
                            const {name, lastname, phone, email, address} = employee

                            return(
                                <tr className="">
                                    <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{name}</td>
                                    <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{lastname}</td>
                                    <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{phone}</td>
                                    <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{email}</td>
                                    <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{address}</td>
                                    <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium"><a href="/edit"><i class="fas fa-user-edit"></i></a></td>
                                    <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium"><a href="/delete"><i class="fas fa-minus-circle"></i></a></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
			<div className="flex items-center justify-content w-full mt-5">
				<a href="/" className="text-center w-full text-blue-600">Display all employees</a>
			</div>
            </div>
        </>
    )
}

export default IndexPage;
