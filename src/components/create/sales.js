import React, { useReducer, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import stateCode from '../../config/state_code';
import url from '../../config/url';
const _ = require('underscore');
const axios = require('axios');



const CreateSalesComponent = (props) => {
    const { register, handleSubmit, watch, setValue, formState: { isSubmitting, isDirty, isValid } } = useForm({
        defaultValues: props.currentRow,
        mode: "onChange"
    });
    const [disabled, setDisabled] = useState(false);

    const state_name = watch('state');

    let result = null;

    const keyGen = (keyLength)  => {
        var i, key = "", characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    
        var charactersLength = characters.length;
    
        for (i = 0; i < keyLength; i++) {
            key += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1);
        }
    
        return key;
    }


    const setFormDisabled = () => {
        setDisabled(false);
    }

    const outward_status = [
        {
            name: "Outward"
        },
        {
            name: "Pending"
        }
    ]

    useEffect(() => {
        if (props.formStatus === 'Edit') {
            setFormDisabled()
        }
    });
    const onSubmit = (data) => {
        if (props.formStatus === 'Add') {
            data.sale_unique_id = keyGen(12)
            const agentArray = props.agent;
            const result = _.findWhere(agentArray, { name: data.party_name });
            data.party_id = result.id;
            console.log(data)
            axios({
                url: url.server + 'api/sales/beta',
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
                url: url.server + 'api/sales/v1/beta/' + props.currentRow.id,
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

    const uniquebags = [...new Set(props.bagName.map(item => item.name))];

    const no_of_bags = watch('no_of_bags');
    const rate_per_bag = watch('rate_per_bag');
    const truck_status = watch('truck_status');
    const mt = (Number(no_of_bags)*50)/1000
    const total_value = Number(rate_per_bag)*Number(no_of_bags);
    setValue("total_value", total_value)
    setValue("mt", mt)



    console.log(uniquebags);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} type="date" className="form-control" {...register("loading_date", { required: true })} placeholder="Loading Date" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} type="time"className="form-control" {...register("loading_time", { required: true })} placeholder="Loading Time" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input className="form-control" {...register("truck_no", { required: true })} placeholder="Truck Number" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <select disabled={disabled} className="form-control" {...register("brand_name", { required: true })}>
                        {uniquebags.map((value) => (
                            <option key={value} value={value}>{value}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-6" style={spacing2}>
                    <select disabled={disabled} className="form-control" {...register("bag_type", { required: true })}>
                        {props.bagType.map((value) => (
                            <option key={value.name} value={value.name}>{value.name}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} className="form-control" {...register("no_of_bags", { required: true })} placeholder="No of Bags" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <select disabled={disabled} className="form-control" {...register("truck_status", { required: true })}>
                        {outward_status.map((value) => (
                            <option key={value.name} value={value.name}>{value.name}</option>
                        ))}
                    </select>
                </div>
                {truck_status != "Pending" ?
                <>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} type="date" className="form-control" {...register("outward_date", { required: true })} placeholder="Outward Date" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} className="form-control" {...register("driver_name", { required: true })} placeholder="Driver Name" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <select disabled={disabled} className="form-control" {...register("party_name", { required: true })}>
                        {props.agent.map((value) => (
                            <option key={value.id} value={value.name}>{value.name}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} className="form-control" {...register("delivery_place", { required: true })} placeholder="Delivery Place" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} className="form-control" {...register("mt", { required: true })} placeholder="MT" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} className="form-control" {...register("rate_per_bag", { required: true })} placeholder="Rate per Bag" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} className="form-control" {...register("total_value", { required: true })} placeholder="Total Value" />
                </div>
                <div className="col-md-6" style={spacing2}>
                    <select disabled={disabled} className="form-control" {...register("marketer", { required: true })}>
                        {props.marketer.map((value) => (
                            <option key={value.id} value={value.name}>{value.name}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} className="form-control" {...register("remarks", { required: true })} placeholder="Remarks" />
                </div>
                  </> : ''}          
                <div className="col-md-12" style={spacing2}>
                    <button type="submit" className="btn btn-primary" disabled={!isDirty || !isValid} style={buttonStyle} >Submit</button>
                </div>
            </div>
        </form>)
}

export default CreateSalesComponent;