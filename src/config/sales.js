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

const sales =  [{
    headerName : "Sale ID",
    field: "sale_unique_id",
    width: "200px", 
    filter:"agTextColumnFilter"
},
    {
    headerName: "Loading Date",
    field: "loading_date",
    width: 170,
    valueFormatter : Dateformator,
    width: 170,
    filterParams : filterDateParams
},
{ 
    headerName: "Loading Time",
    field: "loading_time",
    width: "200px", 
    filter:"agTextColumnFilter"
},
{
    headerName: "Truck No",
    field: "truck_no",
    filter:"agTextColumnFilter"
},
{
    headerName: "Brand Name",
    field: "brand_name",
    filter:"agTextColumnFilter"
},
{
    headerName: "Bag Type",
    field: "bag_type",
    width: 170,
    filter:"agTextColumnFilter"
},
{
    headerName: "No of Bags",
    field: "no_of_bags",
    filter:"agTextColumnFilter",
    
},
{
    headerName: "Truck Status",
    field: "truck_status",
    filter: 'agSetColumnFilter'
},
{
    headerName: "Outward Date",
    field: "outward_date",
    filter: 'agTextColumnFilter'
},
{
    headerName: "Driver Name",
    field: "driver_name",
    filter: 'agTextColumnFilter'
},
{ 
    headerName: "Party Name",
    field: "party_name",
    width: "200px", 
    filter:"agTextColumnFilter"
},
{
    headerName: "Delivery Place",
    field: "delivery_place",
    filter: 'agTextColumnFilter'
},
{
    headerName: "MT",
    field: "mt",
    filter: 'agNumberColumnFilter'
},
{
    headerName: "Rate Per Bag",
    field: "rate_per_bag",
    filter: 'agNumberColumnFilter'
},
{
    headerName: "Total Value",
    field: "total_value",
    filter: 'agNumberColumnFilter'
    
},
{
    headerName: "Marketer Name",
    field: "marketer",
    filter: 'agTextColumnFilter'
    
},
{
    headerName: "Remarks",
    field: "remarks",
    filter:"agTextColumnFilter"
}]

export default sales;