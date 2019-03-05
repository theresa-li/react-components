// TODO
var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceries={['Cucumbers', 'Kale']}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
    <li>{props.groceries[0]}</li>
    <li>{props.groceries[1]}</li>
  </ul>
);

ReactDOM.render(<App />, document.getElementById("app"));