import Axios from "../axios";
import { useQuery } from "react-query";

export const useGetAllEmployees=()=>{
    return useQuery('useGetAllEmployees',()=>
        Axios({
            method: 'GET',
            url : '/employee',
        })
    )
}

