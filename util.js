// list id province
const listIdsProvince = [
    { id: "59cdc41a9d2a1700271c2b0b", name: "An Giang" },
    { id: "59cdc41a9d2a1700271c2b0c", name: "Bà Rịa - Vũng Tàu" },
    { id: "59cdc41a9d2a1700271c2b13", name: "Bình Dương" },
    { id: "59cdc41a9d2a1700271c2b14", name: "Bình Phước" },
    { id: "59cdc41b9d2a1700271c2b15", name: "Bình Thuận" },
    { id: "59cdc41a9d2a1700271c2b12", name: "Bình Định" },
    { id: "59cdc41a9d2a1700271c2b0f", name: "Bạc Liêu" },
    { id: "59cdc41a9d2a1700271c2b0e", name: "Bắc Giang" },
    { id: "59cdc41a9d2a1700271c2b0d", name: "Bắc Kạn" },
    { id: "59cdc41a9d2a1700271c2b10", name: "Bắc Ninh" },
    { id: "59cdc41a9d2a1700271c2b11", name: "Bến Tre" },
    { id: "59cdc41b9d2a1700271c2b18", name: "Cao Bằng" },
    { id: "59cdc41b9d2a1700271c2b16", name: "Cà Mau" },
    { id: "59cdc41b9d2a1700271c2b1e", name: "Gia Lai" },
    { id: "59cdc41b9d2a1700271c2b1f", name: "Hà Giang" },
    { id: "59cdc41b9d2a1700271c2b20", name: "Hà Nam" },
    { id: "59cdc41b9d2a1700271c2b21", name: "Hà Tĩnh" },
    { id: "59cdc41b9d2a1700271c2b24", name: "Hòa Bình" },
    { id: "59cdc41b9d2a1700271c2b25", name: "Hưng Yên" },
    { id: "59cdc41b9d2a1700271c2b22", name: "Hải Dương" },
    { id: "59cdc41b9d2a1700271c2b47", name: "Hậu Giang" },
    { id: "59cdc41b9d2a1700271c2b26", name: "Khánh Hòa" },
    { id: "59cdc41b9d2a1700271c2b27", name: "Kiên Giang" },
    { id: "59cdc41b9d2a1700271c2b28", name: "Kon Tum" },
    { id: "59cdc41b9d2a1700271c2b29", name: "Lai Châu" },
    { id: "59cdc41b9d2a1700271c2b2d", name: "Long An" },
    { id: "59cdc41b9d2a1700271c2b2c", name: "Lào Cai" },
    { id: "59cdc41b9d2a1700271c2b2a", name: "Lâm Đồng" },
    { id: "59cdc41b9d2a1700271c2b48", name: "Lưu học sinh đang ở nước ngoài" },
    { id: "59cdc41b9d2a1700271c2b2b", name: "Lạng Sơn" },
    { id: "59cdc41b9d2a1700271c2b2e", name: "Nam Định" },
    { id: "59cdc41b9d2a1700271c2b2f", name: "Nghệ An" },
    { id: "59cdc41b9d2a1700271c2b30", name: "Ninh Bình" },
    { id: "59cdc41b9d2a1700271c2b31", name: "Ninh Thuận" },
    { id: "59cdc41b9d2a1700271c2b32", name: "Phú Thọ" },
    { id: "59cdc41b9d2a1700271c2b33", name: "Phú Yên" },
    { id: "59cdc41b9d2a1700271c2b34", name: "Quảng Bình" },
    { id: "59cdc41b9d2a1700271c2b35", name: "Quảng Nam" },
    { id: "59cdc41b9d2a1700271c2b36", name: "Quảng Ngãi" },
    { id: "59cdc41b9d2a1700271c2b37", name: "Quảng Ninh" },
    { id: "59cdc41b9d2a1700271c2b38", name: "Quảng Trị" },
    { id: "59cdc41b9d2a1700271c2b39", name: "Sóc Trăng" },
    { id: "59cdc41b9d2a1700271c2b3a", name: "Sơn La" },
    { id: "59cdc41b9d2a1700271c2b17", name: "TP Cần Thơ" },
    { id: "59cdc41a9d2a1700271c2b09", name: "TP Hà Nội" },
    { id: "59cdc41b9d2a1700271c2b23", name: "TP Hải Phòng" },
    { id: "59cdc41a9d2a1700271c2b0a", name: "TP Hồ Chí Minh" },
    { id: "59cdc41b9d2a1700271c2b19", name: "TP Đà Nẵng" },
    { id: "59cdc41b9d2a1700271c2b3e", name: "Thanh Hóa" },
    { id: "59cdc41b9d2a1700271c2b3c", name: "Thái Bình" },
    { id: "59cdc41b9d2a1700271c2b3d", name: "Thái Nguyên" },
    { id: "59cdc41b9d2a1700271c2b3f", name: "Thừa Thiên Huế" },
    { id: "59cdc41b9d2a1700271c2b40", name: "Tiền Giang" },
    { id: "59cdc41b9d2a1700271c2b41", name: "Trà Vinh" },
    { id: "59cdc41b9d2a1700271c2b42", name: "Tuyên Quang" },
    { id: "59cdc41b9d2a1700271c2b3b", name: "Tây Ninh" },
    { id: "59cdc41b9d2a1700271c2b43", name: "Vĩnh Long" },
    { id: "59cdc41b9d2a1700271c2b44", name: "Vĩnh Phúc" },
    { id: "59cdc41b9d2a1700271c2b45", name: "Yên Bái" },
    { id: "59cdc41b9d2a1700271c2b1b", name: "Điện Biên" },
    { id: "59cdc41b9d2a1700271c2b1a", name: "Đắk Lắk" },
    { id: "59cdc41b9d2a1700271c2b46", name: "Đắk Nông" },
    { id: "59cdc41b9d2a1700271c2b1c", name: "Đồng Nai" },
    { id: "59cdc41b9d2a1700271c2b1d", name: "Đồng Tháp" }
];

export { listIdsProvince };