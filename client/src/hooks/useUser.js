import Axios from "../axios";
import {useQuery} from 'react-query'

export const useGetAllUsers = () =>{
    return useQuery('useGetAllUsers',()=>
        Axios({
            method: 'GET',
            url : '/users',
        })
    )
}