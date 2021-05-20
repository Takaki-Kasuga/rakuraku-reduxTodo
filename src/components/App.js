// import logo from '../logo.svg';
import React from 'react';
// import '../App.css'
// Storeと接続する
import { connect } from 'react-redux'
import { countPlus, countMinus } from '../actions'

// class App extends React.Component {
//   render() {
//     console.log('Appクラスが発火、thisが次にきます。  ')
//     console.log(this)
//     const props = this.props
//     console.log(props)
//     return (
//       <React.Fragment>
//         <p>Hello World!</p>
//         <p>現在の数字は{props.val}</p>
//         <button onClick={props.countPlus}>+1</button>
//         <button onClick={props.countMinus}>-1</button>
//       </React.Fragment>
//     );
//   }
// }
const App = (props) => {
  console.log('Appクラスが発火、thisが次にきます。  ')
  // console.log(this)
  // const props = this.props
  console.log(props)
  console.log(props.countPlus)
  console.log(props.countMinus)
  return (
    <React.Fragment>
      <p>Hello World!</p>
      <p>現在の数字は{props.val}</p>
      <button onClick={props.countPlus}>+1</button>
      <button onClick={props.countMinus}>-1</button>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  val: state.counter.val
})

console.log('mapStateToPropsが発火します。')
console.log(mapStateToProps)

const mapDispatchToProps = dispatch => ({
  // アクションオブジェクトをdispatchする
  countPlus: () => dispatch(countPlus()),
  countMinus: () => dispatch(countMinus()),
})
console.log('mapDispatchToPropsが発火します。')
console.log(mapDispatchToProps)

export default connect(mapStateToProps, mapDispatchToProps)(App)
