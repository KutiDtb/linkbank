import React, { PureComponent } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    // Modal
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import { verticalScale, scale } from '../../theme/scaling'
import Localization from '../../config/languages/i18n'
import Picker from '../../components/input/Picker'
import config from '../../config/config'
import StockExchange from '../../components/stockexchange/StockExchange'
import { Colors, Images, AppStyle } from '../../theme';
import Modal from "react-native-modal"
import RadioForm from 'react-native-simple-radio-button'
import ButtonNext from '../../components/button/ButtonNext'

var radio_props = [
    {label: 'Nhận khách 1 lượt', value: 0 },
    {label: 'Nhận hết lượt', value: 1 }
  ];

class ResultStockExchangeContainer extends PureComponent {
    constructor(props) {

        super(props);

        this.state = {
            showModalTicket: false,
        }
    }

    renderModalBuyTicket() {
        if (this.state.showModalTicket) {
            return (
                <Modal isVisible={this.state.showModalTicket}>
                    <View style={{
                        width: scale(335),
                        height: scale(404),
                        paddingTop: scale(20),
                        paddingLeft: scale(20),
                        paddingRight: scale(20),
                        backgroundColor: Colors.whiteTwo,
                        flexDirection: 'column'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <Text style={AppStyle.Paragraph_Left_Black}>{'Bạn có muốn dùng'}</Text>
                            <TouchableOpacity onPress={this.actionHideModalBuyTicket}>
                                <Image source={Images.icon.close} />
                            </TouchableOpacity>
                        </View>
    
                        <View style={{
                            paddingTop: scale(20),
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>
                            <Text style={AppStyle.Title_Center_Red}>{'17 credits'}</Text>
                        </View>
                        <View style={{
                            paddingTop: scale(20),
                            flexDirection: 'column',
                        }}>
                            <Text style={AppStyle.Paragraph_Center_Black}>{'Để liên hệ với khách hàng không'}</Text>
                            <Text style={AppStyle.Paragraph_Center_Black}>{'(Chọn nhận hết lượt khách có thể tăng khả năng chốt đơn lên 100%)'}</Text>
                        </View>
                        <View style={{
                            paddingTop: scale(30),
                            flexDirection: 'column',
                        }}>
                            <RadioForm
                                radio_props={radio_props}
                                initial={0}
                                onPress={(value) => this.actionChooseTypeTicket(value)}
                            />
                        </View>
                        <ButtonNext
                            actionPress={this.actionBuyTicket}
                            disable={false}
                            title={'Nhận khách ngay'}
                            style={{
                                backgroundColor: Colors.red
                            }}
                        />
                        <View style={{
                            paddingTop: scale(20),
                            flexDirection: 'row',
                        }}>
                            <Text style={AppStyle.Paragraph_Left_Black}>{'Bạn đang có 180 Credit'}</Text>
                            <TouchableOpacity>
                                <Text style={AppStyle.Paragraph_Left_Red}>{' Nạp thêm Credit'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )
        }
    }

    actionBack = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <BaseContainer
                currentScreen={'ResultStockExchangeContainer'}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={Localization('consultation')}
                showHeaderBack={true}
                actionHeaderBack={this.actionBack}
            >
                {this.renderModalBuyTicket()}
                <ScrollView style={{
                    flex: 1,
                    flexDirection: 'column',
                }}>

                    <StockExchange
                        data={config.stockexchanges}
                        actionLoanTicket={this.actionLoanTicket.bind(this)}
                    />

                </ScrollView>
            </BaseContainer>
        )
    }

    actionNext = () => {

    }

    onChangeText(text) {
        console.log(text)
    }

    actionLoanTicket(data) {
        console.log('result-stockexchange ', JSON.stringify(data))
        this.setState({
            showModalTicket: true
        })
    }
    
    actionChooseTypeTicket = (value) => {
        console.log('actionChooseTypeTicket', value)
    }

    actionBuyTicket = () => {
        this.setState({
            showModalTicket: false
        })
    }

    actionHideModalBuyTicket = () => {
        this.setState({
            showModalTicket: false
        })
    }
}
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(ResultStockExchangeContainer)