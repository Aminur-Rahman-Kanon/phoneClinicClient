import React, { Component } from "react";
import k1 from '../../../../Assets/Images/shop/keyboard/k1.jpg';
import k2 from '../../../../Assets/Images/shop/keyboard/k2.jpg';
import k3 from '../../../../Assets/Images/shop/keyboard/k3.jpg';
import k4 from '../../../../Assets/Images/shop/keyboard/k4.jpg';
import k5 from '../../../../Assets/Images/shop/keyboard/k5.jpg';
import k6 from '../../../../Assets/Images/shop/keyboard/k6.jpg';
import k7 from '../../../../Assets/Images/shop/keyboard/k7.jpg';
import k8 from '../../../../Assets/Images/shop/keyboard/k8.jpg';
import hd1 from '../../../../Assets/Images/shop/hd/hd1.png';
import hd2 from '../../../../Assets/Images/shop/hd/hd2.png';
import hd3 from '../../../../Assets/Images/shop/hd/hd3.png';
import hd4 from '../../../../Assets/Images/shop/hd/hd4.png';
import hd5 from '../../../../Assets/Images/shop/hd/hd5.png';
import hd6 from '../../../../Assets/Images/shop/hd/hd6.png';
import hd7 from '../../../../Assets/Images/shop/hd/hd7.png';
import hd8 from '../../../../Assets/Images/shop/hd/hd8.png';
import s1 from '../../../../Assets/Images/shop/monitor/s1.jpg';
import s2 from '../../../../Assets/Images/shop/monitor/s2.jpg';
import s3 from '../../../../Assets/Images/shop/monitor/s3.jpg';
import s4 from '../../../../Assets/Images/shop/monitor/s4.jpg';
import s5 from '../../../../Assets/Images/shop/monitor/s5.jpg';
import s6 from '../../../../Assets/Images/shop/monitor/s6.jpg';
import s7 from '../../../../Assets/Images/shop/monitor/s7.jpg';
import s8 from '../../../../Assets/Images/shop/monitor/s8.jpg';
import m1 from '../../../../Assets/Images/shop/mouse/mouse1.png';
import m2 from '../../../../Assets/Images/shop/mouse/mouse2.png';
import m3 from '../../../../Assets/Images/shop/mouse/mouse3.png';
import m4 from '../../../../Assets/Images/shop/mouse/mouse4.png';
import m5 from '../../../../Assets/Images/shop/mouse/mouse5.png';
import m6 from '../../../../Assets/Images/shop/mouse/mouse6.png';
import m7 from '../../../../Assets/Images/shop/mouse/mouse7.png';
import m8 from '../../../../Assets/Images/shop/mouse/mouse8.png';
import r1 from '../../../../Assets/Images/shop/ram/r1.jpg';
import r2 from '../../../../Assets/Images/shop/ram/r2.jpg';
import r3 from '../../../../Assets/Images/shop/ram/r3.jpg';
import r4 from '../../../../Assets/Images/shop/ram/r4.jpg';
import r5 from '../../../../Assets/Images/shop/ram/r5.jpg';
import r6 from '../../../../Assets/Images/shop/ram/r6.jpg';
import r7 from '../../../../Assets/Images/shop/ram/r7.jpg';
import r8 from '../../../../Assets/Images/shop/ram/r8.jpg';
import sp1 from '../../../../Assets/Images/shop/speaker/sp1.jpg';
import sp2 from '../../../../Assets/Images/shop/speaker/sp2.jpg';
import sp3 from '../../../../Assets/Images/shop/speaker/sp3.jpg';
import sp4 from '../../../../Assets/Images/shop/speaker/sp4.jpg';
import sp5 from '../../../../Assets/Images/shop/speaker/sp5.jpg';
import sp6 from '../../../../Assets/Images/shop/speaker/sp6.jpg';
import sp7 from '../../../../Assets/Images/shop/speaker/sp7.jpg';
import sp8 from '../../../../Assets/Images/shop/speaker/sp8.jpg';
import bag from '../../../../Assets/Images/Accessories/pcAccesories/bag.png';
import ethernet from '../../../../Assets/Images/Accessories/pcAccesories/ethernet.png';
import flash from '../../../../Assets/Images/Accessories/pcAccesories/flash.png';
import hdd from '../../../../Assets/Images/Accessories/pcAccesories/hdd.png';
import hdmi from '../../../../Assets/Images/Accessories/pcAccesories/hdmi.png';
import router from '../../../../Assets/Images/Accessories/pcAccesories/modem.png';
import powerCord from '../../../../Assets/Images/Accessories/pcAccesories/powerCord.png';
import ssd from '../../../../Assets/Images/Accessories/pcAccesories/ssd.png';
import ItemListings from "../../ItemListings/ItemListings";
//All Phone models Images
import asus1 from '../../../../Assets/Images/shop/mobile/asus1.jpeg';
import asus2 from '../../../../Assets/Images/shop/mobile/asus2.jpg';
import asus3 from '../../../../Assets/Images/shop/mobile/asus3.jpg';
import asus4 from '../../../../Assets/Images/shop/mobile/asus4.jpg';
import htc1 from '../../../../Assets/Images/shop/mobile/htc1.jpg';
import htc2 from '../../../../Assets/Images/shop/mobile/htc2.jpg';
import htc3 from '../../../../Assets/Images/shop/mobile/htc3.jpg';
import htc4 from '../../../../Assets/Images/shop/mobile/htc4.jpg';
import iphone1 from '../../../../Assets/Images/shop/mobile/iphone1.jpg';
import iphone2 from '../../../../Assets/Images/shop/mobile/iphone2.jpg';
import iphone3 from '../../../../Assets/Images/shop/mobile/iphone3.jpg';
import iphone4 from '../../../../Assets/Images/shop/mobile/iphone4.jpg';
import nokia1 from '../../../../Assets/Images/shop/mobile/nokia1.jpg';
import nokia2 from '../../../../Assets/Images/shop/mobile/nokia2.jpg';
import nokia3 from '../../../../Assets/Images/shop/mobile/nokia3.jpg';
import nokia4 from '../../../../Assets/Images/shop/mobile/nokia4.jpg';
import samsung1 from '../../../../Assets/Images/shop/mobile/samsung1.jpg';
import samsung2 from '../../../../Assets/Images/shop/mobile/samsung2.jpg';
import samsung3 from '../../../../Assets/Images/shop/mobile/samsung3.jpg';
import samsung4 from '../../../../Assets/Images/shop/mobile/samsung4.jpg';
//tablet images
import amazon2 from '../../../../Assets/Images/tablet/Sale/amazon/amazon2.png';
import amazon1 from '../../../../Assets/Images/tablet/Sale/amazon/amazon1.png';
import amazon3 from '../../../../Assets/Images/tablet/Sale/amazon/amazon3.png';
import amazon4 from '../../../../Assets/Images/tablet/Sale/amazon/amazon4.png';
import asusTab1 from '../../../../Assets/Images/tablet/Sale/asus/asus1.png';
import asusTab2 from '../../../../Assets/Images/tablet/Sale/asus/asus2.png';
import asusTab3 from '../../../../Assets/Images/tablet/Sale/asus/asus3.png';
import asusTab4 from '../../../../Assets/Images/tablet/Sale/asus/asus4.png';
import google1 from '../../../../Assets/Images/tablet/Sale/google/google1.png';
import google2 from '../../../../Assets/Images/tablet/Sale/google/google2.png';
import google3 from '../../../../Assets/Images/tablet/Sale/google/google3.png';
import google4 from '../../../../Assets/Images/tablet/Sale/google/google4.png';
import huawei1 from '../../../../Assets/Images/tablet/Sale/huawei/huawei1.png';
import huawei2 from '../../../../Assets/Images/tablet/Sale/huawei/huawei2.png';
import huawei3 from '../../../../Assets/Images/tablet/Sale/huawei/huawei3.png';
import huawei4 from '../../../../Assets/Images/tablet/Sale/huawei/huawei4.png';
import ipad1 from '../../../../Assets/Images/tablet/Sale/ipad/ipad1.png';
import ipad2 from '../../../../Assets/Images/tablet/Sale/ipad/ipad2.png';
import ipad3 from '../../../../Assets/Images/tablet/Sale/ipad/ipad3.png';
import ipad4 from '../../../../Assets/Images/tablet/Sale/ipad/ipad4.png';
import lenovo1 from '../../../../Assets/Images/tablet/Sale/lenovo/lenovo1.png';
import lenovo2 from '../../../../Assets/Images/tablet/Sale/lenovo/lenovo3.png';
import lenovo3 from '../../../../Assets/Images/tablet/Sale/lenovo/lenovo4.png';
import lenovo4 from '../../../../Assets/Images/tablet/Sale/lenovo/lenovo4.png';
import micro1 from '../../../../Assets/Images/tablet/Sale/microsoft/micro1.png';
import micro2 from '../../../../Assets/Images/tablet/Sale/microsoft/micro2.png';
import micro3 from '../../../../Assets/Images/tablet/Sale/microsoft/micro3.png';
import micro4 from '../../../../Assets/Images/tablet/Sale/microsoft/micro4.png';
import samsungTab1 from '../../../../Assets/Images/tablet/Sale/samsung/samsung1.png';
import samsungTab2 from '../../../../Assets/Images/tablet/Sale/samsung/samsung2.png';
import samsungTab3 from '../../../../Assets/Images/tablet/Sale/samsung/samsung3.png';
import samsungTab4 from '../../../../Assets/Images/tablet/Sale/samsung/samsung4.png';


