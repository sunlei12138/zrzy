import React, { Component } from 'react'
import Foot from '../../component/Foot';
import Head from '../../component/head';

export class Classify extends Component {
    render() {
        return (
            <>
                <div className="head">
                    <Head></Head>
                </div>
                <div className="mid">

                </div>
                <div className="con">
                    <Foot></Foot>
                </div>
            </>
        )
    }
}

export default Classify
