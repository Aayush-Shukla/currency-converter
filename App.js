import React , {Component} from 'react';
import { Alert,StyleSheet,Button, Text, View, StatusBar} from 'react-native';

import Inrtousd from "./components/inrtousd";
import Usdtoinr from "./components/usdtoinr";




class App extends Component{
    constructor(props) {
            super(props);
            this.state = {
                loading: true,
                data: [],
                text: '',
                inr: '75.53',
                usd: '0.013',
                reverse: false,
                result: null
            };
        this.result = this.result.bind(this)
    }

  componentDidMount(){
    fetch("https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=e00b80ab9ecdec341af0")
        .then(response => response.json())
        .then((responseJson)=> {
          this.setState({
            loading: false,
            inr: responseJson.USD_INR,
              usd:1/responseJson.USD_INR
          })
        })

  }
  result(text){
        if(isNaN(text)){this.setState({result:'INVALID INPUT ! '})}
        else {
            if (this.state.reverse) {
                this.setState({result: (this.state.inr * text).toFixed(2) + ' INR'})
            } else {
                this.setState({result: (this.state.usd * text).toFixed(2) + ' USD'})
            }
        }
  }
  render() {


  return (




        <View style={styles.container}>





            <StatusBar
                backgroundColor = "#850099"
                barStyle = "light-content"
                hidden = {false}
                translucent = {true}

            />



            {this.state.reverse?(<Text style={styles.head}>USD to INR</Text>):(<Text style={styles.head}>INR to USD</Text>)}



            {this.state.reverse?(<Usdtoinr result={this.result}/>):(<Inrtousd result={this.result}/>)
            }




            <Text style={styles.res}>{this.state.result}</Text>

            <Button
                title={this.state.reverse?("INR to USD"):("USD to INR")
                }
                onPress={() => this.setState({reverse:!this.state.reverse,result:null})
                }
            />














    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {

    marginTop:-60,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
    res:{

      paddingBottom:100,
      fontSize:30,
        alignItems: 'center',
        justifyContent: 'center',

    },
    head:{
      fontSize:45
    }

});
export default App
