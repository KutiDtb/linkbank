import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import { scale } from '../../theme/scaling'
import Localization from '../../config/languages/i18n'
import { Colors, Images, AppStyle } from '../../theme'
import ButtonNextType2 from '../../components/button/BtnNext2'
import Share from 'react-native-share'
import * as Buz from '../../saga/buz/app-buz'

class ReferalShareContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.account = Buz.getAccount()
    }

    actionBack = () => {
        this.props.navigation.goBack()
    }
    baseRef = (obj) => this.base = obj
    render() {
        return (
            <BaseContainer
                currentScreen={'ReferalShare'}
                ref={this.baseRef}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={'Giới thiệu bạn bè'}
                showHeaderBack={true}
                actionHeaderBack={this.actionBack}
                ownStyle={{
                    flex: 1,
                    backgroundColor: Colors.whiteTwo,
                    justifyContent: 'space-between',
                }}
            >
                <ScrollView style={{
                    flex: 1,
                    flexDirection: 'column',
                    // marginTop: scale(10)
                }} showsVerticalScrollIndicator={false}>
                    <View style={{
                        marginTop: scale(20),
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Image style={{
                            width: scale(200),
                            height: scale(200),
                        }} resizeMode={'contain'} source={Images.referal.share} />
                    </View>
                    <View style={{
                        marginTop: scale(20),
                        paddingLeft: scale(10),
                        paddingRight: scale(10),
                    }}>
                        <Text style={AppStyle.Paragraph_Left_Black}>{'1. Giới thiệu Tư vấn viên đăng ký thành công - HH 10% số tiền TVV nạp'}</Text>
                    </View>

                    <View style={{
                        marginTop: scale(10),
                        paddingLeft: scale(10),
                        paddingRight: scale(10),
                    }}>
                        <Text style={AppStyle.Paragraph_Left_Black}>{'2. Giới thiệu KH đăng ký vay - HH 10% TVV nhận đơn'}</Text>
                    </View>

                    <View style={{
                        marginTop: scale(10),
                        paddingLeft: scale(10),
                        paddingRight: scale(10),
                    }}>
                        <Text style={AppStyle.Paragraph_Left_Black}>{'3. Giới thiệu KH đăng ký vay thành công vào các tổ chức tài chính, ngân hàng - HH 1-4%'}</Text>
                    </View>

                    <View style={{
                        marginTop: scale(10),
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <View style={{
                            padding: scale(10),
                            borderColor: Colors.grey,
                            borderWidth: scale(1),
                            borderRadius: scale(2),
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={AppStyle.Paragraph_Center_Black}>{'MÃ CỦA BẠN: '}</Text>
                            <Text style={[AppStyle.Paragraph_Center_Black, { color: Colors.alive_BD3F32 }]}>{this.account.phone}</Text>
                        </View>
                    </View>


                </ScrollView>
                <View style={{
                    padding: scale(10),
                    paddingTop: scale(0)
                }}>
                    <ButtonNextType2
                        actionPress={this.actionShare}
                        disable={false}
                        title={'Chia sẽ mã giới thiệu'}
                        textStyle={AppStyle.Title_Center_Black}
                    />
                </View>
            </BaseContainer>
        )
    }

    actionShare = () => {
        const shareOptions = {
            title: 'Chia sẽ mạng xã hội',
            message: 'Linkbank - Sàn vay vốn trực tuyến số 1 Việt Nam. Hãy đăng ký ngay để nhận được các khoản vay và thẻ tín dụng nhanh nhất với lãi suất ưu đãi nhé. ',
            url: 'http://linkbank.vn/',
            subject: "Share Link" //  for email
        };

        Share.open(shareOptions)
            .then((res) => { console.log(res) })
            .catch((err) => { err && console.log(err); });
    }

}
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(ReferalShareContainer)