import {axiosService} from "./axios.service";
import {urls} from "../Config/urls";

export const UserService = {
    getAll:()=>axiosService.get(urls.users).then(value => value.data)
}