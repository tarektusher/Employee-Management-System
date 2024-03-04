import Axios from "../axios";
import { useQuery } from "react-query";

const useGetAllEmployees=()=>{
    return useQuery('useGetAllEmployees',()=>
        Axios({
            method: 'GET',
            url : '/employee',
        })
    )
}
const useGetEmployeeInfo = ({id}) =>{
     return useQuery('useGetEmployeeInfo', async () => {
        const response = await Axios.get(`/employee/${id}`);
        return response.data;
    });
}
const useGetEmployeeInfoForEdit = ({ id }) => {
    return useQuery('useGetEmployeeInfoForEdit', async () => {
        const response = await Axios.get(`/employee/${id}`);
        console.log(response);
        return response.data; 
    });
};
const useGetEmployeeEdit = ({id})=>{
    return useQuery('useGetEmployeeEdit',()=>{
        Axios({
            method : 'POST',
            url : `employee-edit/${id}`
        })
    })
}
const useEmployee = {useGetAllEmployees, useGetEmployeeEdit, useGetEmployeeInfo,useGetEmployeeInfoForEdit}
export default useEmployee;

