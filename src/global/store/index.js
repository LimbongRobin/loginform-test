import axios from 'axios';
const SUPPLIER_URL = "https://mobile.dev.quadrant-si.id/developertest/Supplier/inquiry/"


const store = {
    actions:{
        getSupplierList(page, size){
            return axios.get(SUPPLIER_URL+"1/10");
        }
    },
};

export default store;



