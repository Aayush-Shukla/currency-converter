import React , {Component} from 'react';
import { StyleSheet, Text, View, TextInput ,Dimensions} from 'react-native';




class Usdtoinr extends Component {

    render() {
        return (
            <View style={styles.usd}>



                <View style={{flexDirection:"row" }}>
                    <View>
                    <TextInput
                        style={styles.box}
                        autoCorrect={false}

                        underlineColorAndroid="green"
                        placeholder="Enter USD"
                        textAlign="center"
                        ref={input => { this.textInput = input }}
                        onChangeText={(text) => this.props.result(text) }
                        keyboardType={'numeric'}
                    />
                    </View>
                    <View >
                        <Text style={styles.currency}>USD</Text>
                    </View>
                </View>





            </View>
        );
    }

}

const styles = StyleSheet.create({
    usd:{

            paddingTop:1*Dimensions.get('window').height/9,
        height:Dimensions.get('window').height/3,
    },
    box:{
        fontSize: 30,

        paddingBottom:10,
        width: 8*Dimensions.get('window').width/9
    },
    currency:
        {
            fontSize: 30,
            color:'#777'
        }
});
export default Usdtoinr