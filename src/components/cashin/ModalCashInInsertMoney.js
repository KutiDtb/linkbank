import React, { PureComponent } from 'react';
import { Text, View, TextInput, Platform, TouchableOpacity } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';
import { PropTypes } from 'prop-types'
import Modal from 'react-native-modal'

export default class CashInModalInsertMoney extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                isVisible={this.props.showModal}
                backdropColor={Colors.black}
                backdropOpacity={0.7}
                style={{
                }}
                onBackdropPress={() => {
                    if (this.props.actionResult) {
                        this.props.actionResult()
                    }
                }}
            >

                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: scale(20),
                    borderRadius: scale(5),
                    backgroundColor: Colors.whiteTwo,
                    opacity: 1,
                    // height: scale(150),
                }} >
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}>
                        <Text style={AppStyle.Paragraph_Left_Black}> {'Thông tin chuyển khoản'}</Text>
                    </View>

                    <Text style={[AppStyle.Paragraph_Center_Black, {marginTop: scale(10)}]}> {'Vui lòng ghi rõ tên gói Credit (100K hoặc 200K hoặc 500K hoặc 1000K hoặc 2000K hoặc 5000K) và EMail tài khoản Linkbank của bạn trong nội dung chuyển khoản'}</Text>
                    <Text style={[AppStyle.Paragraph_Center_Black, {marginTop: scale(10), fontWeight: 'bold'}]}> {'VD: Credit 100 linkbankvn@gmail.com'}</Text>
                    <Text style={[AppStyle.Paragraph_Center_Black, {marginTop: scale(10)}]}> {'Tên chủ tài khoản: PHAN THANH QUANG'}</Text>
                    <Text style={[AppStyle.Paragraph_Center_Black, {marginTop: scale(10)}]}> {'Số tài khoản: 123433009'}</Text>
                    <Text style={[AppStyle.Paragraph_Center_Black, {marginTop: scale(10)}]}> {'Số thẻ: 9704321180965659'}</Text>
                    <Text style={[AppStyle.Paragraph_Center_Black, {marginTop: scale(10)}]}> {'Tên ngân hàng: NH Viet Nam Thinh Vuong (VPBank)'}</Text>
                    <Text style={[AppStyle.Paragraph_Center_Black, {marginTop: scale(10)}]}> {'Chi nhánh: TP.HCM'}</Text>
                    <Text style={[AppStyle.Paragraph_Center_Black, {marginTop: scale(10)}]}> {'Tỉnh/Thành phố: TP.HCM'}</Text>
                    <Text style={[AppStyle.Paragraph_Center_Black, {marginTop: scale(10)}]}> {'Mã SWIFT (chuyển tiền quốc tế): VPBKVNVX'}</Text>

                    <TouchableOpacity style={{
                        marginTop: scale(20),
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }} onPress={() => {
                        if (this.props.actionResult) {
                            this.props.actionResult()
                        }
                    }}>
                        <Text style={AppStyle.Paragraph_Right_Black}> {'Đóng'}</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }

}

CashInModalInsertMoney.propTypes = {
}

CashInModalInsertMoney.defaultProps = {
}