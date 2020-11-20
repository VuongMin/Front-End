import React, { Component } from 'react'
import HeadTop from '../../components/HeadTop/HeadTop'
import MainHeader from '../../components/MainHearder/MainHeader'
import TopSearch from '../../components/TopSearch/TopSearch'
import Slider from '../../components/Slider/Slider'
import Products from '../../components/Products/Products'
import Cartergory from '../../components/Cartergory/Cartergory'
import Blogs from '../../components/Blogs/Blogs'
import Istargrams from '../../components/Istargrams/Istargram'
import Footer from '../../components/Footer/Footer'
import FooterCopyright from '../../components/FooterCopyRight/FooterCopyRight'
export default class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <HeadTop />
                <MainHeader />
                <TopSearch/>
                <Slider/>
                <Cartergory/>
                <Products/>
                <Blogs/>
                <Istargrams/>
                <Footer/>
                <FooterCopyright/>
            </React.Fragment>
        )
    }
}
