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

const production =  [{
    headerName: "Date",
    field: "createdAt",
    filter:"agDateColumnFilter",
    valueFormatter : Dateformator,
    width: 210,
    filterParams : filterDateParams
},
{ 
    headerName: "Start Time",
    field: "start_time",
    width: "200px", 
},
{
    headerName: "End Time",
    field: "end_time",
},
{
    headerName: "Opening OPC",
    field: "o_opc",
    filter:"agTextColumnFilter"
},
{
    headerName: "Opening Fly Ash",
    field: "o_fly_ash",
    filter:"agTextColumnFilter"
},
{
    headerName: "Opening PPC",
    field: "o_ppc",
    filter:"agTextColumnFilter"
},
{
    headerName: "Inwards OPC",
    field: "in_opc",
    filter:"agTextColumnFilter"
},
{
    headerName: "Inwards Fly Ash",
    field: "in_fly_ash",
    filter:"agTextColumnFilter"
},
{
    headerName: "Total OPC",
    field: "total_opc",
    filter:"agTextColumnFilter"
},
{
    headerName: "Total Fly Ash",
    field: "total_fly_ash",
    filter:"agTextColumnFilter"
},
{
    headerName: "Number of Batch",
    field: "prod_no_of_batch",
    filter:"agTextColumnFilter"
},
{
    headerName: "OPC Produced",
    field: "opc_used",
    filter:"agTextColumnFilter"
},
{
    headerName: "Fly Ash Produced",
    field: "fly_ash_used",
    filter:"agTextColumnFilter"
},
{
    headerName: "PPC Produced",
    field: "ppc_produced",
    filter:"agTextColumnFilter"
},
{
    headerName: "PPC Stock",
    field: "ppc_stock",
    filter:"agTextColumnFilter"
},
{
    headerName: "PPC Bags",
    field: "ppc_bags",
    filter:"agTextColumnFilter"
},
{
    headerName: "Closing OPC",
    field: "closing_opc",
    filter:"agTextColumnFilter"
},
{
    headerName: "Closing Fly Ash",
    field: "closing_fly_ash",
    filter:"agTextColumnFilter"
},
{
    headerName: "Closing PPC",
    field: "closing_ppc",
    filter:"agTextColumnFilter"
},
{
    headerName: "Closing PPC Bags",
    field: "closing_ppc_bags",
    filter:"agTextColumnFilter"
},
{
    headerName: "Manual OPC",
    field: "manual_opc",
    filter:"agTextColumnFilter"
},
{
    headerName: "Manual Fly Ash",
    field: "manual_fly_ash",
    filter:"agTextColumnFilter"
},
{
    headerName: "Manual PPC",
    field: "manual_ppc",
    filter:"agTextColumnFilter"
},
{
    headerName: "Operator Name",
    field: "operator_name",
    filter:"agTextColumnFilter"
}]

export default production;