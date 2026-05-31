function Player({ name, team }) {
  return (
    <div className="card player">
      <h2>Player Info</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Role:</strong> {team}</p>
    </div>
  );
}

export default Player;