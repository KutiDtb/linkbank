import React from 'react'
import {
    ActivityIndicator,
    StatusBar,
    View,
} from 'react-native'
import { connect } from 'react-redux'
import * as Buz from '../../saga/buz/app-buz'
import SplashScreen from 'react-native-splash-screen'
import AccountAction, { AccountTypes } from '../../redux/account.redux'
import WalletApi from '../../saga/client/wallet.api'

class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props)
        this._bootstrapAsync()
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        var account = await Buz.loadAccount()
        console.log('account-AuthLoadingScreen', account)
        var firstScreen = 'AuthenRouter'
        if (account) {
            account = JSON.parse(account)
            if (account.logout === false) {
                firstScreen = 'TabHome'
                WalletApi.setHeaderToken(account.accessToken)
                // Should load data for app
                this.props.initData()
            }
            
        }
        SplashScreen.hide()
        this.props.navigation.navigate(firstScreen)
        // this.props.navigation.navigate('AuthenRouter')
    }

    // Render any loading content that you like here
    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => ({
    initData: () => dispatch(AccountAction.initData()),
})


export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen)