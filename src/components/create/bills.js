import React, { useReducer, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import stateCode from '../../config/state_code';
import url from '../../config/url';
const _ = require('underscore');
const axios = require('axios');



const CreateBillsComponent = (props) => {
    const { register, handleSubmit, watch, setValue, formState: { isSubmitting, isDirty, isValid } } = useForm({
        defaultValues: props.currentRow,
        mode: "onChange"
    });
    const [disabled, setDisabled] = useState(false);
    const bill_no_listner = watch('bill_no');
    let result, findparty = null;

    if(bill_no_listner){
        result = _.findWhere(props.sales, { sale_unique_id: bill_no_listner });
        findparty = _.findWhere(props.party, { name: result.party_name });
    }else{
        result = props.sales[0]
        findparty = _.findWhere(props.party, { name: result.party_name });
    }
    const percentage = (num, per) => {
        return (num / 100) * per;
    }
    setValue("truck_no", result.truck_no)
    setValue("place_delivery", result.delivery_place)
    setValue("brand_name", result.brand_name)
    setValue("bag_type", result.bag_type)
    setValue("party_name", result.party_name)
    setValue("no_of_bags", result.no_of_bags)
    setValue("rate", result.rate_per_bag / (128 / 100))
    setValue("party_gst", findparty.gst_no)
    setValue("tax_value", result.no_of_bags * result.rate_per_bag / (128 / 100))
    setValue("hsn_code", "25232930")
    const tax_per = watch("tax_per");
    if (findparty.state_code == "33") {
        let igst = 0
        let cgst = (percentage(result.no_of_bags * result.rate_per_bag / (128 / 100), tax_per)).toFixed(2)
        let sgst = (percentage(result.no_of_bags * result.rate_per_bag / (128 / 100), tax_per)).toFixed(2)
        setValue("igst", igst)
        setValue("cgst", cgst)
        setValue("sgst", sgst)
        setValue("tax_type", "Local")
        let total_value = Number(Number(result.no_of_bags * result.rate_per_bag / (128 / 100)) + Number(cgst) + Number(sgst) + Number(igst)).toFixed(2);
        setValue("total_value", total_value)
    } else {
        let cgst = 0
        let sgst = 0
        let igst = (percentage(result.no_of_bags * result.rate_per_bag / (128 / 100), tax_per * 2)).toFixed(2)
        setValue("igst", igst)
        setValue("cgst", cgst)
        setValue("sgst", sgst)
        setValue("tax_type", "IGST")
        let total_value = Number(result.no_of_bags * result.rate_per_bag / (128 / 100)) + Number(cgst) + Number(sgst) + Number(igst);
        setValue("total_value", total_value)
    }

    const setFormDisabled = () => {
        setDisabled(true);
    }

    useEffect(() => {
        if (props.formStatus === 'Edit') {
            setFormDisabled()
        }
    });
    const onSubmit = (data) => {
        if (props.formStatus === 'Add') {
            axios({
                url: url.server + 'api/bill/beta',
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
                url: url.server + 'api/bills/v1/beta/' + props.currentRow.id,
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

    };
    const spacing2 = {
        marginTop: '10px'
    }

    const buttonStyle = {
        float: 'right',
        marginTop: '10px'
    }

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



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-md-6" style={spacing2}>
                    <select disabled={disabled} className="form-control" {...register("bill_no", { required: true })}>
                        {props.sales.map((value) => (
                            <option key={value.sale_unique_id} value={value.sale_unique_id}>{value.sale_unique_id}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} type="date" className="form-control" {...register("bill_date", { required: true })} placeholder="Loading Date" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} className="form-control" {...register("hsn_code", { required: true })} placeholder="HSN Code" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} className="form-control" {...register("truck_no", { required: true })} placeholder="Truck No" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} className="form-control" {...register("place_delivery", { required: true })} placeholder="Place Delivery" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} className="form-control" {...register("eway_bill_no", { required: true })} placeholder="Eway Bill No" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} className="form-control" {...register("brand_name", { required: true })} placeholder="Brand Name" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} className="form-control" {...register("bag_type", { required: true })} placeholder="bag Type" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} className="form-control" {...register("party_name", { required: true })} placeholder="Party Name" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} className="form-control" {...register("party_gst", { required: true })} placeholder="Party GST" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} className="form-control" {...register("no_of_bags", { required: true })} placeholder="No of Bags" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} className="form-control" {...register("rate", { required: true })} placeholder="Rate" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} className="form-control" {...register("tax_value", { required: true })} placeholder="Tax Value" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} className="form-control" {...register("tax_type", { required: true })} placeholder="Tax Type" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <select disabled={disabled} className="form-control" {...register("tax_per", { required: true })}>
                        {gst_type.map((value) => (
                            <option key={value.name} value={value.value}>{value.name}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input  disabled={disabled} className="form-control" {...register("cgst", { required: true })} placeholder="CGST" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input  disabled={disabled} className="form-control" {...register("sgst", { required: true })} placeholder="SGST" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} className="form-control" {...register("igst", { required: true })} placeholder="IGST" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} className="form-control" {...register("total_value", { required: true })} placeholder="Total Value" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} className="form-control" {...register("remarks", { required: true })} placeholder="Remarks" />
                </div>

                <div className="col-md-12" style={spacing2}>
                    <button type="submit" className="btn btn-primary" disabled={!isDirty || !isValid} style={buttonStyle} >Submit</button>
                </div>
            </div>
        </form>)
}

export default CreateBillsComponent;