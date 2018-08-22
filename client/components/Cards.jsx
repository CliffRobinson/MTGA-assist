import React from "react";
import { connect } from "react-redux";

import Card from "./Card";
import {filterAllCards, sortFunctions, mapManaToProps} from "./componentFunctions";

class Cards extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cardsToDisplay = filterAllCards(this.props.cards,this.props.mana, this.props.onlyTricks, this.props.filterLands, sortFunctions[this.props.sort]);
        return (
            <div className="cards" >
                <p> There are {this.props.cards.length} cards in the format </p>
                <p> Displaying {cardsToDisplay.length} cards </p>
                {this.props.cards.length && cardsToDisplay.map( (card, i) => <Card key={i} card={card} />)}
            </div >
        );
    }

}

export default connect(mapManaToProps)(Cards);