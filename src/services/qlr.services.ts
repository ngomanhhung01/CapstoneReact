import { QUAN_LY_RAP_API, apiInstance } from "constant";
import { Cinema, ShowTimes, ShowTimesDetail } from "types";

const api = apiInstance.create({
    baseURL: QUAN_LY_RAP_API
})

export const quanLyRapServices = {
    getCinemaList : () => api.get<HttpResponse<Cinema[]>>("/LayThongTinHeThongRap"),
    getShowTimesList : () => api.get<HttpResponse<ShowTimes[]>>("/LayThongTinLichChieuHeThongRap"),
    getShowTimesDetail : (query = 0) => api.get<HttpResponse<ShowTimesDetail>>(`/LayThongTinLichChieuPhim?MaPhim=${query}`)
}