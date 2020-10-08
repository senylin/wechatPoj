import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import Toptab from "../../components/Toptab/Toptab";
import './movies.scss'
import { getCities } from '../../requests/movies'
export default class Movies extends Component {
  constructor(props) {
    super(props);
  }
  private getCities() {
    getCities({}).then((res: any)=>{
      if (res) {
        let data = res.data.data.data
        Taro.setStorageSync("cities", data)
      }
    })
  }
  componentWillMount () { }

  componentDidMount () {
    this.getCities();
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='movies'>
       <Text>Hello testqqq!!!</Text>
        {/* <Toptab /> */}
      </View>
    )
  }
}
