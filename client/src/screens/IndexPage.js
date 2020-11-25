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
        <h1>Index</h1>
    )
}

export default IndexPage;