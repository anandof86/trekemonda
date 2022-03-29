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

const agent = [{
    headerName: "Agent Name",
    field: "name",
    width: "150px",
    sortable: true,
    filter:"agSetColumnFilter"
},
{ 
    headerName: "Address",
    field: "address",
    width: "200px", 
    filter:"agTextColumnFilter"
},
{
    headerName: "Contact Number",
    field: "contact_no",
    filter:"agTextColumnFilter"
},
{
    headerName: "GST Number",
    field: "gst_no",
    filter:"agTextColumnFilter"
},
{
    headerName: "State",
    field: "state",
    filter:"agSetColumnFilter"
},
{
    headerName: "State Code",
    field: "state_code",
    filter:"agSetColumnFilter",
    
},
{
    headerName: "Balance",
    field: "online_balance",
    filter: 'agNumberColumnFilter'
},
{
    headerName: "Date Created",
    field: "createdAt",
    filter:"agDateColumnFilter",
    valueFormatter : Dateformator,
    width: 170,
    filterParams : filterDateParams
}]

export default  agent;