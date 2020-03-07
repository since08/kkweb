import React, {Component} from 'react';
import classname from 'classnames';
import './App.css';
import './Footer.css';
import image6 from './images/images6.png';
import iphone from './images/iphone.png';
import android from './images/android.png';
import erweima from './images/erweima.png';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';

const LinkPaths = [{index: 0, name: '关于澳门旅行', id: "div1"}, {index: 1, name: '产品亮点', id: "div2"}, {
    index: 2,
    name: '联系我们',
    id: "div3"
}];

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hide: true,
            initDone: false,
            show_index: 0
        }
    }

    toggleDropdown = () => {
        this.setState({hide: !this.state.hide})
    }
    toggleDropdown2 = () => {
        this.setState({hide: true})
    };


    render() {
        const LinksLayout = LinkPaths.map((link, index) => {
            return (
                <li key={link.name} onClick={() => {
                    this.setState({
                        show_index: index
                    })
                    this.toggleDropdown2()
                }}>
                    <a href={`#${link.id}`} style={{
                        fontSize: this.state.hide ? 24 : 14,
                        color: this.state.hide ? '#e53c26' : 'white'
                    }}>{link.name}</a>
                    {this.state.show_index === link.index ?
                        <div style={{
                            width: link.name.length * 22,
                            height: 1.5,
                            backgroundColor: this.state.hide ? '#E54A2E' : 'white',
                            marginTop: -5
                        }}/> : null}
                </li>
            )
        });




        return (
            <div className="App">
                <nav className="navbar navbar-inverse navbar-fixed-top"
                     style={{backgroundColor: 'transparent', borderColor: 'transparent'}}
                     id="header-nav" role="navigation">

                    <div className="col-md-6 col-sm-4 col-xs-12" style={{marginTop: 25}}>
                        <img src={image6} className="top_left_img img-responsive"/>
                    </div>
                    <div className="navbar-header">
                        <button type="button" onClick={() => this.toggleDropdown()}
                                className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar-collapse-1" aria-expanded="false"
                                style={{top: 0}}>
                            <span className="sr-only">切换导航</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>

                    </div>
                    <div className={classname("navbar-collapse", {collapse: this.state.hide})}
                         id="navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right"
                            style={{
                                backgroundColor: this.state.hide ? 'transparent' : '#e53c26',
                                marginRight: this.state.hide ? 20 : -20,
                                marginTop:this.state.hide ? 20 : -10,
                            }}>
                            {LinksLayout}
                        </ul>
                    </div>

                </nav>

                <div className="div_bg_img">
                    <div className="container">
                        <img className="home-phone" src={image1}/>
                    </div>


                    <div className="row load_div">
                        <a className="col-md-6  col-sm-4 col-xs-3" href={'#div3'}>
                            <img src={iphone} className="img-responsive"/>
                        </a>
                        <a className="col-md-6 col-sm-4 col-xs-3"  href={'#div3'}>
                            <img src={android} className="img-responsive"/>
                        </a>
                    </div>
                </div>

                <div id="div1" className="div_bg_img">
                    <img className="home-phone" src={image2}/>
                </div>
                <div id="div2" className="div_bg_img">
                    <img className="home-phone" src={image3}/>
                </div>
                <div id="div3" className="div_bg_img">
                    <span className="load_text">扫码立即下载澳门旅行APP</span>
                    <img src={erweima} className="img-responsive"/>
                </div>

                <footer className="footer dp-background-color">
                    <span className="contact_span">联系我们</span>
                    <div className="container cooperation">
                        <div className="row">
                            <div style={{textAlign: 'center'}}>
                                <p>版权所有：深圳德尚全彩体育文化传播有限公司</p>
                                <p>客服热线-0755-23919844</p>
                                <p>商务合作-zy@deshpro.com</p>
                                <p>地址-深圳市福田区福华三路卓越世纪中心3号楼907</p>
                            </div>
                        </div>
                    </div>

                    <div className="container copyright">
                        <div>
                            <p>深圳德尚全彩体育文化传播有限公司 京ICP备17014136号</p>
                            <p>Copyright © 2018 deshpro.com All Rights Reserved. 2018</p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }

}

export default App;
