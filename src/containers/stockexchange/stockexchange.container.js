import React, { PureComponent } from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import Header from '../../components/common/Header'
import { verticalScale } from '../../theme/scaling'
import Localization from '../../config/languages/i18n'
import InputPicker from '../../components/input/InputPicker'
import Picker from '../../components/input/Picker'
import { Screens, Colors, Images } from '../../theme'
import config from '../../config/config'

class StockExchangeContainer extends PureComponent {
    constructor(props) {
        super(props);
    }

    actionBack = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <BaseContainer
                currentScreen={'Account'}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={Localization('consultation')}
                actionHeaderBack={this.actionBack}
                showHeaderNext={true}
                actionHeaderNext={this.actionNext}
            >
                <View style={{
                    flex: 1,
                    flexDirection: 'column'
                }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        marginTop: verticalScale(10)
                    }}>
                        <Picker
                            name={Localization('loaihinhvay')}
                            data={config.loanModal}
                            onValueChange={(text) => this.onChangeText(text)}
                        />

                        <Picker
                            name={Localization('thunhap')}
                            data={config.salary}
                            onValueChange={(text) => this.onChangeText(text)}
                        />

                        <Picker
                            name={Localization('htnhanluong')}
                            data={config.loanDestTime}
                            onValueChange={(text) => this.onChangeText(text)}
                        />

                        <Picker
                            name={Localization('tinhthanhpho')}
                            data={config.infoCity}
                            onValueChange={(text) => this.onChangeText(text)}
                        />

                        <Picker
                            name={Localization('ngayDKvay')}
                            data={config.infoDistrict}
                            onValueChange={(text) => this.onChangeText(text)}
                        />
                    </View>
                </View>
            </BaseContainer>
        )
    }

    actionNext = () => {
        this.props.navigation.navigate(Screens.ResultStockExchange)
    }

    onChangeText(text) {
        console.log(text)
    }
}
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(StockExchangeContainer)