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
                <input type="search" placeholder="Search"></input> 
                <button type="button"></button>
            </div>
    
            <div>
                <table class="table-auto"> 
                    <thread>
                        <tr>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Adress</th>
                        </tr>
                    </thread>
                </table> 
            </div>
        </>
    )
}

export default IndexPage;
