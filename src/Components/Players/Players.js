import React, { useState } from "react";


function player({ children }) {
    return (
        <div className="players">
            {React.Children.map(children, (child, index) => {
                return child;
            })}
        </div>
    );
}


function Players() {
    const [Jokic] = useState({
        name: "Nikola Jokic",
        team: "Denver Nuggets",
        number: 15,
        ppg: 29.5,
        apg: 10.3,
        rpg: 12.9
    });

    const [Giannis] = useState({
        name: "Giannis Antetokounmpo",
        team: "Milwaukee Bucks",
        number: 34,
        ppg: 31.8,
        apg: 5.9,
        rpg: 12.2
    });

    const [Shai] = useState({
        name: "Shai Gilgeous-Alecander",
        team: "Oklahoma City Thunder",
        number: 2,
        ppg: 32.5,
        apg: 6,
        rpg: 5.2
    });

    const [Luka] = useState({
        name: "Luka Doncic",
        team: "Los Angeles Lakers",
        number: 77,
        ppg: 28.1,
        apg: 7.8,
        rpg: 8.3
    });

    const [Anthony] = useState({
        name: "Shai Gilgeous-Alecander",
        team: "Dallas Mavericks",
        number: 3,
        ppg: 25.7,
        apg: 3.4,
        rpg: 11.9
    });



    return (
        <div className="view">
            <player>
                
            </player>
        </div>
    )

}



export default Players;