import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { scale, verticalScale } from '../../theme/scaling';
import { AppStyle, Colors, Images } from '../../theme';
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
    {
        title: 'First',
        content: [{key: 'KEY1', value: 'Expand cell 1'}, {key: 'KEY2', value: 'Expand cell 2'}]
    }
];

export default class CellExpand extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            activeSections: []
        };
    }

    _renderHeader = section => {
        return (
            <View style={{
                backgroundColor: Colors.white,
                marginLeft: scale(3),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Text style={AppStyle.LeftBlackNormal}>{section.title}</Text>
                <Image source={Images.wallet.grey} />
            </View>
        );
    };

    _renderContent = section => {
        var template = []
        for (var i = 0; i < section.content.length; i++) {
            // console.log('section.content[i]', JSON.stringify(section.content[i]))
            var key = section.content[i].value
            template.push(
                <TouchableOpacity key={section.title + '-' + i} 
                    onPress={() => this.props.actionClickElement(key)}
                >
                    <Text
                        style={i === 0 ? AppStyle.LeftBlackNormal : [AppStyle.LeftBlackNormal, { marginTop: scale(10) }]}
                    >
                        {section.content[i].value}</Text>
                </TouchableOpacity>
            )
        }
        return (
            <View style={{
                paddingLeft: scale(20),
                backgroundColor: '#fff',
                flexDirection: 'column',
            }}>
                {template}
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };

    render() {
        return (
            <Accordion
                sections={this.props.data}
                activeSections={this.state.activeSections}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                onChange={this._updateSections}
            />
        );
    }

}