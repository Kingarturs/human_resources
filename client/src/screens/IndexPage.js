import React, { useState, useEffect } from 'react'

import { useHistory } from 'react-router-dom';
import axios from 'axios';

import SearchBar from '../components/SearchBar';
import Table from '../components/Table';

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
            <SearchBar />
            <div className="p-24">
            <Table employees={employees} /> 
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
