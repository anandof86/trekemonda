import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
const _ = require('underscore');
const axios = require('axios');


const PurchaseCreateComponent = (props) => {
    const { register, handleSubmit, watch, setValue, getValues } = useForm({
        defaultValues: props.currentRow,
        mode: "onChange",
        reValidateMode: "onChange"
    });
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [disabled, setDisabled] = useState(false);
    const [selectedAgent, setSelectedAgent] = useState(props.agent[0].name)

    const setFormDisabled = () => {
        setDisabled(true);
    }

    useEffect(() => {
        if (props.formStatus === 'Edit') {
            setFormDisabled()
        }
    });



    setValue("total_amount", 0)
    setValue("bill_value", 0)
    setValue("cgst", 0)
    setValue("sgst", 0)
    setValue("igst", 0)

    const percentage = (num, per) => {
        return (num / 100) * per;
    }

    const commodity_listner = watch('commodity');
    const gst_listner = watch('gst_type');
    const agent_listner = watch('agent');
    const bill_value = ((watch('bill_qty') * watch('rate'))).toFixed(2);
    
    let igst,cgst,sgst = 0
    let total_bill_value = 0
    let gstin = 0
    setValue("bill_value", bill_value)
    
    if (agent_listner != undefined) {
        const result = _.findWhere(props.agent, { name: agent_listner });
        setValue("gstin", result.gst_no);
        gstin = result.gst_no;
        if (result.state_code == "33") {
            igst = 0
            cgst = (percentage(bill_value, gst_listner)).toFixed(2)
            sgst = (percentage(bill_value, gst_listner)).toFixed(2)
            setValue("igst", igst)
            setValue("cgst", cgst)
            setValue("sgst", sgst)
            total_bill_value = Number(Number(bill_value) + Number(cgst) + Number(sgst) + Number(igst)).toFixed(2);
            setValue("total_bill_value", total_bill_value)
        } else {
            cgst = 0
            sgst = 0
            igst = (percentage(bill_value, gst_listner*2)).toFixed(2)
            setValue("igst", igst)
            setValue("cgst", cgst)
            setValue("sgst", sgst)
            total_bill_value = Number(bill_value) + Number(cgst) + Number(sgst) + Number(igst);
            setValue("total_bill_value", total_bill_value)
        }
    } else {
        const result = _.findWhere(props.agent, { name: props.agent[0].name });
        setValue("gstin", result.gst_no);
        gstin = result.gst_no;
    }

    const onSubmit = (data) => {
        if (props.formStatus === 'Add') {
           
            data.total_bill_value = total_bill_value
            data.cgst = cgst
            data.sgst = sgst
            data.igst = igst
            data.gstin = gstin
            const agentArray = props.agent;
            const result = _.findWhere(agentArray, { name: data.agent });
            data.agent = result.name;
            data.agent_online = result.online_balance;
            data.agent_offline = result.offline_balance;
            data.agent_id = result.cns_id;
            data.truck_in_time = startDate;
            data.truck_out_time = endDate;
            axios({
                url: 'http://3.109.40.48:8080/api/purchase/beta',
                method: 'post',
                responseType: 'json',
                data: data,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                },
            }).then((response) => {
                if (response.status === 200) {
                    props.handleClose()
                    props.getgriddetails()
                }
            })
        } else if (props.formStatus === 'Edit') {
            axios({
                url: 'http://3.109.40.48:8080/api/purchase/v1/beta/' + props.currentRow.id,
                method: 'put',
                responseType: 'json',
                data: data,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                },
            }).then((response) => {
                if (response.status === 200) {
                    props.handleClose()
                    props.getgriddetails()
                }
            })
        }

    }


    const commodity = [
        {
            name: "OPC"
        },
        {
            name: "Fly Ash"
        },
        {
            name: "Bags"
        }
    ]

    const gst_type = [
        {
            name: "2.5% - IGST (5%)",
            value: 2.5
        },
        {
            name: "9% - IGST (18%)",
            value: 9
        },
        {
            name: "14% - IGST (28%)",
            value: 14
        }
    ]

    const unit = [
        {
            name: "MT"
        },
        {
            name: "Nos"
        }
    ]

    const spacing2 = {
        marginTop: '10px'
    }

    const buttonStyle = {
        float: 'right',
        marginTop: '10px'
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-md-6" style={spacing2}>
                    <h5>Purchase Base Info</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4" style={spacing2}>
                    <label htmlFor="exampleInputEmail1" className="form-label">Select Suppiler</label>
                    <select disabled={disabled} className="form-control" {...register("agent", { required: true })}>
                        {props.agent.map((value) => (
                            <option key={value.id} value={value.name}>{value.name}</option>
                        ))}
                    </select>
                </div>

                {disabled ?
                    <div className="col-md-4" style={spacing2}>
                        <label htmlFor="exampleInputEmail1" className="form-label">Truck In Time</label>
                        <input disabled className="form-control" {...register("truck_in_time", { required: true })} placeholder="Truck No" />
                    </div>
                    : <div className="col-md-4" style={spacing2}>
                        <label htmlFor="exampleInputEmail1" className="form-label">Truck : In Time</label><br />

                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            maxDate={endDate}
                            showTimeSelect
                            dateFormat="MMMM d, yyyy h:mm aa"
                        />

                    </div>}
                {disabled ?
                    <div className="col-md-4" style={spacing2}>
                        <label htmlFor="exampleInputEmail1" className="form-label">Truck Out Time</label>
                        <input disabled className="form-control" {...register("truck_out_time", { required: true })} placeholder="Truck No" />
                    </div>
                    :
                    <div className="col-md-4" style={spacing2}>
                        <label htmlFor="exampleInputEmail1" className="form-label">Truck : Out TIme</label><br />
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            minDate={startDate}
                            endDate={endDate}
                            showTimeSelect
                            dateFormat="MMMM d, yyyy h:mm aa"
                        />
                    </div>

                }
                <div className="col-md-4" style={spacing2}>
                    <label htmlFor="exampleInputEmail1" className="form-label">Truck No</label>
                    <input className="form-control" {...register("truck_no", { required: true })} placeholder="Truck No" />
                </div>
                <div className="col-md-4" style={spacing2}>
                    <label htmlFor="exampleInputEmail1" className="form-label">Commodity</label>
                    <select disabled={disabled} className="form-control" {...register("commodity", { required: true })}>
                        {commodity.map((value) => (
                            <option key={value.name} value={value.name}>{value.name}</option>
                        ))}
                    </select>
                </div>
                {commodity_listner === "Bags" ?
                    <div className="col-md-4" style={spacing2}>
                        <label htmlFor="exampleInputEmail1" className="form-label">Commodity Type</label>
                        <select disabled={disabled} className="form-control" {...register("commodity_type", { required: true })}>
                            {props.bagType.map((value) => (
                                <option key={value.name} value={value.name}>{value.name}</option>
                            ))}
                        </select>
                    </div> :
                    <div className="col-md-4" style={spacing2}>
                        <label htmlFor="exampleInputEmail1" className="form-label">Commodity Type</label>
                        <input disabled={disabled} className="form-control" {...register("commodity_type", { required: true })} placeholder="Commodity Type" />
                    </div>
                }


                <div className="col-md-4" style={spacing2}>
                    <label htmlFor="exampleInputEmail1" className="form-label">Remarks</label>
                    <input className="form-control" {...register("remarks", { required: true })} placeholder="Remarks" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6" style={spacing2}>
                    <h5>Purchase Details</h5>
                </div>
            </div>
            <div className="row">

               
                <div className="col-md-4" style={spacing2}>
                    <label htmlFor="exampleInputEmail1" className="form-label">Transport Name</label>
                    <input className="form-control" {...register("transport_name", { required: true })} placeholder="Transport Name" />
                </div>
               
            </div>
            <div className="row">
                <div className="col-md-6" style={spacing2}>
                    <h5>Invoice Details</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4" style={spacing2}>
                    <label htmlFor="exampleInputEmail1" className="form-label">Invoice No</label>
                    <input className="form-control" {...register("number", { required: true })} placeholder="Invoice Number" />
                </div>
                <div className="col-md-4" style={spacing2}>
                    <label htmlFor="exampleInputEmail1" disabled className="form-label">GST No</label>
                    <input  className="form-control" {...register("gstin", { required: true })} placeholder="GST" />
                </div>
                <div className="col-md-4" style={spacing2}>
                    <label htmlFor="exampleInputEmail1" className="form-label">Unit</label>
                    <select  className="form-control" {...register("unit", { required: true })}>
                        {unit.map((value) => (
                            <option key={value.name} value={value.name}>{value.name}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4" style={spacing2}>
                    <label htmlFor="exampleInputEmail1" className="form-label">Bill Qty</label>
                    <input className="form-control" {...register("bill_qty", { required: true })} placeholder="Bill Qty" />
                </div>
                <div className="col-md-4" style={spacing2}>
                    <label htmlFor="exampleInputEmail1" className="form-label">Rate</label>
                    <input  className="form-control" {...register("rate", { required: true })} placeholder="Rate" />
                </div>
                <div className="col-md-4" style={spacing2}>
                    <label htmlFor="exampleInputEmail1" className="form-label">Bill Value</label>
                    <input className="form-control" {...register("bill_value", { required: true })} placeholder="Bill Value" />
                </div>
                <div className="col-md-4" style={spacing2}>
                    <label htmlFor="exampleInputEmail1" className="form-label">GST %</label>
                    <select  className="form-control" {...register("gst_type", { required: true })}>
                        {gst_type.map((value) => (
                            <option key={value.name} value={value.value}>{value.name}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4" style={spacing2}>
                    <label htmlFor="exampleInputEmail1" className="form-label">CGST</label>
                    <input  className="form-control" {...register("cgst", { required: true })} placeholder="CGST" />
                </div>
                <div className="col-md-4" style={spacing2}>
                    <label htmlFor="exampleInputEmail1" className="form-label">SGST</label>
                    <input  className="form-control" {...register("sgst", { required: true })} placeholder="SGST" />
                </div>
                <div className="col-md-4" style={spacing2}>
                    <label htmlFor="exampleInputEmail1" className="form-label">IGST</label>
                    <input  className="form-control" {...register("igst", { required: true })} placeholder="IGST" />
                </div>
                <div className="col-md-4" style={spacing2}>
                    <label htmlFor="exampleInputEmail1" className="form-label">Total Bill Value</label>
                    <input  className="form-control" {...register("total_bill_value", { required: true })} placeholder="Total Bill Value" />
                </div>
                <div className="col-md-4" style={spacing2}>
                    <label htmlFor="exampleInputEmail1" className="form-label">Eway Bill</label>
                    <input className="form-control" {...register("eway_bill", { required: true })} placeholder="Eway Bill" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12" style={spacing2}>
                    <button type="submit" className="btn btn-primary" style={buttonStyle} >Submit</button>
                </div>
            </div>
        </form>)
}

export default PurchaseCreateComponent;