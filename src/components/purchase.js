import axios from 'axios';
import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import { Modal } from 'react-bootstrap'
import bagConfig from '../config/purchase';
import PurchaseCreateComponent from '../components/create/purchase';
import PurchaseView from './view/purchaseView';

const PurchaseComponent = () => {
    const [rowData, setRowData] = useState(null);
    const [id, setId] = useState(1);
    const [column, setColumn] = useState(bagConfig);
    const [show, setShow] = useState(false);
    const [vshow, setVshow] = useState(false);
    const [gridApi, setGridApi] = useState(null);
    const [currentRow, setCurrentRow] = useState({})
    const [formStatus, setFormStatus] = useState('Add');
    const [bagType, setBagType] = useState({});
    const [agent, setAgent] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleVClose = () => setVshow(false);
    const handleVShow = () => setVshow(true);

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
                name: 'View ',
                action: function () {
                    setCurrentRow(params.node.data);
                    handleVShow()
                }
            },
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
                        url: 'http://3.109.40.48:8080/api/purchase/v1/beta/' + params.node.data.id,
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
        if (id == null || id === '') {
            return;
        }
        getgriddetails()
    }, [id]);

    const getgriddetails = () => {
        axios({
            url: 'http://3.109.40.48:8080/api/purchase/v1/beta',
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
            
            axios({
                url: 'http://3.109.40.48:8080/api/agent/beta',
                method: 'get',
                responseType: 'json',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                },
            }).then(({ data }) => {
                setAgent(data.data);
                axios({
                    url: 'http://3.109.40.48:8080/api/bags/type',
                    method: 'get',
                    responseType: 'json',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    },
                }).then((response) => {
                    setBagType(response.data.data)
                })
            })
        })

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

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Purchase Manager</h1>
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
                        <div id="myGrid" className="ag-theme-alpine"
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
                                onGridReady={params => onGridReady(params)}
                                animateRows={true}
                                columnDefs={column}
                                getContextMenuItems={getContextMenuItems}
                                rowData={rowData}>
                            </AgGridReact>
                        </div>
                    </div>
                </div>
            </section>
            <Modal show={show} size="xl" onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add/Edit Purchase Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PurchaseCreateComponent getgriddetails={getgriddetails} formStatus={formStatus} currentRow={currentRow} bagType={bagType} agent={agent} handleClose={handleClose} />
                </Modal.Body>
            </Modal>
            <Modal show={vshow} size="xl" onHide={handleVClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Purchase Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PurchaseView currentRow={currentRow} bagType={bagType} agent={agent} handleVClose={handleVClose} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default PurchaseComponent;