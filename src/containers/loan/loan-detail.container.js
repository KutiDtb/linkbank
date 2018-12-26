import React, { PureComponent } from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import InputName from '../../components/input/InputName'
import Input from '../../components/input/Input'
import InputMask from '../../components/input/InputMask'
import { verticalScale, scale } from '../../theme/scaling';
import Localization from '../../config/languages/i18n';
import { AppStyle, Colors, Images } from '../../theme'

class LoanDetailContainer extends PureComponent {
    constructor(props) {
        super(props);
    }

    renderPartLoan() {
        return (
            <View style={{
                flexDirection: 'column',
                marginTop: scale(20)
            }}>
                <Text style={AppStyle.Paragraph_Left_Black}> {'Thông tin đơn vay'}</Text>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={{
                        flex: 1 / 2,
                    }}>
                        <InputName
                            keyboardType={'default'}
                            name={'Số tiền vay'}
                            placeholder={'10 triệu - 10 triệu'}
                            editable={false}
                            onChangeText={(text) => this.onChangeText(text)}
                        />
                    </View>

                    <View style={{
                        flex: 1 / 2,
                    }}>
                        <InputName
                            keyboardType={'default'}
                            name={'Thời hạn vay'}
                            placeholder={'12 tháng - 24 tháng'}
                            editable={false}
                            onChangeText={(text) => this.onChangeText(text)}
                        />
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={{
                        flex: 1 / 2,
                    }}>
                        <InputName
                            keyboardType={'default'}
                            name={'Tình trạng vay'}
                            placeholder={'Chưa'}
                            editable={false}
                            onChangeText={(text) => this.onChangeText(text)}
                        />
                    </View>

                    <View style={{
                        flex: 1 / 2,
                    }}>
                        <InputName
                            keyboardType={'default'}
                            name={'Tình trạng mở thẻ'}
                            placeholder={'Có'}
                            editable={false}
                            onChangeText={(text) => this.onChangeText(text)}
                        />
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={{
                        flex: 1 / 2,
                    }}>
                        <InputName
                            keyboardType={'default'}
                            name={'Tình trạng bảo hiểm'}
                            placeholder={'Chưa'}
                            editable={false}
                            onChangeText={(text) => this.onChangeText(text)}
                        />
                    </View>

                    <View style={{
                        flex: 1 / 2,
                    }}>
                        
                    </View>
                </View>
            </View>
        )
    }


    renderPartInfo() {
        return (
            <View style={{
                flexDirection: 'column',
                marginTop: scale(20)
            }}>
                <Text style={AppStyle.Paragraph_Left_Black}> {'Thông tin cá nhân'}</Text>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={{
                        flex: 1 / 2,
                    }}>
                        <InputName
                            keyboardType={'default'}
                            name={'Họ tên'}
                            placeholder={'Nguyen Van A'}
                            editable={false}
                            onChangeText={(text) => this.onChangeText(text)}
                        />
                    </View>

                    <View style={{
                        flex: 1 / 2,
                    }}>
                        <InputName
                            keyboardType={'default'}
                            name={'Số CMND/ Căn cước'}
                            placeholder={'123456789'}
                            editable={false}
                            onChangeText={(text) => this.onChangeText(text)}
                        />
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={{
                        flex: 1 / 2,
                    }}>
                        <InputName
                            keyboardType={'default'}
                            name={'Ngày sinh'}
                            placeholder={'02-09-1997'}
                            editable={false}
                            onChangeText={(text) => this.onChangeText(text)}
                        />
                    </View>

                    <View style={{
                        flex: 1 / 2,
                    }}>
                        <InputName
                            keyboardType={'default'}
                            name={'Số điện thoại'}
                            placeholder={'0394084331'}
                            editable={false}
                            onChangeText={(text) => this.onChangeText(text)}
                        />
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={{
                        flex: 1 / 2,
                    }}>
                        <InputName
                            keyboardType={'default'}
                            name={'Email'}
                            placeholder={'abc@gmail.com'}
                            editable={false}
                            onChangeText={(text) => this.onChangeText(text)}
                        />
                    </View>

                    <View style={{
                        flex: 1 / 2,
                    }}>
                        <InputName
                            keyboardType={'default'}
                            name={'Địa chỉ cư trú'}
                            placeholder={''}
                            editable={false}
                            onChangeText={(text) => this.onChangeText(text)}
                        />
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={{
                        flex: 1 / 2,
                    }}>
                        <InputName
                            keyboardType={'default'}
                            name={'Tỉnh/ Thành phố'}
                            placeholder={'Hồ Chí Minh'}
                            editable={false}
                            onChangeText={(text) => this.onChangeText(text)}
                        />
                    </View>

                    <View style={{
                        flex: 1 / 2,
                    }}>
                        <InputName
                            keyboardType={'default'}
                            name={'Quận/ Huyện'}
                            placeholder={'Gò vấp'}
                            editable={false}
                            onChangeText={(text) => this.onChangeText(text)}
                        />
                    </View>
                </View>
            </View>
        )
    }

    renderPartJob() {
        return (
            <View style={{
                flexDirection: 'column',
                marginTop: scale(20)
            }}>
                <Text style={AppStyle.Paragraph_Left_Black}> {'Nơi làm việc'}</Text>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={{
                        flex: 1 / 2,
                    }}>
                        <InputName
                            keyboardType={'default'}
                            name={'Loại hình công việc'}
                            placeholder={'Văn phòng'}
                            editable={false}
                            onChangeText={(text) => this.onChangeText(text)}
                        />
                    </View>

                    <View style={{
                        flex: 1 / 2,
                    }}>
                        <InputName
                            keyboardType={'default'}
                            name={'Tên doanh nghiệp'}
                            placeholder={'Công ty Giấy Việt Nam'}
                            editable={false}
                            onChangeText={(text) => this.onChangeText(text)}
                        />
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={{
                        flex: 1 / 2,
                    }}>
                        <InputName
                            keyboardType={'default'}
                            name={'Địa chỉ kinh doanh'}
                            placeholder={'Hồ Chí Minh'}
                            editable={false}
                            onChangeText={(text) => this.onChangeText(text)}
                        />
                    </View>

                    <View style={{
                        flex: 1 / 2,
                    }}>
                        <InputName
                            keyboardType={'default'}
                            name={'Thu nhập hàng tháng'}
                            placeholder={'5 triệu - 7 triệu'}
                            editable={false}
                            onChangeText={(text) => this.onChangeText(text)}
                        />
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={{
                        flex: 1 / 2,
                    }}>
                        <InputName
                            keyboardType={'default'}
                            name={'Hình thức nhận lương'}
                            placeholder={'Chuyển khoản'}
                            editable={false}
                            onChangeText={(text) => this.onChangeText(text)}
                        />
                    </View>

                    <View style={{
                        flex: 1 / 2,
                    }}>
                        
                    </View>
                </View>
            </View>
        )
    }

    actionBack = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <BaseContainer
                currentScreen={'LoanDetail'}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={'Chi tiết đơn vay'}
                showHeaderBack={true}
                actionHeaderBack={this.actionBack}
            >
                <View style={{
                    flex: 1,
                    flexDirection: 'column'
                }}>
                    <ScrollView style={{
                        flex: 1,
                        flexDirection: 'column',
                        // marginTop: verticalScale(10)
                    }}>
                        {this.renderPartLoan()}
                        {this.renderPartInfo()}
                        {this.renderPartJob()}
                    </ScrollView>
                </View>
            </BaseContainer>
        )
    }

    onChangeText(text) {
        console.log(text)
    }

    actionNext = () => {

    }
}
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(LoanDetailContainer)