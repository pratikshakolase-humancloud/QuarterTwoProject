function Card({ children }) {
  const handleClick = () => {
    alert("Button Clicked!");
  };
  const eventType = (message, event) => {
    alert(`${message} - ${event.type}`);
  };

  return (
    <div className="card">
      <h2>Card Component</h2>

      <div>{children}</div>

      <button onClick={handleClick}>Click Me</button>
       <br /><button onClick={(e) => eventType("Event triggered", e)}>
        Click to know type
      </button>
    </div>
  );
}

export default Card;