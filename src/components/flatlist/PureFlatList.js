import React, { PureComponent } from 'react';
import { FlatList, View } from 'react-native';
import { Colors } from '../../theme'
import { PropTypes } from 'prop-types';
import { scale } from '../../theme/scaling';

export default class PureFlatList extends PureComponent {

    separatorComponent() {
        if (undefined === this.props.viewSeparate) {
            return (
                <View style={[{
                    backgroundColor: Colors.whiteTwo
                }, this.props.horizontal === true ? {width: scale(5)} : {height: scale(5)}]}/>
            )
        } else {
            return this.props.viewSeparate
        }
    }

    renderFooter() {
        return (
            <View style={{width: scale(10), height: '100%'}}/>
        )
    }
    
    render() {
        return (
            <FlatList
                {...this.props}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                horizontal={this.props.horizontal ? this.props.horizontal : false}
                keyExtractor={(item, index) => index.toString()}
                initialNumToRender={50}
                data={this.props.data}
                renderItem={this.props.renderItem}
                ItemSeparatorComponent={this.separatorComponent.bind(this)}
                ListFooterComponent={this.renderFooter}
            />
        )
    }
}
PureFlatList.propTypes = {
    isShowSeperator: PropTypes.bool,
    horizontal: PropTypes.bool,
}

PureFlatList.defaultProps = {
    horizontal: false,
    isShowSeperator: true,
}