import React, { PureComponent } from 'react';
import {
    View,
    Text,
    BackHandler,
    StyleSheet
} from 'react-native';
import { scale, verticalScale } from '../../theme/scaling';
import { Colors } from '../../theme'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../../components/common/Header'
import Loading from '../../components/exception/Loading'
import ErrorAlert from '../../components/exception/ErrorAlert'
import UpdateAlert from '../../components/exception/UpdateAlert'

const styles = StyleSheet.create({
    statusBar: {
        height: 0
    },
    masterContainer: {
        flex: 1,
        paddingLeft: scale(20),
        paddingRight: scale(20),
        paddingTop: scale(10),
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: Colors.whiteTwo,
    },
})


export default class BaseContainer extends PureComponent {
    constructor(props) {
        super(props);
        // this.handleBackKey = this.handleBackKey.bind(this);

        this.state = {
            animationLoading: false,

            showErrorAlert: false,
            msgErrorAlert: '',

            updateAlertAllowHide: true,
            updateAlertShow: false,
        }
    }

    handleBackKey = () => {
        console.log("Back handler on base", this.props.onBackHandler)
        this.props.onBackHandler()
        return true
    }
    componentDidMount() {
        if (this.props.onBackHandler != null) {
            console.log("Add Back handler", this.props.currentScreen)
            BackHandler.addEventListener('hardwareBackPress', this.handleBackKey);
        }
    }


    componentWillUnmount() {
        if (this.props.onBackHandler) {
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackKey);
        }
    }

    renderLoading() {
        if (this.state.animationLoading) {
            return (
                <Loading
                    showModal={this.state.animationLoading}
                />
            )
        }
    }

    renderHeader() {
        if (this.props.showHeader) {
            return (
                <Header titleHeader={this.props.titleHeader}
                    showBack={this.props.showHeaderBack}
                    actionBack={this.props.actionHeaderBack}
                    showNext={this.props.showHeaderNext}
                    actionNext={this.props.actionHeaderNext}
                    iconBack={this.props.iconBack}
                />
            )
        }
    }

    hideErrorAlert = () => {
        this.setState({
            showErrorAlert: false,
            msgErrorAlert: ''
        })
    }

    renderErrorAlert() {
        if (this.state.showErrorAlert && this.state.msgErrorAlert !== '') {
            return (
                <ErrorAlert
                    showModal={this.state.showErrorAlert}
                    msg={this.state.msgErrorAlert}
                    hideModal={this.hideErrorAlert}
                />
            )
        }
    }

    hideUpdateAlert = () => {
        this.setState({
            updateAlertShow: false,
        })
    }

    renderUpdateAlert() {
        if (this.state.updateAlertShow) {
            return (
                <UpdateAlert
                    showModal={this.state.updateAlertShow}
                    allowHide={this.state.updateAlertAllowHide}
                    hideModal={this.hideUpdateAlert}
                />
            )
        }
    }

    render() {
        if (this.props.bgLinear) {
            return (
                <LinearGradient colors={[Colors.alive_BD3F32, Colors.alive_CB356B]}
                    style={styles.masterContainer}>
                    {this.renderHeader()}
                    {this.props.children}
                    {this.renderLoading()}
                    {this.renderErrorAlert()}
                    {this.renderUpdateAlert()}
                </LinearGradient>
            )
        } else {
            return (
                <View style={{
                    flex: 1
                }}>
                    {this.renderHeader()}
                    <View style={this.props.ownStyle ? this.props.ownStyle : styles.masterContainer}>
                        {this.props.children}
                        {this.renderLoading()}
                    </View>
                    {this.renderErrorAlert()}
                    {this.renderUpdateAlert()}
                </View>

            )
        }
    }

    showErrorAlert(msg) {
        if ('' !== msg) {
            this.setState({
                showErrorAlert: true,
                msgErrorAlert: msg
            })
        }
    }

    showUpdateAlert(allowHide=true) {
        this.setState({
            updateAlertShow: true,
            updateAlertAllowHide: allowHide
        })
    }

    showErrorNavigate(msg) {
        alert(msg)
    }

    loading(animation) {
        this.setState({
            animationLoading: animation
        })
    }
}