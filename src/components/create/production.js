import React, { useReducer, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import stateCode from '../../config/state_code';
import moment from 'moment';

const _ = require('underscore');


const axios = require('axios');

const CreateProductionComponent = (props) => {
    const { register, handleSubmit, watch, setValue, formState: { isSubmitting, isDirty, isValid } } = useForm({
        defaultValues: props.currentRow,
        mode: "onChange"
    });
    const [disabled, setDisabled] = useState(false);
    const [endDate, setEndDate] = useState(new Date());
    const [inopc, setInOpc] = useState(false);
    const [opcData, setOpcData] = useState(0);
    const [flyashData, setFlyAshData] = useState(0);
    const [sratio, setRatio] = useState(50.50)
    let totalopcData, proopcData, totalflyashData, proflyashData, closeOpc, closeFlyash, closePpc, closeBags, batch, outbags, totalppcStock, ppcbags, proppcData = 0;
    const percentCalculation = (a, b) => {
        var c = (parseFloat(a) * parseFloat(b)) / 100;
        return parseFloat(c);
    }

    const calculateRatio = (value, batch) => {
        switch (value) {
            case "50.50":
                return {
                    "opc": 350,
                    "flyash": 350
                }
            case "60.40":
                return {
                    "opc": 420,
                    "flyash": 280
                }
            case "70.30":
                return {
                    "opc": 490,
                    "flyash": 210
                }
            case "55.45":
                return {
                    "opc": 385,
                    "flyash": 315
                }
            default:
                return {
                    "opc": 350,
                    "flyash": 350
                }
        }
    }




    totalopcData = Number(watch('o_opc')) + opcData;
    totalflyashData = Number(watch('o_fly_ash')) + flyashData;
    totalppcStock = Number(watch('o_ppc')) + proppcData;

    const Production_Ratio = [
        {
            name: "50-50%",
            value: "50.50"
        },
        {
            name: "60-40%",
            value: "60.40"
        },
        {
            name: "70-30%",
            value: "70.30"
        },
        {
            name: "55-45%",
            value: "55.45"
        }
    ]

    const handelRatio = (event) => {
        batch = watch('prod_no_of_batch')
        let ratio = watch('ratio')
        console.log(ratio)
        let ratiocalc = calculateRatio(ratio, batch)
        proopcData = batch * ratiocalc.opc / 1000
        proflyashData = batch * ratiocalc.flyash / 1000
        proppcData = batch * 700 / 1000
        totalppcStock = Number(watch('o_ppc')) + proppcData;
        ppcbags = totalppcStock * 20
        outbags = Number(watch('ppc_stock')) * 20;
        closeOpc = (totalopcData - proopcData + Number(watch('manual_opc'))).toFixed(2)
        closeFlyash = (totalflyashData - proflyashData + Number(watch('manual_fly_ash'))).toFixed(2)
        closePpc = (totalppcStock - Number(watch('ppc_stock')) + Number(watch('manual_ppc'))).toFixed(2)
        closeBags = closePpc * 20
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
        data.total_opc = totalopcData
        data.in_opc = opcData
        data.in_fly_ash = flyashData
        data.total_fly_ash = totalflyashData
        data.opc_used = proopcData
        data.fly_ash_used = proflyashData
        data.ppc_produced = proppcData
        data.ppc_bags = ppcbags
        data.closing_opc = closeOpc
        data.closing_fly_ash = closeFlyash
        data.closing_ppc = closePpc
        data.closing_ppc_bags = closeBags
        data.out_bags = outbags
        data.total_ppc_stock = totalppcStock

        axios({
            url: 'http://3.109.40.48:8080/api/production/beta',
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
    };

    const getOPCDetails = (date) => {
        const dateFormat = moment(date).format('yyyy-MM-DD');
        setEndDate(date)
        axios({
            url: 'http://3.109.40.48:8080/api/purchase/date/beta?date=' + dateFormat,
            method: 'get',
            responseType: 'json',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
        }).then((response) => {
            if (response.data.length != 0) {
                setInOpc(true)
                let sumOpc = 0;
                let sumFlyAsh = 0;
                let FlyAsh = 0
                let OPC = 0;
                for (var i in response.data) {
                    console.log(response.data[i])
                    if (response.data[i].commodity == "OPC") {
                        OPC = OPC + response.data[i].bill_qty
                    } else if (response.data[i].commodity == "Fly Ash") {
                        console.log(response.data[i].bill_qty)
                        FlyAsh = FlyAsh + response.data[i].bill_qty
                    }
                }
                setOpcData(Number(OPC))
                setFlyAshData(Number(FlyAsh))
            } else {
                setInOpc(false)
                setOpcData(0)
                setFlyAshData(0)
            }
        })

    }
    const spacing2 = {
        marginTop: '10px'
    }

    const buttonStyle = {
        float: 'right',
        marginTop: '10px'
    }

    const heading = {
        marginTop: '15px',
        marginBottom: '15px'
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-md-12" style={spacing2}>
                    <label htmlFor="exampleInputEmail1" className="form-label">Date </label><br />
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => getOPCDetails(date)}
                        selectsEnd
                        endDate={endDate}
                        dateFormat="yyyy-MM-dd"
                    />
                </div>
            </div>
            {inopc ?
                <div>
                    <div className="row">
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">Batch Start Time</label>
                            <input type="time" className="form-control" {...register("start_time", { required: true })} placeholder="Start Time" />
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">Batch End Time</label>
                            <input type="time" className="form-control" {...register("end_time", { required: true })} placeholder="End Time" />
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">Opening OPC Stock</label>
                            <input className="form-control" {...register("o_opc", { required: true })} placeholder="Opening OPC" />
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">Opening Fly Ash Stock</label>
                            <input className="form-control" {...register("o_fly_ash", { required: true })} placeholder="Opening Fly Ash" />
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">Opening PPC</label>
                            <input className="form-control" {...register("o_ppc", { required: true })} placeholder="Opening PPC" />
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">No of Batch</label>
                            <input className="form-control" {...register("prod_no_of_batch", { required: true })} placeholder="No of Batch" />
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">Select Ratio</label>
                            <select onClick={handelRatio()} className="form-control" {...register("ratio", { required: true })}>
                                {Production_Ratio.map((value) => (
                                    <option key={value.value} value={value.value}>{value.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">PPC Dispatch MT</label>
                            <input className="form-control" {...register("ppc_stock", { required: true })} placeholder="PPC Dispatch MT" />
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">Manual OPC</label>
                            <input className="form-control" {...register("manual_opc", { required: true })} placeholder="Manual OPC" />
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">Manual Fly Ash</label>
                            <input className="form-control" {...register("manual_fly_ash", { required: true })} placeholder="Manual Fly Ash" />
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">Manual PPC</label>
                            <input className="form-control" {...register("manual_ppc", { required: true })} placeholder="Manual PPC" />
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">Operator Name</label>
                            <input className="form-control" {...register("operator_name", { required: true })} placeholder="Operator Name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 " style={heading}><h5 >Calculated Production Value</h5></div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">Inward OPC</label>
                            <label className="form-control" >{opcData}</label>
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">Inward Fly Ash</label>
                            <label className="form-control" >{flyashData}</label>
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">Total OPC</label>
                            <label className="form-control" >{totalopcData}</label>
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">Total Fly Ash</label>
                            <label className="form-control" >{totalflyashData}</label>
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">OPC Produced</label>
                            <label className="form-control" >{proopcData}</label>
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">Fly Ash Produced</label>
                            <label className="form-control" >{proflyashData}</label>
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">PCC Produced</label>
                            <label className="form-control" >{proppcData}</label>
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">Total PPC Stock</label>
                            <label className="form-control" >{totalppcStock}</label>
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">PPC bags</label>
                            <label className="form-control" >{ppcbags}</label>
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">Outward bags</label>
                            <label className="form-control" >{outbags}</label>
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">Closing OPC</label>
                            <label className="form-control" >{closeOpc}</label>
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">Closing Fly Ash</label>
                            <label className="form-control" >{closeFlyash}</label>
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">Closing PPC</label>
                            <label className="form-control" >{closePpc}</label>
                        </div>
                        <div className="col-md-3" style={spacing2}>
                            <label htmlFor="exampleInputEmail1" className="form-label">Closing Bags</label>
                            <label className="form-control" >{closeBags}</label>
                        </div>
                    </div>
                </div>
                : ''}
            <div className="row">
                <div className="col-md-12" style={spacing2}>
                    <button type="submit" className="btn btn-primary" disabled={!isDirty || !isValid} style={buttonStyle} >Submit</button>
                </div>
            </div>
        </form>)
}

export default CreateProductionComponent;