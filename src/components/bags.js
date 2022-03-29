import axios from 'axios';
import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {LicenseManager} from "ag-grid-enterprise";
import { Modal, Button } from 'react-bootstrap'
import bagConfig from '../config/bags';
import CreateBagComponent from '../components/create/bags';
import ManageBags from '../components/create/manageBags';
import url from '../config/url';

LicenseManager.setLicenseKey("MjAwMDAwMDAwMDAwMA==598447838c89eb4366146127615e4****");


const BagComponent = () => {
    const [rowData, setRowData] = useState(null);
    const [id, setId] = useState(1);
    const [column, setColumn] = useState(bagConfig);
    const [show, setShow] = useState(false);
    const [showcount, setShowCount] = useState(false);
    const [currentRow, setCurrentRow] = useState({})
    const [gridApi, setGridApi] = useState(null);
    const [formStatus, setFormStatus] = useState('Add');
    const [bagType, setBagType] = useState({});
    const [manageBags, setManageBags] = useState();

    const handleCountClose = () => setShowCount(false);
    const handleCountShow = (status) => {
        setManageBags(status);
        setShowCount(true)
    };
    const handleClose = () => setShow(false);
    const handleShow = (status) => {
        setFormStatus(status)
        setShow(true)};

    const create = () => {
        setCurrentRow({})
        handleShow('Add')
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
                    handleShow('Edit')
                }
            },
            {
                name: 'Add Bags',
                action: function () {
                    setCurrentRow(params.node.data);
                    handleCountShow('Add')
                }
            },{
                name: 'Print Report',
                action: () => {
                    api.exportDataAsExcel();
                }
            },
            {
                name: 'Remove Bags',
                action: function () {
                    setCurrentRow(params.node.data);
                    handleCountShow('Remove')
                }
            },
            {
                name: 'Delete',
                action: function () {
                    axios({
                        url: 'http://3.109.40.48:8080/api/bags/beta/' + params.node.data.id,
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
            url: 'http://3.109.40.48:8080/api/bags/beta',
            method: 'get',
            responseType: 'json',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
        }).then(({ data }) => {
            setRowData(data.data);
            axios({
                url : 'http://3.109.40.48:8080/api/bags/type',
                method : 'get',
                responseType : 'json',
                headers: {
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                  },
            }).then((response) =>{
                setBagType(response.data.data)
            })
        })
    }



    return (
        <div class="card">
            <div class="card-header">
                <h4>Bag Manager <div class="float-end"><button className="btn btn-block btn-dark btn-sm" onClick={create}><i class="bi bi-plus"></i> CREATE</button></div></h4> 
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
                    <Modal.Title>Add/Edit Bag Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateBagComponent bagType={bagType} getgriddetails={getgriddetails} formStatus={formStatus} currentRow={currentRow} handleClose={handleClose} />
                </Modal.Body>
            </Modal>
            <Modal show={showcount} size="xs" onHide={handleCountClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add /Remove Bag </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ManageBags manageBags={manageBags}  getgriddetails={getgriddetails} currentRow={currentRow} handleCountClose={handleCountClose}/>
                </Modal.Body>
            </Modal>
        </div>
        
    )
}

export default BagComponent;