import { Images } from '../theme/'
import Localization from './languages/i18n';
const { city } = require('./city')

const config = {
    //API - FecthStatus
    nameMonth: 'Tất cả các tháng',
    nameService: 'Tất cả giao dịch',
    ACCOUNT_INFO_NORMAL_ONE: 'NORMAL_ONE',
    ACCOUNT_INFO_NORMAL_TWO: 'NORMAL_TWO',
    ACCOUNT_INFO_WORK: 'WORK',
    ACCOUNT_INFO_CONTACT: 'CONTACT',
    ACCOUNT_INFO_REF: 'REF',
    ACCOUNT_INFO_DOCUMENT: 'DOCUMENT',

    FetchStatus: {
        kNoneFetch: 'None',
        kFetching: 'Fectching',
        kFinishFetch: 'Finish'
    },
    service: [[
        {
            key: 'R1',
            sourceImage: Images.icon.registerLoan,
            txt: Localization('dkvay')
        },
        {
            key: 'R2',
            sourceImage: Images.icon.openCredit,
            txt: Localization('motindung')
        },
        {
            key: 'R7',
            sourceImage: Images.icon.buyHealthTicket,
            txt: Localization('moATM')
        },
        {
            key: 'UPDATE',
            sourceImage: Images.icon.loanCustomers,
            txt: 'Đang cập nhật'
        },
        
    ]],
    serviceDifferent: [[
        {
            key: 'R3',
            sourceImage: Images.icon.buyHealthTicket,
            txt: Localization('muabaohiem')
        },
        {
            key: 'R4',
            sourceImage: Images.icon.payByInstalments,
            txt: 'Mua sắm online'
        },
        {
            key: 'R5',
            sourceImage: Images.icon.land,
            txt: Localization('bds')
        },
        {
            key: 'R6',
            sourceImage: Images.icon.loanCustomers,
            txt: 'Bảo hiểm ô tô'
        }
    ]],
    utility: [[
        {
            key: 'U1',
            sourceImage: Images.icon.scratcard,
            txt: Localization('muathedt')
        },
        {
            key: 'U2',
            sourceImage: Images.icon.scoreCredit,
            txt: Localization('diemtindung')
        },
        {
            key: 'U3',
            sourceImage: Images.icon.findATM,
            txt: Localization('timatm')
        },
        {
            key: 'U4',
            sourceImage: Images.icon.scratcard,
            txt: 'Tính lãi suất vay'
        }
    ], 
    [
        {
            key: 'U5',
            sourceImage: Images.icon.question,
            txt: 'Lãi suất tiền gửi'
        },
        {
            key: 'U6',
            sourceImage: Images.icon.library,
            txt: Localization('tracuu')
        },
        {
            key: 'U7',
            sourceImage: Images.icon.info,
            txt: 'Mua thẻ visa'
        },
        {
            key: 'U8',
            sourceImage: Images.icon.question,
            txt: Localization('hoidap')
        }
    ]],
    cashin: [[
        {
            amt: '100,000',
            credit: 100,
            sale: 'x',
        },
        {
            amt: '200,000',
            credit: 220,
            sale: 'x',
        },
        {
            amt: '500,000',
            credit: 600,
            sale: 'x',
        },
    ], [
        {
            amt: '1,000,000',
            credit: 1300,
            sale: 'x',
        },
        {
            amt: '2,000,000',
            credit: 2800,
            sale: 'x',
        },
        {
            amt: '5,000,000',
            credit: 10000,
            sale: 'x',
        },
    ]],
    payment: [[
        {
            key: 'VISA',
            sourceImage: Images.payment.visa,
            txt: 'Thanh toán bằng thẻ Visa/Master Card'
        },
        {
            key: 'ATM',
            sourceImage: Images.payment.atm,
            txt: 'Thanh toán bằng thẻ ATM'
        },
        {
            key: 'TRANSFER',
            sourceImage: Images.payment.transfer,
            txt: 'Chuyển khoản'
        }
    ]],
    job: [
        {label: 'Sinh viên', value: 'Sinh viên'}, 
        {label: 'Nhân viên văn phòng', value: 'Nhân viên văn phòng'},
        {label: 'Công chức nhà nước', value: 'Công chức nhà nước'},
        {label: 'Công nhân', value: 'Công nhân'},
        {label: 'Kinh doanh tại nhà', value: 'Kinh doanh tại nhà'},
        {label: 'Chủ doanh nghiệp', value: 'Chủ doanh nghiệp'},
        {label: 'Nhân viên môi giới BĐS', value: 'Nhân viên môi giới BĐS'},
        {label: 'Đại lý Bảo hiểm', value: 'Đại lý Bảo hiểm'},
        {label: 'Nhân viên Ngân hàng', value: 'Nhân viên Ngân hàng'},
        {label: 'Tài xế', value: 'Tài xế'},
        {label: 'Lao động phổ thông', value: 'Lao động phổ thông'},
        {label: 'Nội trợ', value: 'Nội trợ'},
        {label: 'Nhân viên Tiếp Thị', value: 'Nhân viên Tiếp Thị'},
        {label: 'Ngành nghề khác', value: 'Ngành nghề khác'},
    ],
    loanArray: [
        // {label: 'Số tiền vay', value: 'choose'},
        {label: '3 triệu - 5 triệu', value: '3000000-5000000'},
        {label: '5 triệu - 10 triệu', value: '5000000-10000000'},
        {label: '10 triệu - 20 triệu', value: '10000000-20000000'},
    ],
    loanModal: [
        // {key: 'Sản phẩm/Dịch vụ', value: 'choose'},
        {label: 'Vay tín chấp', value: 'loanModel2'},
        {label: 'Vay thế chấp', value: 'loanModel3'},
        {label: 'Vay trả góp', value: 'loanModel3'},
        {label: 'Mở thẻ tín dụng', value: 'loanModel3'},
        {label: 'Mở bảo hiểm', value: 'loanModel3'},
    ],
    loanDestTime: [
        // {key: 'Thời hạn vay', value: 'choose'},
        {label: '1 tháng - 3 tháng', value: '1-3'},
        {label: '3 tháng - 6 tháng', value: '3-6'},
        {label: '6 tháng - 12 tháng', value: '6-12'},
        {label: '12 tháng - 24 tháng', value: '12-24'},
        {label: 'trên 24 tháng', value: '25'},
    ],
    salary: [
        {label: 'Dưới 5 triệu', value: '0-5000000'},
        {label: '5 triệu - 7 triệu', value: '5000000-7000000'},
        {label: '7 triệu - 10 triệu', value: '7000000-10000000'},
        {label: '10 triệu - 15 triệu', value: '10000000-15000000'},
        {label: '15 triệu - 20 triệu', value: '15000000-20000000'},
        {label: '20 triệu - 30 triệu', value: '20000000-30000000'},
        {label: 'Lớn hơn 30 triệu', value: '30000000-1000000000'},
    ],
    modalReceiveSalary: [
        {label: 'Qua ngân hàng', value: 'Qua ngân hàng'},
        {label: 'Tiền mặt', value: 'Tiền mặt'},
        {label: 'Tiền mặt + Ngân hàng', value: 'Tiền mặt + Ngân hàng'},
    ],
    businessTime: [
        // {label: 'Thời gian kinh doanh', value: 'choose'},
        {label: 'Dưới 6 tháng', value: '0-0.6'},
        {label: '6 tháng - 1 năm', value: '0.6-1'},
        {label: '1 năm - 2 năm', value: '1-2'},
        {label: '2 năm - 3 năm', value: '2-3'},
        {label: '3 năm - 5 năm', value: '3-5'},
        {label: 'Trên 5 năm', value: '5-0'},
    ],
    loanHistory: [
        {key: 'Bạn đã vay ở đâu chưa', value: 'choose'},
        {key: 'Chưa bao giờ', value: 'not'},
        {key: 'Đã nộp nhưng bị từ chối', value: 'deny'},
        {key: 'Đã nộp và được duyệt', value: 'accept'},
    ],
    loanATM: [
        {key: 'Bạn đã có thẻ tín chụng chưa', value: 'choose'},
        {key: 'Có', value: 'yes'},
        {key: 'Chưa có', value: 'no'},
    ],
    loanInsurance: [
        {key: 'Bạn đã mua bảo hiểm chưa', value: 'choose'},
        {key: 'Có', value: 'yes'},
        {key: 'Chưa có', value: 'no'},
    ],
    gender: [
        // {key: 'Giới tính', value: 'choose'},
        {label: 'Nam', value: 'man'},
        {label: 'Nữ', value: 'female'},
    ],
    marryStatus: [
        // {key: 'Chọn', value: 'choose'},
        {label: 'Độc thân', value: 'Độc thân'},
        {label: 'Lập gia đình', value: 'Lập gia đình'},
    ],
    education: [
        // {key: 'Chọn', value: 'choose'},
        {label: 'Tốt nghiệp 12', value: 'Tốt nghiệp 12'},
        {label: 'Cao đẳng', value: 'Cao đẳng'},
    ],
    major: [
        // {key: 'Chuyên ngành', value: 'choose'},
        {label: 'Công nghệ thông tin', value: 'Công nghệ thông tin'},
        {label: 'Tài chính ngân hàng', value: 'Tài chính ngân hàng'},
    ],            
    company: [
        // {key: 'Ngân hàng/ Công ty bảo hiểm', value: 'choose'},
        {label: 'Agribank', value: 'Agribank'},
        {label: 'Vietinbank', value: 'Vietinbank'},
    ],
    jobPosition: [
        // {label: '', value: ''},
        {label: 'Nhân viên', value: 'Nhân viên'}, 
        {label: 'Chuyên viên', value: 'Chuyên viên'},
        {label: 'Trưởng nhóm', value: 'Trưởng nhóm'},
        {label: 'Trưởng phòng', value: 'Trưởng phòng'},
        {label: 'Quản lý', value: 'Quản lý'},
        {label: 'Giám sát', value: 'Giám sát'},
        {label: 'Giám đốc', value: 'Giám đốc'},
        {label: 'Cộng tác viên', value: 'Cộng tác viên'},
    ],
    stockexchanges: [[
        {
            name: 'Nguyễn Văn A',
            address: 'Gò vấp, Hồ Chí Minh',
            modalJob: 'Đi làm hưởng lương',
            salary: '7 triệu - 10 triệu',
            created: '08:30 22/11/2018',
            credits: '17 credits',
        },
        {
            name: 'Nguyễn Văn A',
            address: 'Gò vấp, Hồ Chí Minh',
            modalJob: 'Đi làm hưởng lương',
            salary: '7 triệu - 10 triệu',
            created: '08:30 22/11/2018',
            credits: '17 credits',
        },
    ], [
        {
            name: 'Nguyễn Văn A',
            address: 'Gò vấp, Hồ Chí Minh',
            modalJob: 'Đi làm hưởng lương',
            salary: '7 triệu - 10 triệu',
            created: '08:30 22/11/2018',
            credits: '17 credits',
        },
        {
            name: 'Nguyễn Văn A',
            address: 'Gò vấp, Hồ Chí Minh',
            modalJob: 'Đi làm hưởng lương',
            salary: '7 triệu - 10 triệu',
            created: '08:30 22/11/2018',
            credits: '17 credits',
        },
    ], [
        {
            name: 'Nguyễn Văn A',
            address: 'Gò vấp, Hồ Chí Minh',
            modalJob: 'Đi làm hưởng lương',
            salary: '7 triệu - 10 triệu',
            created: '08:30 22/11/2018',
            credits: '17 credits',
        },
        {
            name: 'Nguyễn Văn A',
            address: 'Gò vấp, Hồ Chí Minh',
            modalJob: 'Đi làm hưởng lương',
            salary: '7 triệu - 10 triệu',
            created: '08:30 22/11/2018',
            credits: '17 credits',
        },
    ], [
        {
            name: 'Nguyễn Văn A',
            address: 'Gò vấp, Hồ Chí Minh',
            modalJob: 'Đi làm hưởng lương',
            salary: '7 triệu - 10 triệu',
            created: '08:30 22/11/2018',
            credits: '17 credits',
        },
        {
            name: 'Nguyễn Văn A',
            address: 'Gò vấp, Hồ Chí Minh',
            modalJob: 'Đi làm hưởng lương',
            salary: '7 triệu - 10 triệu',
            created: '08:30 22/11/2018',
            credits: '17 credits',
        },
    ]],
    // infoCity: [
    //     // {key: 'Tỉnh/Thành phố', value: 'choose'}, 
    //     {"label": "Hà Nội", "value": '01'}, 
    //     {label: 'Hồ Chí Minh', value: 'ho chi minh'}
    // ],
    infoCity: city,
    infoDistrict: [
        // {label: 'Quận/Huyện', value: 'choose'}, 
        {label: 'Quận 1', value: 'Quận 1'}, 
        {label: 'Quận 2', value: 'Quận 2'}, 
        {label: 'Quận 3', value: 'Quận 3'}, 
        {label: 'Quận 4', value: 'Quận 4'}, 
        {label: 'Quận 5', value: 'Quận 5'}, 
    ],
    infoWard: [
        // {key: 'Phường/Xã', value: 'choose'}, 
        {label: 'Phường 1', value: 'Phường 1'}, 
        {label: 'Phường 2', value: 'Phường 2'}, 
        {label: 'Phường 3', value: 'Phường 3'}, 
        {label: 'Phường 4', value: 'Phường 4'}, 
        {label: 'Phường 5', value: 'Phường 5'}, 
    ],
    infoModalLive: [
        // {key: 'Vui lòng chọn hình thức cứ trú', value: 'choose'}, 
        {label: 'Ở trọ', value: 'Ở trọ'}, 
        {label: 'Chung cư', value: 'Chung cư'}
    ],
    hintHelper: [
        {label: 1, value: 'Giới tính'}, {label: 2, value: 'Khu vực'}, 
        {label: 3, value: 'Sản phẩm'}, {label: 4, value: 'Tổ chức'}
    ],
    hintStockExchange: [
        {label: 2, value: 'Khu vực'}, {label: 3, value: 'Sản phẩm'},
        {label: 5, value: 'Nghề nghiệp'}, {label: 6, value: 'Thu nhập'}
    ],
    stockexchangesV2: [
        {
            avatar: Images.awatar.default,
            name: 'NGUYEN VAN A',
            city: 'Ho Chi Minh',
            loanCreated: '17:30 28/11/2018',
            loanAmount: '5,000,000',
            loanTimeDes: '24 tháng',
            loanModal: 'Vay theo đăng ký xe máy',
            job: 'Nhân viên văn phòng',
            salary: '10,000,000 VND/Tháng',
            status: 'Ngày 20/12 gặp khách hàng nhận hồ sơ'
        },
        {
            avatar: Images.awatar.default,
            name: 'NGUYEN VAN A',
            city: 'Ho Chi Minh',
            loanCreated: '17:30 28/11/2018',
            loanAmount: '5,000,000',
            loanTimeDes: '24 tháng',
            loanModal: 'Vay theo đăng ký xe máy',
            job: 'Nhân viên văn phòng',
            salary: '10,000,000 VND/Tháng',
            status: 'Ngày 20/12 gặp khách hàng nhận hồ sơ'
        },
        {
            avatar: Images.awatar.default,
            name: 'NGUYEN VAN A',
            city: 'Ho Chi Minh',
            loanCreated: '17:30 28/11/2018',
            loanAmount: '5,000,000',
            loanTimeDes: '24 tháng',
            loanModal: 'Vay theo đăng ký xe máy',
            job: 'Nhân viên văn phòng',
            salary: '10,000,000 VND/Tháng',
            status: 'Ngày 20/12 gặp khách hàng nhận hồ sơ'
        }
    ],
    customerStatus: [
        // {key: 'Chọn tình trạng khách hàng', value: 'choose'}, 
        {label: 'Đã hẹn', value: 'Đã hẹn'}, 
        {label: 'Chưa hẹn', value: 'Chưa hẹn'}
    ],
    contactModal: [
        // {label: 'Quan hệ', value: 'choose'},
        {label: 'Bố/Mẹ', value: 'Bố/Mẹ'},
        {label: 'Vợ/Chồng', value: 'Vợ/Chồng'},
        {label: 'Anh/Chị', value: 'Anh/Chị'},
        {label: 'Đồng nghiệp', value: 'Đồng nghiệp'},
        {label: 'Bạn bè', value: 'Bạn bè'},
    ],
    infoDoc: [
        // {key: 'Chọn', value: 'choose'},
        {label: 'Giấy phép lái xe', value: 'Tốt nghiệp 12'},
        {label: 'Thẻ nhân viên', value: 'Cao đẳng'},
        {label: 'Thẻ sinh viên', value: 'Cao đẳng'},
    ],
    creditSource: [
        {label: 'Visa', value: 'Visa'},
        {label: 'Master', value: 'Master'},
        {label: 'JCB', value: 'JCB'},
        {label: 'Amex', value: 'Amex'},
        {label: 'UnionPay', value: 'UnionPay'},
    ],
    creditAmount: [
        {label: '3 triệu - 5 triệu', value: '3000000-5000000'},
        {label: '5 triệu - 10 triệu', value: '5000000-10000000'},
        {label: '10 triệu - 20 triệu', value: '10000000-20000000'},
        {label: '20 triệu - 50 triệu', value: '20000000-50000000'},
    ],
}

export default config