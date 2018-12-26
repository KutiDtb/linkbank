import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
})

const DELTA_LAT = 0.01
const DELTA_LONG = 0.01

class HelperMapContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            initPosition: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            },
            markerPosition: {
                latitude: 0,
                longitude: 0,
            }
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(posistion => {
            var lat = parseFloat(posistion.coords.latitude)
            var long = parseFloat(posistion.coords.longitude)

            console.log('lat', lat)
            console.log('long', long)
            var initPosition = {
                latitude: lat,
                longitude: long,
            }

            this.setState({
                initPosition,
                markerPosition: initPosition,
            })
        })
    }

    actionBack = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <BaseContainer
                currentScreen={'HelperMap'}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={'Tư vấn viên gần bạn'}
                showHeaderBack={true}
                actionHeaderBack={this.actionBack}
            // ownStyle={styles.container}
            >
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: 10.763240,
                        longitude: 106.682182,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    {/* <Marker
                        coordinate={this.state.markerPosition}
                        title={'title'}
                        description={'description'} /> */}

                </MapView >
            </BaseContainer >
        )
    }

}
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(HelperMapContainer)