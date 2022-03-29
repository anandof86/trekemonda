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

const bags = [{
    headerName: "Bag Name",
    field: "name",
    width: "150px",
    sortable: true,
    filter:"agSetColumnFilter"
},
{ 
    headerName: "Bag Type",
    field: "bag_type",
    filter:"agSetColumnFilter"
},
{
    headerName: "Stock In Hand",
    field: "stock_inhand",
    filter:"agTextColumnFilter"
},
{
    headerName: "Date Created",
    field: "createdAt",
    filter:"agDateColumnFilter",
    valueFormatter : Dateformator,
    width: 170,
    filterParams : filterDateParams
}]

export default bags;