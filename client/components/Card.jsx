import React from "react";
import { Tooltip } from "react-tippy";

const Card = (props) => {
    let cardSize = "small";
    let hoverCardSize = "normal";
    // if (props.card.card_faces) {
    //     const img = props.card.card_faces[0].image_uris;
    //     if (img) {
    //         return <div><img src={img[cardSize]}></img>displays ok</div>;
    //     } else {
    //         console.log(props.card.name);
    //         console.log(props.card);
    //         return null;
    //     }

    // } else { 
    //     return (
    //         <Tooltip
    //             trigger='mouseenter'
    //             html={<img src = {props.card.image_uris[hoverCardSize]}></img>}
    //         >
    //             <img src={props.card.image_uris[cardSize]}></img>
    //         </Tooltip>
    // //     );
    // }

    switch (props.card.layout) {
    case "normal":
    case "saga":
    case "split":
        return (<Tooltip
            trigger='mouseenter'
            html={<img src={props.card.image_uris[hoverCardSize]}></img>}
        >
            <img src={props.card.image_uris[cardSize]}></img>
        </Tooltip>
        );

    case "transform":
        return props.card.card_faces.map((face) => {
            return (
                <Tooltip
                    trigger='mousenter'
                    html = {<img src={face.image_uris[hoverCardSize]}></img>}
                >
                    <img src={face.image_uris[cardSize]}></img>
                </Tooltip>
            );            
        });
    default:
        return (
            <div style={{maxWidth:"146 px", border:"1px solid black"}}>
                The card {props.card.name} has a weird format and we can't display it. 
            </div>
        );
        
    }
};

export default Card;