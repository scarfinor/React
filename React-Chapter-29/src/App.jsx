function App() {
  return (
    (
      <div className="App0">
        <SchnucksInfo />
      </div>
    ),
    (
      <div className="App1">
        <FavoriteFoodItem foodItem="butter" />
      </div>
    ),
    (
      <div className="App2">
        <DierbergsInfo />
      </div>
    )
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
