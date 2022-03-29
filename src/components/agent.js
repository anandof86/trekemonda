import axios from 'axios';
import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import { Modal } from 'react-bootstrap'
import agentConfig from '../config/agent';
import CreateAgentComponent from '../components/create/agent';
import url from '../config/url';

const AgentComponent = () => {
    const [rowData, setRowData] = useState(null);
    const [column, setColumn] = useState(agentConfig);
    const [show, setShow] = useState(false);
    const [gridApi, setGridApi] = useState(null);
    const [currentRow, setCurrentRow] = useState({})
    const [formStatus, setFormStatus] = useState('Add');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const create = () => {
        setFormStatus('Add')
        setCurrentRow({})
        handleShow()
    }
    const onGridReady = (params) => {
        setGridApi(params.api);
    }

    const getContextMenuItems = (params) => {
        const {
            api
        } = params;
        var result = [
            {
                name: 'Edit',
                action: function () {
                    setCurrentRow(params.node.data);
                    setFormStatus('Edit');
                    handleShow()
                }
            }, {
                name: 'Print Report',
                action: () => {
                    api.exportDataAsExcel();
                }
            },
            {
                name: 'Delete',
                action: function () {
                    axios({
                        url: url.server + 'api/agent/beta/' + params.node.data.id,
                        method: 'delete',
                        responseType: 'json',
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        },
                    }).then(({ data }) => {
                        getgriddetails()
                    })
                }
            },
            {
                name: 'Refresh grid',
                action: function () {
                    getgriddetails()
                }
            }
        ];
        return result;
    }

    useEffect(() => {
        getgriddetails()
    }, []);

    const getgriddetails = () => {
        axios({
            url: url.server + 'api/agent/beta',
            method: 'get',
            responseType: 'json',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
        }).then(({ data }) => {
            setRowData(data.data);
            setColumn(agentConfig)
        })
    }



    return (
        <div class="card">
            <div class="card-header">
                <h4>Supplier Manager <div class="float-end"><button className="btn btn-block btn-dark btn-sm" onClick={create}><i class="bi bi-plus"></i> CREATE</button></div></h4> 
            </div>
            <div class="card-body">
                <div className="ag-theme-alpine"
                    style={{
                        height: '600px',
                        width: '100%'
                    }}>
                    <AgGridReact
                        defaultColDef={{
                            flex: 1,
                            minWidth: 150,
                            sortable: true,
                            resizable: true
                        }}
                        pagination={true}
                        floatingFilter={true}
                        enableRangeSelection={true}
                        paginationPageSize={20}
                        cacheBlockSize={100}
                        maxBlocksInCache={10}
                        allowContextMenuWithControlKey={true}
                        animateRows={true}
                        columnDefs={column}
                        onGridReady={params => onGridReady(params)}
                        getContextMenuItems={getContextMenuItems}
                        rowData={rowData}>
                    </AgGridReact>
                </div>
            </div>
            <Modal show={show} size="lg" onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add/Edit Supplier Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateAgentComponent getgriddetails={getgriddetails} formStatus={formStatus} currentRow={currentRow} handleClose={handleClose} />
                </Modal.Body>
            </Modal>
        </div>
       
    )
}

export default AgentComponent