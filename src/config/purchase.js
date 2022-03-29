import moment from "moment";

const Dateformator = ({value}) => {
    if(value != ""){
        return moment.utc(value).format('DD MMM YYYY');
    }
}

const DateformatorTime = ({value}) => {
    if(value != ""){
        return moment.utc(value).format('DD MMM YYYY HH:mm');
    }
}


const filterDateParams = {
    comparator : function(filterLocalDateStringMidnight, cellValue){
        const dateString = cellValue;
        console.log(filterLocalDateStringMidnight)
        if(dateString == null){
            return 0;
        }
        const cellDate = moment(dateString).format('DD MMM YYYY')
        const filterDate = moment(filterLocalDateStringMidnight).format('DD MMM YYYY')
        if(cellDate < filterDate){
            return -1;
        }else if(cellDate > filterDate){
            return 1;
        }
        return 0;
    },
    browserDatePicker: true
}

const filterDateParamsTime = {
    comparator : function(filterLocalDateStringMidnight, cellValue){
        const dateString = cellValue;
        console.log(filterLocalDateStringMidnight)
        if(dateString == null){
            return 0;
        }
        const cellDate = moment(dateString).format('DD MMM YYYY HH:mm')
        const filterDate = moment(filterLocalDateStringMidnight).format('DD MMM YYYY HH:mm')
        if(cellDate < filterDate){
            return -1;
        }else if(cellDate > filterDate){
            return 1;
        }
        return 0;
    },
    browserDatePicker: true
}

const purchase =  [{
    headerName : "Date",
    field: "date",
    filter:"agDateColumnFilter",
    valueFormatter : Dateformator,
    width: 170,
    filterParams : filterDateParams
},
    {
    headerName: "Truck In Time",
    field: "truck_in_time",
    width: 170,
    valueFormatter : DateformatorTime
},
{ 
    headerName: "Truck No",
    field: "truck_no",
    width: "200px", 
    filter:"agTextColumnFilter"
},
{
    headerName: "Commodity",
    field: "commodity",
    filter:"agTextColumnFilter"
},
{
    headerName: "Commodity Type",
    field: "commodity_type",
    filter:"agTextColumnFilter"
},
{
    headerName: "Truck Out Time",
    field: "truck_out_time",
    width: 170,
    valueFormatter : DateformatorTime
},
{
    headerName: "Remarks",
    field: "remarks",
    filter:"agTextColumnFilter",
    
},
{
    headerName: "Agent",
    field: "agent",
    filter: 'agSetColumnFilter'
},
{ 
    headerName: "Trasnport Name",
    field: "transport_name",
    width: "200px", 
    filter:"agTextColumnFilter"
},
{
    headerName: "Invoice Number",
    field: "number",
    filter: 'agTextColumnFilter'
},
{
    headerName: "GST Number",
    field: "gstin",
    filter: 'agTextColumnFilter'
},
{
    headerName: "Unit",
    field: "unit",
    filter: 'agTextColumnFilter'
},
{
    headerName: "Bill Qty",
    field: "bill_qty",
    filter: 'agNumberColumnFilter'
},
{
    headerName: "Rate",
    field: "rate",
    filter: 'agNumberColumnFilter'
},
{
    headerName: "CGST",
    field: "cgst",
    filter: 'agNumberColumnFilter'
},
{
    headerName: "SGST",
    field: "sgst",
    filter: 'agNumberColumnFilter'
},
{
    headerName: "IGST",
    field: "igst",
    filter: 'agNumberColumnFilter'
},
{
    headerName: "Total Bill Value",
    field: "total_bill_value",
    filter: 'agNumberColumnFilter'
},
{
    headerName: "Eway Bill",
    field: "eway_bill",
    filter:"agTextColumnFilter"
}]

export default  purchase;