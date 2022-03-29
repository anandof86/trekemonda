const PurchaseView = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Select Suppiler</label>
                    <div className="form" >{props.currentRow.agent}</div>

                </div>

                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Truck In Time</label>
                    <div className="form" >{props.currentRow.truck_in_time}</div>

                </div>


                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Truck Out Time</label>
                    <div className="form" >{props.currentRow.truck_out_time}</div>

                </div>



                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Truck No</label>
                    <div className="form" >{props.currentRow.truck_no}</div>

                </div>
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Commodity</label>
                    <div className="form" >{props.currentRow.commodity}</div>

                </div>
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Commodity Type</label>
                    <div className="form" >{props.currentRow.commodity_type}</div>


                </div>


                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Remarks</label>
                    <div className="form" >{props.currentRow.remarks}</div>

                </div>
            </div>
            <div className="row">
                <div className="col-md-12" >
                    <h5>Purchase Details</h5>
                </div>
            </div>
            <div className="row">

                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Driver Name</label>
                    <div className="form" >{props.currentRow.driver_name}</div>

                </div>
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Driver Contact</label>
                    <div className="form" >{props.currentRow.driver_contact_no}</div>

                </div>
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Transport Name</label>
                    <div className="form" >{props.currentRow.transport_name}</div>

                </div>
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Bill Weight</label>
                    <div className="form" >{props.currentRow.bill_weight}</div>

                </div>
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Gross Weight</label>
                    <div className="form" >{props.currentRow.gross_weight}</div>

                </div>
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Empty Weight</label>
                    <div className="form" >{props.currentRow.empty_weight}</div>

                </div>
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Net Weight</label>
                    <div className="form" >{props.currentRow.net_weight}</div>

                </div>
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Whcih Ever Lower</label>
                    <div className="form" >{props.currentRow.whcih_ever_lower}</div>

                </div>
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Total Rate</label>
                    <div className="form" >{props.currentRow.total_rate}</div>

                </div>
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Total Amount</label>
                    <div className="form" >{props.currentRow.total_amount}</div>

                </div>
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Fright Value</label>
                    <div className="form" >{props.currentRow.fright_value}</div>

                </div>
            </div>
            <div className="row">
                <div className="col-md-6" >
                    <h5>Invoice Details</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Invoice No</label>
                    <div className="form" >{props.currentRow.number}</div>

                </div>
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" disabled className="form-label">GST No</label>
                    <div className="form" >{props.currentRow.gstin}</div>

                </div>
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Unit</label>
                    <div className="form" >{props.currentRow.unit}</div>


                </div>
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Bill Qty</label>
                    <div className="form" >{props.currentRow.bill_qty}</div>

                </div>
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Rate</label>
                    <div className="form" >{props.currentRow.rate}</div>

                </div>
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Bill Value</label>
                    <div className="form" >{props.currentRow.bill_value}</div>

                </div>
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">GST Type</label>
                    <div className="form" >{props.currentRow.gst_type}</div>


                </div>
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">CGST</label>
                    <div className="form" >{props.currentRow.cgst}</div>

                </div>
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">SGST</label>
                    <div className="form" >{props.currentRow.sgst}</div>

                </div>
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">IGST</label>
                    <div className="form" >{props.currentRow.igst}</div>

                </div>
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Total Bill Value</label>
                    <div className="form" >{props.currentRow.total_bill_value}</div>

                </div>
                <div className="col-md-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Eway Bill</label>
                    <div className="form" >{props.currentRow.eway_bill}</div>

                </div>
            </div>
        </div>
    )
}

export default PurchaseView;