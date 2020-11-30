import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import './IndexPage.css'


function IndexPage() {

    const history = useHistory();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            history.push("/login");
        }
    });

    return (
        <>
            <div>
                <input className="bg-light-blue-500" type="search" placeholder="Search"></input>
                <button type="button"></button>
            </div>
    
            <div>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="w-1/2 px-4 py-2 text-light-blue-600">Name</th>
                        <th className="w-1/2 px-4 py-2 text-light-blue-600">Last Name</th>
                        <th className="w-1/2 px-4 py-2 text-light-blue-600">Phone Number</th>
                        <th className="w-1/2 px-4 py-2 text-light-blue-600">Email</th>
                        <th className="w-1/2 px-4 py-2 text-light-blue-600">Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="">
                        <td className="border border-blue-500 px-4 py-2 text-light-blue-600 font-medium">Andres</td>
                        <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">Leal</td>
                        <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">4421234567</td>
                        <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">andres@gmail.com</td>
                        <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">1221 Jackson St.</td>
                    </tr>
                    <tr className="bg-blue-200">
                        <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">Ana</td>
                        <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">Diaz</td>
                        <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">4421234567</td>
                        <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">ana@gmail.com</td>
                        <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">1221 Jackson St.</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </>
    )
}

export default IndexPage;
