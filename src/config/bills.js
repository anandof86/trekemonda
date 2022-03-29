


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

const bills =  [{
    headerName : "Bill ID",
    field: "bill_id",
    width: "200px", 
    filter:"agTextColumnFilter"
},
{
    headerName: "Bill No",
    field: "bill_no",
    width: 170,
    filter:"agTextColumnFilter"
},
{ 
    headerName: "Bill Date",
    field: "bill_date",
    width: "200px", 
    valueFormatter : Dateformator,
    width: 170,
    filterParams : filterDateParams
},
{
    headerName: "HSN Code",
    field: "hsn_code",
    filter:"agTextColumnFilter"
},
{
    headerName: "Truck Number",
    field: "truck_no",
    filter:"agTextColumnFilter"
},
{
    headerName: "Place of delivery",
    field: "place_delivery",
    width: 170,
    filter:"agTextColumnFilter"
},
{
    headerName: "Eway Bill No",
    field: "eway_bill_no",
    filter:"agTextColumnFilter",
    
},
{
    headerName: "Brand Name",
    field: "brand_name",
    filter: 'agSetColumnFilter'
},
{
    headerName: "Bag Type",
    field: "bag_type",
    filter: 'agTextColumnFilter'
},
{
    headerName: "Party Name",
    field: "party_name",
    filter: 'agTextColumnFilter'
},
{ 
    headerName: "Party GST",
    field: "party_gst",
    width: "200px", 
    filter:"agTextColumnFilter"
},
{
    headerName: "No of Bags",
    field: "no_of_bags",
    filter: 'agTextColumnFilter'
},
{
    headerName: "Rate",
    field: "rate",
    filter: 'agNumberColumnFilter'
},
{
    headerName: "Tax Value",
    field: "tax_value",
    filter: 'agNumberColumnFilter'
},
{
    headerName: "Tax Type",
    field: "tax_type",
    filter: 'agNumberColumnFilter'
},
{
    headerName: "Tax %",
    field: "tax_per",
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
    headerName: "Total Value",
    field: "total_value",
    filter: 'agNumberColumnFilter'
    
},
{
    headerName: "Remarks",
    field: "remarks",
    filter:"agTextColumnFilter"
}]

export default bills;