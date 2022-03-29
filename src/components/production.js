import axios from 'axios';
import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import { Modal, Button } from 'react-bootstrap'
import agentConfig from '../config/production';
import CreateProductionComponent from '../components/create/production';

const ProductionComponent = () => {
    const [rowData, setRowData] = useState(null);
    const [id, setId] = useState(1);
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
                        url: 'http://3.109.40.48:8080/api/production/v1/beta/' + params.node.data.id,
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

    const onGridReady = (params) => {
        setGridApi(params.api);
    }

    useEffect(() => {
        if (id == null || id === '') {
            return;
        }
        getgriddetails()
    }, [id]);

    const getgriddetails = () => {
        axios({
            url: 'http://3.109.40.48:8080/api/production/v1/beta',
            method: 'get',
            responseType: 'json',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
        }).then(({ data }) => {
            if(data){
                setRowData(data);
            }else{
                setRowData([]);
            }
            
        })
    }



    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Production Manager</h1>
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
            <Modal show={show} size="xl" onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add/Edit Production Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateProductionComponent getgriddetails={getgriddetails} formStatus={formStatus} currentRow={currentRow} handleClose={handleClose} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ProductionComponent