const App = () => (
    <div>
        <Person name="Noah" age={2} hobbies={["reading", "running", "coding"]} />
        <Person name="Alexander" age={21} hobbies={["camping", "running", "coding"]} />
        <Person name="Diego Gael" age={2} hobbies={["singing", "dancing", "coding"]} />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))
