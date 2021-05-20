const App = () => (
    <div>
        <Tweet username="jDan" name="Jack" date={ new Date().toLocaleString() } message="Hanging at my Distillary" />
        <Tweet username="Woody" name="Woody" date={ new Date().toLocaleString() } message="Actor from Toy Story" />
        <Tweet username="Bzz" name="Buzz" date={ new Date().toLocaleString() } message="Falling with style" />
    </div>
  )

ReactDOM.render(<App />, document.getElementById("root"))


