// import logo from '../logo.svg';
import React from 'react';
// import '../App.css'
// Storeと接続する
import { connect } from 'react-redux'
import { addTask } from '../actions'

const App = (props) => {
  console.log('Appクラスが発火、thisが次にきます。  ')

  console.log(props)
  return (
    <React.Fragment>
      <div>

      </div>
      {props.inCompleteTasks.map((inCompleteTask, index) => {
        return (
          <p key={index}>{inCompleteTask}</p>
        )
      })}
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  inCompleteTasks: state.inComplete.inCompleteTasks
})

console.log('mapStateToPropsが発火します。')
console.log(mapStateToProps)

const mapDispatchToProps = dispatch => ({
  // アクションオブジェクトをdispatchする
  addTask: () => dispatch(addTask()),
  // countMinus: () => dispatch(countMinus()),
})
console.log('mapDispatchToPropsが発火します。')
console.log(mapDispatchToProps)

export default connect(mapStateToProps, mapDispatchToProps)(App)
