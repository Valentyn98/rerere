import {axiosService} from "./axios.service";
import {urls} from "../Config/urls";

export const postService = {
     getByUserID:(id) => axiosService.get(`${urls.posts}?userId=${id}`)
}