class ItemDetails extends Component {

    state = {

        laptop: {
            keyboard: {
                k1: {img: k1, details: 'Gaming Keyboard RGB USB Wired Rainbow Keyboard'},
                k2: {img: k2, details: 'Amazon Basics Matte Black Wired Keyboard, UK QWERTY Layout'},
                k3: {img: k3, details: 'Bactlit Gaming Keyboard,Rii RK100 Plus 7 Color Rainbow LED Backlit Mechanical Keyboard'},
                k4: {img: k4, details: 'Microsoft Wireless Desktop 900 Keyboard and Mouse - Black'},
                k5: {img: k5, details: 'Microsoft Wireless Desktop 850 Keyboard'},
                k6: {img: k6, details: 'Microsoft Wireless Desktop 900 Keyboard and Mouse - Black'},
                k7: {img: k7, details: 'Amazon Basics Matte Black Wired Keyboard, UK QWERTY Layout'},
                k8: {img: k8, details: 'Microsoft Wireless Desktop 850 Keyboard'},
            },
    
            hdd: {
                hd1: {img: hd1, details: 'Microsoft Wireless Desktop 850 Keyboard'},            
                hd2: {img: hd2, details: 'Microsoft Wireless Desktop 850 Keyboard'},
                hd3: {img: hd3, details: 'Microsoft Wireless Desktop 850 Keyboard'},
                hd4: {img: hd4, details: 'Microsoft Wireless Desktop 850 Keyboard'},
                hd5: {img: hd5, details: 'Lorem Ipsum is simply dummy text of the printing and typesetting'},
                hd6: {img: hd6, details: 'industry. Lorem Ipsum has been the industrys standard dummy'},
                hd7: {img: hd7, details: 'text ever since the 1500s, when an unknown printer took a galley'},
                hd8: {img: hd8, details: 'text ever since the 1500s, when an unknown printer took a galley'}
            },
    
            monitor: {
                s1: {img: s1, details: 'of type and scrambled it to make a type specimen book. It has'},
                s2: {img: s2, details: 'of type and scrambled it to make a type specimen book. It has'},
                s3: {img: s3, details: 'of type and scrambled it to make a type specimen book. It has'},
                s4: {img: s4, details: 'of type and scrambled it to make a type specimen book. It has'},
                s5: {img: s5, details: 'of type and scrambled it to make a type specimen book. It has'},
                s6: {img: s6, details: 'of type and scrambled it to make a type specimen book. It has'},
                s7: {img: s7, details: 'of type and scrambled it to make a type specimen book. It has'},
                s8: {img: s8, details: 'of type and scrambled it to make a type specimen book. It has'}
            },
            mouse: {
                m1: {img: m1, details: 'survived not only five centuries, but also the leap into electronic'},
                m2: {img: m2,details: 'survived not only five centuries, but also the leap into electronic'},
                m3: {img: m3,details: 'survived not only five centuries, but also the leap into electronic'},
                m4: {img: m4,details: 'survived not only five centuries, but also the leap into electronic'},
                m5: {img: m5,details: 'survived not only five centuries, but also the leap into electronic'},
                m6: {img: m6,details: 'survived not only five centuries, but also the leap into electronic'},
                m7: {img: m7,details: 'survived not only five centuries, but also the leap into electronic'},
                m8: {img: m8, details: 'survived not only five centuries, but also the leap into electronic'}
            },
            ram: {
                r1: {img: r1,details: 'Contrary to popular belief, Lorem Ipsum is not simply random text'},
                r2: {img: r2,details: 'Contrary to popular belief, Lorem Ipsum is not simply random text'},
                r3: {img: r3,details: 'Contrary to popular belief, Lorem Ipsum is not simply random text'},
                r4: {img: r4,details: 'Contrary to popular belief, Lorem Ipsum is not simply random text'},
                r5: {img: r5,details: 'Contrary to popular belief, Lorem Ipsum is not simply random text'},
                r6: {img: r6,details: 'Contrary to popular belief, Lorem Ipsum is not simply random text'},
                r7: {img: r7,details: 'Contrary to popular belief, Lorem Ipsum is not simply random text'},
                r8: {img: r8,details: 'Contrary to popular belief, Lorem Ipsum is not simply random text'}
            },
            speaker: {
                sp1: {img: sp1,details: 'It has roots in a piece of classical Latin literature from 45 BC'},
                sp2: {img: sp2,details: 'It has roots in a piece of classical Latin literature from 45 BC'},
                sp3: {img: sp3,details: 'It has roots in a piece of classical Latin literature from 45 BC'},
                sp4: {img: sp4,details: 'It has roots in a piece of classical Latin literature from 45 BC'},
                sp5: {img: sp5,details: 'It has roots in a piece of classical Latin literature from 45 BC'},
                sp6: {img: sp6,details: 'It has roots in a piece of classical Latin literature from 45 BC'},
                sp7: {img: sp7,details: 'It has roots in a piece of classical Latin literature from 45 BC'},
                sp8: {img: sp8,details: 'It has roots in a piece of classical Latin literature from 45 BC'}
            },
            utilities: {
                bag: {name: 'bag', img: bag, details: 'Laptop Bag'},
                ethernet: {name: 'ethernet', img: ethernet, details: 'Ethernet Cable'},
                flash: {name: 'flash', img: flash, details: 'Flash Drive'},
                hdd: {name: 'hdd', img: hdd, details: 'Hard drive'},
                hdmi: {name: 'hdmi', img: hdmi, details: 'Hdmi Cable'},
                ssd: {name: 'ssd', img: ssd, details: 'Solid State Drive'},
                router: {name: 'router', img: router, details: 'Router'},
                powerCord: {name: 'powerCord', img: powerCord, details: 'Power Cable'}
            },

            desktop: {
    
            },
        },

        phone: {
            apple: {
                iphonex: {details: 'iPhone X', img: iphone1},
                iphone11: {details: 'iPhone 11', img: iphone2},
                iphone12: {details: 'iPhone 12', img: iphone3},
                iphone13: {details: 'iPhone 13', img: iphone4}
            },

            samsung: {
                S20: {details: 'S20', img: samsung1},
                galaxyz: {details: 'Galaxt Z', img: samsung2},
                s21: {details: 'S21', img: samsung3},
                a10: {details: 'A10', img: samsung4}
            },

            htc: {
                dream: {details: 'Dream', img: htc1},
                sapphire: {details: 'Sapphire', img: htc2},
                hero: {details: 'Hero', img: htc3},
                one: {details: 'One', img: htc4}
            },

            nokia: {
                8110: {details: '8110', img: nokia1},
                8000: {details: '8000', img: nokia2},
                6310: {details: '6310', img: nokia3},
                5310: {details: '5310', img: nokia4}
            },

            sony: {

            },

            lg: {

            },

            nexus: {

            },

            blackberry: {

            },

            pixel: {

            },

            huawei: {

            },

            oneplus: {

            },

            asus: {
                rog5: {details: 'ROG5', img: asus1},
                rog3: {details: 'ROG3', img: asus2},
                rog6z: {details: 'ROG6z', img: asus3},
                rog8: {details: 'ROG8', img: asus4},
            }
        },

        tablet: {
            apple: {
                ipadpro1st: {details: 'iPad Pro 1st', img: ipad1},
                ipadpro2nd: {details: 'iPad Pro 2nd', img: ipad2},
                ipadpro3rd: {details: 'iPad Pro 3rd', img: ipad3},
                ipadpro4th: {details: 'iPad Pro 4th', img: ipad4}
            },

            samsung: {
                samsungtabs4: {details: 'Samsung Galaxy Tab S4', img: samsungTab1},
                samsungtabs6: {details: 'Samsung Galaxy Tab S6', img: samsungTab2},
                samsungtabs7: {details: 'Samsung Galaxy Tab S7', img: samsungTab3},
                samsungtabs7E: {details: 'Samsung Galaxy Tab S7 FE', img: samsungTab4}
            },

            amazon: {
                FireHD10: {details: 'Amazon Fire Hd 10', img: amazon1},
                FireHD8: {details: 'Amazon Fire Hd 8', img: amazon2},
                FireHD7: {details: 'Amazon Fire Hd 7', img: amazon3},
                FireHDplus: {details: 'Amazon Fire Hd Plus', img: amazon4}
            },

            lenovo: {
                lenovotabp12: {details: 'Lenovo Tab P12', img: lenovo1},
                yogatabp13: {details: 'Yoga Tab 13', img: lenovo2},
                yogatab11: {details: 'Yoga Tab 11', img: lenovo3},
                lenovotabp11: {details: 'Lenovo Tab P11 Plus', img: lenovo4}
            },

            huawei: {
                matebooke: {details: 'Huawei MateBook E', img: huawei1},
                matepadpro: {details: 'Huawei MatePad Pro', img: huawei2},
                matepad11: {details: 'Huawei MatePad 11', img: huawei3},
                matepadt10: {details: 'Huawei MatePad T10', img: huawei4}
            },

            microsoft: {
                surfacepro7: {details: 'Surface Pro 7', img: micro1},
                surfacepro7plus: {details: 'Surface Pro 7+', img: micro2},
                surfacepro8: {details: 'Surface Pro 8', img: micro3},
                surfaceprox: {details: 'Surface Pro X', img: micro4}
            },

            asus: {
                zenpadc: {details: 'ZenPad C 7.0', img: asusTab1},
                zenpads: {details: 'ZenPad S 8.0', img: asusTab2},
                zenpad10: {details: 'ZenPad 10', img: asusTab3},
                transformer: {details: 'Transformer Book', img: asusTab4},
            },

            google: {
                pixelslate: {details: 'Google Pixel Slate', img: google1},
                pixelc: {details: 'Google Pixel C', img: google2},
                nexus7: {details: 'Google Nexus 7', img: google3},
                nexus10: {details: 'Google Nexus 10', img: google4}
            }
        },
        

        pageNumber: 0

    }

    componentDidMount () {
        window.scrollTo(0, 0);
        console.log('itemDetails');
    }

    render () {

        const product = this.state[this.props.product][this.props.device];

        return (
            <ItemListings product={product} 
                            route={this.props.product} 
                            device={this.props.device}
                            query={this.props.query}
                            />
        )
    }

}

export default ItemDetails;
