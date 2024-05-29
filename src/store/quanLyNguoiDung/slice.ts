import { createSlice } from "@reduxjs/toolkit";
import { quanLyNguoiDungActionThunks } from ".";
import { LOCAL_USER_LOGIN_KEY } from "constant";
import { getUserLogin } from "utils";
import { Ghe, HistoRyBooking, UserByAccessToken, UserLogin } from "types";
import { getAccessToken } from "utils/getAccessToken";

type QuanLyNguoiDungInitialState = {
    accessToken?: string,
    userLogin?: UserLogin | UserByAccessToken,
    isFetchingLogin?: boolean,
    isFetchingRegister?: boolean,
    isFetchingUpload?: boolean,
    historyBooking?: HistoRyBooking,
    cartList ?: Ghe[], // Added the type for cartList
    userInfo?: UserLogin
}

const initialState: QuanLyNguoiDungInitialState = {
    accessToken : getAccessToken() ?? undefined,
    isFetchingRegister: false,
    isFetchingLogin: false,
    isFetchingUpload: false,
    userLogin: getUserLogin(),
    cartList: [] as Ghe [], // Ensuring cartList is an array of Ghe
    userInfo: undefined // Setting userInfo as undefined
}

export const { reducer: quanLyNguoiDungReducer, actions: quanLyNguoiDungAction } = createSlice({
    name: 'quanLyNguoiDung',
    initialState,

    // Synchronous actions
    reducers: {
        logOut : (state) => {
            state.accessToken = undefined
            state.userLogin = undefined
            localStorage.removeItem("ACCESSTOKEN")
        },
        update : (state, {payload}) => {
            state.userLogin = payload
        }        
    },

    // Asynchronous actions
    extraReducers: (builder) => {
        builder.addCase(quanLyNguoiDungActionThunks.registerThunk.pending, (state) => {
            state.isFetchingRegister = true;
        })
        .addCase(quanLyNguoiDungActionThunks.registerThunk.fulfilled, (state) => {
            state.isFetchingRegister = false;
        })
        .addCase(quanLyNguoiDungActionThunks.registerThunk.rejected, (state) => {
            state.isFetchingRegister = false;
        })

        builder.addCase(quanLyNguoiDungActionThunks.loginThunk.pending, (state) => {
            state.isFetchingLogin = true;
        })
        .addCase(quanLyNguoiDungActionThunks.loginThunk.fulfilled, (state, { payload }) => {
            state.isFetchingLogin = false;
            // Save user login information to local storage
            localStorage.setItem(LOCAL_USER_LOGIN_KEY, JSON.stringify(payload));
            // Set user login information
            state.userLogin = payload;
        })
        .addCase(quanLyNguoiDungActionThunks.loginThunk.rejected, (state) => {
            state.isFetchingLogin = false;
        })

        builder.addCase(quanLyNguoiDungActionThunks.uploadThunk.pending, (state) => {
            state.isFetchingUpload = true;
        })
        .addCase(quanLyNguoiDungActionThunks.uploadThunk.fulfilled, (state) => {
            state.isFetchingUpload = false;
        })
        .addCase(quanLyNguoiDungActionThunks.uploadThunk.rejected, (state) => {
            state.isFetchingUpload = false;
        })
    }
});
