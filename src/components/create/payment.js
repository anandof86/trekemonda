import React, { useReducer, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import DatePicker from 'react-datepicker'

const _ = require('underscore');
const axios = require('axios');


const CreatePaymentComponent = (props) => {
    const { register, handleSubmit, formState: { isSubmitting, isDirty, isValid } } = useForm({
        defaultValues: props.currentRow,
        mode: "onChange"
    });

    const [disabled, setDisabled] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    const setFormDisabled = () => {
        setDisabled(true);
    }

    useEffect(() => {
        if (props.formStatus == 'Edit') {
            setFormDisabled()
        }
    });


    const onSubmit = (data) => {
        const agentArray = props.agent;
        const result = _.findWhere(agentArray, { name: data.agent });
        data.agent = result.name;
        data.agent_online = result.online_balance;
        data.agent_offline = result.offline_balance;
        data.paymentDate = startDate;
        data.agent_id = result.id;
        if (props.formStatus === 'Add') {
            axios({
                url: 'http://3.109.40.48:8080/api/payment/beta',
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
                url: 'http://3.109.40.48:8080/api/payment/v1/beta/' + props.currentRow.id,
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

    const payment_mode = [
        {
            name: "Online"
        },
        {
            name: "Offline"
        }
    ]

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="row">
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} type="date" className="form-control" {...register("startDate", { required: true })} placeholder="Amount" />



                </div>
                <div className="col-md-6" style={spacing2}>
                <select disabled={disabled} className="form-control" {...register("payment_mode", { required: true })}>
                            <option value="Payment">Payment</option>
                            <option value="Collection">Collection</option>
                    </select>
                </div>
                <div className="col-md-6" style={spacing2}>
                    <select disabled={disabled} className="form-control" {...register("agent", { required: true })}>
                        {props.agent.map((value) => (
                            <option key={value.id} value={value.name}>{value.name}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-6" style={spacing2}>
                    <select disabled={disabled} className="form-control" {...register("mode", { required: true })}>
                        {payment_mode.map((value) => (
                            <option key={value.name} value={value.name}>{value.name}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-6" style={spacing2}>
                    <input disabled={disabled} className="form-control" {...register("amount", { required: true })} placeholder="Amount" />
                </div>

                <div className="col-md-6" style={spacing2}>
                    <textarea className="form-control" {...register("remarks", { required: true })} placeholder="Remarks" />
                </div>
                <div className="col-md-12" style={spacing2}>
                    <button type="submit" className="btn btn-primary" disabled={!isDirty || !isValid} style={buttonStyle} >Submit</button>
                </div>
            </div>
        </form>)
}

export default CreatePaymentComponent;