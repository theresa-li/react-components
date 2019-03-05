// TODO
var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceries={['Cucumbers', 'Kale']}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.groceries.map(grocery =>
      <GroceryListItem groceries={grocery} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onItemMouseOver() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'none'
    }
    return (
      <li style={style} onMouseOver={this.onItemMouseOver.bind(this)}>{this.props.groceries}</li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));