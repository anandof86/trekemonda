import axios from 'axios';
import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import { Modal } from 'react-bootstrap'
import agentConfig from '../config/bills';
import CreateBillsComponent from '../components/create/bills';
import InvoiceGenerator  from './create/invoice';
import url from '../config/url';

const BillComponent = () => {
    const [rowData, setRowData] = useState(null);
    const [column, setColumn] = useState(agentConfig);
    const [show, setShow] = useState(false);
    const [inshow, setInShow] = useState(false);
    const [gridApi, setGridApi] = useState(null);
    const [currentRow, setCurrentRow] = useState({})
    const [formStatus, setFormStatus] = useState('Add');
    const [sales, setSales] = useState({});
    const [party, setParty] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleInClose = () => setInShow(false);
    const handleInShow = () => setInShow(true);

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
            },{
                name: 'Generate Invoice',
                action: function () {
                    setCurrentRow(params.node.data);
                    handleInShow()
                }
            },
            {
                name: 'Delete',
                action: function () {
                    axios({
                        url: url.server+'api/bill/v1/beta/' + params.node.data.id,
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
            },
            'copy'
        ];
        return result;
    }

    useEffect(() => {
        getgriddetails()
    }, []);

    const getgriddetails = () => {
        axios({
            url: url.server+'api/bill/v1/beta',
            method: 'get',
            responseType: 'json',
            data: {
                "sale_unique_id" : "TmziNuuWrhQJ"
            },
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
        }).then(({ data }) => {
            if(data){
                setRowData(data.data);
            }else{
                setRowData([]);
            }
            setColumn(agentConfig)
            axios({
                url: 'http://3.109.40.48:8080/api/sales/v1/beta',
                method: 'get',
                responseType: 'json',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                },
            }).then(({ data }) => {
                setSales(data.data);
                axios({
                    url: 'http://3.109.40.48:8080/api/party/beta',
                    method: 'get',
                    responseType: 'json',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    },
                }).then(({ data }) => {
                    setParty(data.data);
                })
            })
        })
    }



    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Invoice Manager</h1>
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
                    <Modal.Title>Add/Edit Bill Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateBillsComponent getgriddetails={getgriddetails} party={party} sales={sales} formStatus={formStatus} currentRow={currentRow} handleClose={handleClose} />
                </Modal.Body>
            </Modal>

            <Modal show={inshow} size="xl" onHide={handleInClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Invoice Generator</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InvoiceGenerator getgriddetails={getgriddetails} party={party} sales={sales} formStatus={formStatus} currentRow={currentRow} handleClose={handleClose} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default BillComponent