import React, { useReducer, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import stateCode from '../../config/state_code';
import url from '../../config/url';
const _ = require('underscore');
const axios = require('axios');



const CreateMarketerComponent = (props) => {
    const { register, handleSubmit, watch, setValue, formState: { isSubmitting, isDirty, isValid } } = useForm({
        defaultValues: props.currentRow,
        mode: "onChange"
    });
    const [disabled, setDisabled] = useState(false);

    const state_name = watch('state');
    
    let result = null;
    if(state_name != undefined){
        result = _.findWhere(stateCode, { state: state_name });
        setValue("state_code", result.state_code)

    }else{
        result = _.findWhere(stateCode, { state: stateCode[0].state });
        setValue("state_code", result.state_code)
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
            data.state_code = result.state_code
            axios({
                url: url.server+'api/marketer/beta',
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
                url: url.server+'api/marketer/v1/beta/' + props.currentRow.id,
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

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
            <div className="col-md-6" style={spacing2}>
                <input disabled={disabled} className="form-control" {...register("name", { required: true})} placeholder="Marketer Name" />
            </div>
            <div className="col-md-6" style={spacing2}>
                <textarea className="form-control" {...register("address", { required: true})} placeholder="Address" />
            </div>
            <div className="col-md-6" style={spacing2}>
                <input className="form-control" {...register("contact_no", { required: true})} placeholder="Contact Number" />
            </div>
            
            <div className="col-md-12" style={spacing2}>
                <button type="submit" className="btn btn-primary" disabled={!isDirty || !isValid} style={buttonStyle} >Submit</button>
            </div>
        </div>
    </form>)
}

export default CreateMarketerComponent;