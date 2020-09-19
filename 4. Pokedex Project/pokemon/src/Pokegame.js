import React, { Component } from 'react'
import Pokedex from './Pokedex';

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            { id: 491, name: 'Darkrai', type: 'dark', base_experience: 541},
            { id: 493, name: 'Arceus', type: 'normal', base_experience: 555},
            { id: 487, name: 'Giratina', type: 'dragon/ghost', base_experience: 504},
            { id: 483, name: 'Dialga', type: 'steel/dragon', base_experience: 529},
            { id: 484, name: 'Palkia', type: 'water/dragon', base_experience: 529},
            { id: 485, name: 'Heatran', type: 'steel/fire', base_experience: 487},
            { id: 480, name: 'Uxie', type: 'psychic', base_experience: 430},
            { id: 129, name: 'Magikarp', type: 'water', base_experience: 999}

        ]
    }
    render() {
        let hand1 = [];
        let hand2 = [...this.props.pokemon];
        while(hand1.length < hand2.length){
            let randIdx = Math.floor(Math.random()*hand2.length);
            let randPokemon = hand2.splice(randIdx,1)[0];
            hand1.push(randPokemon);
        }
        let exp1 = hand1.reduce((exp, pokemon)=> exp + pokemon.base_experience,0);
        let exp2 = hand2.reduce((exp, pokemon)=> exp + pokemon.base_experience,0);
        return(
            <div>
                <Pokedex pokemon={hand1} exp={exp1} isWinnder={exp1>exp2}/>
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2>exp1}/>
            </div>
        );
    }
}

export default Pokegame;