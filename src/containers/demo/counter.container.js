import React, { Component } from 'react';
import Button from 'react-native-button';
import { Text, View, } from 'react-native';
import { connect } from 'react-redux'
import CounterAction, { CountTypes } from '../../redux/count.redux'

class CounterContainer extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: 30 }}>
                <Text style={{ margin: 20, fontWeight: 'bold', color: 'forestgreen', fontSize: 20 }}>
                    Redux Sagas
                </Text>
                <View style={{ height: 50, margin: 10, flexDirection: 'row' }}>
                    <Button
                        containerStyle={{ padding: 10, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                        style={{ fontSize: 18, color: 'white' }}
                        onPress={() => {
                            this.props.decrease()
                        }}>
                        Decrement -
                    </Button>
                    <Button
                        containerStyle={{ padding: 10, height: 45, borderRadius: 10, backgroundColor: 'darkviolet',  marginLeft: 30 }}
                        style={{ fontSize: 18, color: 'white'}}
                        onPress={() => {
                            this.props.increase()
                        }}>
                        Increment +
                    </Button>
                </View>
                <Text style={{ margin: 10, fontWeight: 'bold', color: 'darkblue', fontSize: 17}}>
                    Counts: {this.props.value}
                </Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.countRedux.value,
    }
};

const mapDispatchToProps = dispatch => ({
    increase: () => dispatch(CounterAction.increase()),
    decrease: () => dispatch(CounterAction.decrease()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)