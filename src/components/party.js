import axios from 'axios';
import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import { Modal } from 'react-bootstrap'
import agentConfig from '../config/agent';
import CreatePartyComponent from '../components/create/party';
import url from '../config/url';

const PartyComponent = () => {
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
            },{
                name: 'Print Report',
                action: () => {
                    api.exportDataAsExcel();
                }
            },
            {
                name: 'Delete',
                action: function () {
                    axios({
                        url: url.server+'api/party/beta/' + params.node.data.id,
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
            url: url.server+'api/party/beta',
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
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Party Manager</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><button className="btn btn-block btn-primary btn-sm" onClick={create}>Create</button></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <section className="content">
                <div className="card">
                    <div className="card-body row">
                        <div className="ag-theme-alpine"
                            style={{
                                height: '520px',
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
                </div>
            </section>
            <Modal show={show} size="lg" onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add/Edit Party Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreatePartyComponent getgriddetails={getgriddetails} formStatus={formStatus} currentRow={currentRow} handleClose={handleClose} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default PartyComponent