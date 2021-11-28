import React, {useState, useEffect} from 'react';
import useFetch from 'use-http'
import {Table} from "antd";
import Input from '../Input/Input'
// import Row from './Row/Row'
import './style.scss'

const TableData = () => {
    const [mainData, setMainData] = useState([])
    const { get, post, response, loading, error } = useFetch('http://localhost:3000')
    const data = [
        {
            "healthIndex": 85,
            "endDate": null,
            "minValueDateTime": 1514844000,
            "type": "systemHealth",
            "cowId": 636,
            "animalId": "624",
            "eventId": 34720,
            "deletable": false,
            "lactationNumber": 4,
            "daysInLactation": 92,
            "ageInDays": 2101,
            "startDateTime": 1514844000,
            "reportingDateTime": 1514844938,
            "id": "c7c75866-ea22-4fa8-bde9-81893d40eab2"
        },
        {
            "healthIndex": 85,
            "endDate": null,
            "minValueDateTime": 1514844000,
            "type": "systemHealth",
            "cowId": 809,
            "animalId": "871",
            "eventId": 34719,
            "deletable": false,
            "lactationNumber": 1,
            "daysInLactation": 357,
            "ageInDays": 1075,
            "startDateTime": 1514844000,
            "reportingDateTime": 1514844929,
            "id": "9ec3e881-b771-418c-8212-9f7c6b8f9303"
        },
    ]
    const columns = [
        {
            title: 'HealthIndex',
            dataIndex: 'healthIndex',
            key: 'healthIndex',
            render: text => <Input placeholder={text}/>
        },
        {
            title: 'EndDate',
            dataIndex: 'endDate',
            key: 'endDate',
            render: text => <Input placeholder={text}/>
        },
        {
            title: 'MinValueDateTime',
            dataIndex: 'minValueDateTime',
            key: 'minValueDateTime',
            render: text => <Input placeholder={text}/>
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            render: text => <Input placeholder={text}/>
        },
        {
            title: 'CowId',
            dataIndex: 'cowId',
            key: 'cowId',
            render: text => <Input placeholder={text}/>
        },
        {
            title: 'AnimalId',
            dataIndex: 'animalId',
            key: 'animalId',
            render: text => <Input placeholder={text}/>
        },
        {
            title: 'EventId',
            dataIndex: 'eventId',
            key: 'eventId',
            render: text => <Input placeholder={text}/>
        },
        {
            title: 'Deletable',
            dataIndex: 'deletable',
            key: 'deletable',
            render: text => <Input placeholder={text}/>
        },
        {
            title: 'LactationNumber',
            dataIndex: 'lactationNumber',
            key: 'lactationNumber',
            render: text => <Input placeholder={text}/>
        },
        {
            title: 'DaysInLactation',
            dataIndex: 'daysInLactation',
            key: 'daysInLactation',
            render: text => <Input placeholder={text}/>
        },
        {
            title: 'AgeInDays',
            dataIndex: 'ageInDays',
            key: 'ageInDays',
            render: text => <Input placeholder={text}/>
        },
        {
            title: 'StartDateTime',
            dataIndex: 'startDateTime',
            key: 'startDateTime',
            render: text => <Input placeholder={text}/>
        },
        {
            title: 'ReportingDateTime',
            dataIndex: 'reportingDateTime',
            key: 'reportingDateTime',
            render: text => <Input placeholder={text}/>
        },
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            render: text => <Input placeholder={text}/>
        },
    ]

    useEffect(() => { loadInitialTodos() }, [])

    async function loadInitialTodos() {
        const initialTodos = await get('/result')
        if (response.ok) setMainData(initialTodos)
    }

    /*const [tableData, settableData] = useState(data)

    const getElements = async () => {
        try {
            const {body} = await ThisApi.getResource()
            const data = await body.json()
            console.log(555, data)
            // settableData(response)
        } catch (error) {
            console.log(111, error)
        }
    }

    useEffect(() => {
        getElements();
    }, [getElements])*/

    return (
        <div className="table">
            <div className="table__content">
                <Table dataSource={data} columns={columns}/>
                {mainData && <pre>{JSON.stringify(mainData, null, 2)}</pre>}
            </div>
        </div>
    )
}

export default TableData