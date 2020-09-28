import React, { Component } from 'react';
import {choice} from './helpers';
import Coin from './Coin';

class CoinFlipper extends Component {
    static defaultProps = {
        coin: [
            {face: 'heads', imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
            {face: 'tails', imgSrc: "https://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=d88d46b8ba41605e1c28b9813639e119afea129c-1601304186-0-AbL0W3uz6hj-vWWwa4kBZONoeFPxEgpHDNl8G-m0cyVLANQrHXiAa6fxQcE0K5f5wvneqYUX82V1tmYCTTjwkjLRzNokkYsurzlSEVi4WMNSYy_tsXbdVvW6rnyishwPI3aWie23EI3i2cU9GQpZKhobM_qFHpUoPTeeVB_Jd--mx82w74vfLFTxg7lpdpdgMPRAgP73bq8w7fkw9QeN6s2fasZldHaTISo0pmW9AIh9bR1PPlaPAKDtLSmoKovkxLLko1snpYhax5kFPAexQYQ_aHlso1yFJukTLmkE-EYh3oBjVix2NkP37uBEuJwSSg"}
        ]
    };
    constructor(props){
        super(props);
        this.state = {
            flips: 0,
            heads: 0,
            tails: 0,
            currCoin: null
        };
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin(){
        const newCoin = choice(this.props.coin);
        this.setState(st => {
           return {
            currCoin: newCoin,
            flips: st.flips + 1,
            heads: st.heads + (newCoin.face === 'heads' ? 1 : 0),
            tails: st.tails + (newCoin.face === 'tails' ? 1 : 0)
           };
        });
    }
    handleClick(){
        this.flipCoin();
    }
    render(){
        return(
            <div className="CoinFlipper">
                <h2>Flip a coin bro</h2>
                {this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <button onClick={this.handleClick}>flip me senpai</button>
                <p>Out of {this.state.flips} flips, {this.state.heads} heads and {this.state.tails} tails</p>
            </div>
        )
    }
}

export default CoinFlipper;
