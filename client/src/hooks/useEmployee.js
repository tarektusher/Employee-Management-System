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
    return useQuery('useGetEmployeeInfo',()=>{
        Axios({
            method : 'GET',
            url : `employee-view/${id}`
        })
    })
}
const useGetEmployeeEdit = ({id})=>{
    return useQuery('useGetEmployeeEdit',()=>{
        Axios({
            method : 'POST',
            url : `employee-edit/${id}`
        })
    })
}
const useEmployee = {useGetAllEmployees, useGetEmployeeEdit, useGetEmployeeInfo}
export default useEmployee;

