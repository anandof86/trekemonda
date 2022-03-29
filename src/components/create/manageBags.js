import { useForm } from "react-hook-form";
const axios = require('axios');

const ManageBags = (props) =>{
    const { register, handleSubmit, formState: { isSubmitting, isDirty, isValid } } = useForm({
        defaultValues: props.currentRow,
        mode: "onChange"
    });

    const onSubmit = (data) => {
        
        if(props.manageBags === "Add"){
            data.stock_inhand = parseInt(props.currentRow.stock_inhand) + parseInt(data.stock_inhand)
        }else if(props.manageBags == "Remove"){
            data.stock_inhand = parseInt(props.currentRow.stock_inhand) - parseInt(data.stock_inhand)
        }
        
        axios({
            url: 'http://3.109.40.48:8080/api/bags/beta/' + props.currentRow.id,
            method: 'put',
            responseType: 'json',
            data: data,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
        }).then((response) => {
            if (response.status === 200) {
                props.handleCountClose()
                props.getgriddetails()
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

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                
                <div className="col-md-12" style={spacing2}>
                    <input className="form-control" {...register("stock_inhand", { required: true, maxLength: 30 })} placeholder="Stock In Hand" />
                </div>
                <div className="col-md-12" style={spacing2}>
                    <button type="submit" className="btn btn-primary" style={buttonStyle}>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default ManageBags;