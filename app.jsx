function App() {
  return (
    <div className="page">
      <div className="interactions">
        <form className="form-inline">
          <input type="text" defaultValue="redux" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="table">
        <div className="table-header">
          <span style={{ width: "40%" }}>
            <button type="button" className="button-inline button-active">
              Title
            </button>
          </span>
          <span style={{ width: "30%" }}>
            <button type="button" className="button-inline">
              Author
            </button>
          </span>
          <span style={{ width: "10%" }}>
            <button type="button" className="button-inline">
              Comments
            </button>
          </span>
          <span style={{ width: "10%" }}>
            <button className="button-inline" type="button">
              Points
            </button>
          </span>
        </div>
        <div className="table-row">
          <span style={{ width: "40%" }}>prueba</span>
          <span style={{ width: "30%" }}>prueba</span>
          <span style={{ width: "10%" }}>prueba</span>
          <span style={{ width: "10%" }}>prueba</span>
          <span style={{ width: "10%" }}>prueba</span>
          <button className="button-inline" type="button">
            Dismiss{" "}
          </button>
        </div>
        <div>
          <div>
            <button className type="button">
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("container"));
