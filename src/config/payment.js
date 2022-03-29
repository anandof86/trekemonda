import moment from "moment";

const Dateformator = ({value}) => {
    if(value != ""){
        return moment.utc(value).format('DD MMM YYYY');
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

const payment =  [{
    headerName: "Date",
    field: "paymentDate",
    filter:"agDateColumnFilter",
    valueFormatter : Dateformator,
    width: 170,
    filterParams : filterDateParams
},
{ 
    headerName: "Agent",
    field: "agent",
    width: "200px", 
    filter:"agSetColumnFilter" 
},
{
    headerName: "Amount",
    field: "amount",
    filter:"agTextColumnFilter"
},
{
    headerName: "Payment Mode",
    field: "mode",
    filter:"agTextColumnFilter"
},
{
    headerName: "Remarks",
    field: "remarks",
    filter:"agTextColumnFilter"
}]

export default  payment;