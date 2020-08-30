import React, { Component } from 'react'
import HeadTop from '../../components/HeadTop/HeadTop'
import MainHeader from '../../components/MainHearder/MainHeader'
import TopSearch from '../../components/TopSearch/TopSearch'
import Slider from '../../components/Slider/Slider'
export default class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <HeadTop />
                <MainHeader />
                <TopSearch/>
                <Slider/>
            </React.Fragment>
        )
    }
}
