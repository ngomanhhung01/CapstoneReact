export type UserLogin = {
    taiKhoan: string
    hoTen: string
    email: string
    soDT: string
    maNhom: string
    maLoaiNguoiDung: string
    accessToken: string
}

export type UserByAccessToken = Omit<UserLogin, "accessToken"> & {
    thongTinDatVe?: [];
    loaiNguoiDung: {
        maLoaiNguoiDung: "KhachHang" | "QuanTri";
    };
};

enum MaLoaiNgioiDung {
    QUAN_TRI = 'QuanTri',
    KHACH_HANG = 'KhachHang',
}

type Ghe = {
    maHeThongRap: string
    tenHeThongRap: string
    maCumRap: string
    tenCumRap: string
    maRap: number
    tenRap: string
    maGhe: number
    tenGhe: string
}

type VePhim = {
    danhSachGhe: Ghe[]
    maVe: number
    ngayDat: string
    tenPhim: string
    hinhAnh: string
    giaVe: number
    thoiLuongPhim: number
}

export type UserInfo = UserLogin & {
    loaiNguoiDung: {
        maLoaiNguoiDung: MaLoaiNgioiDung
        tenLoai: 'Quản Trị' | 'Khách Hàng'
    }
    thongTinDatVe: VePhim[]
}

export type HistoRyBooking = {
    taiKhoan: string;
    hoTen: string;
    email: string;
    soDT: string;
    maNhom: string;
    maLoaiNguoiDung: "KhachHang" | "QUANTRI";
    accessToken: string;
    thongTinDatVe?: {
        danhSachGhe: {
            maCumRap: string;
            maGhe: number;
            maHeThongRap: string;
            maRap: number;
            tenCumRap: string;
            tenGhe: string;
            tenHeThongRap: string;
            tenRap: string;
        }[];
        giaVe: number;
        hinhAnh: string;
        maVe: number;
        ngayDat: string;
        tenPhim: string;
        thoiLuongPhim: number;
    }[];
    loaiNguoiDung: {
        maLoaiNguoiDung: "KhachHang" | "QuanTri";
    };
};
