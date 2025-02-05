function PlayersView({name}, {team}, {number}, {ppg}, {apg}, {rpg}) {
    return (
        <div className="view">
            <div className="player-name"><h3>{name}</h3></div>
        </div>
    );
};


export default PlayersView;