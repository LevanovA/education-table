import Table from '../../Components/Table/Table'
import Header from '../../Components/Header/Header'
import 'antd/dist/antd.css'
import './style.scss'
import React from "react";

const App = () => {
    return (
        <React.StrictMode>
            <div className="grid">
                <Header/>
                <Table/>
            </div>
        </React.StrictMode>
    )
}

export default App;
