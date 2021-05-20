// import logo from '../logo.svg';
import React, { useState } from 'react';
// import '../App.css'
// Storeと接続する
import { connect } from 'react-redux'
import { addTask, deleteTasks, completeTasks, backToTasks } from '../actions'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';


const App = (props) => {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  console.log('Appクラスが発火、thisが次にきます。  ')
  console.log(props)

  const [value, setValue] = useState('')

  const inputValue = (e) => {
    setValue(e.target.value)
  }

  const defaultValue = () => {
    setValue('')
    console.log('defaultValue発火')
  }

  return (
    <React.Fragment>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <TextField id="standard-basic" label="タスクの入力" onChange={inputValue} value={value} disabled={props.inCompleteTasksArray.length >= 5 && true} />
        <Button variant="contained" color="primary" onClick={() => { if (value) { props.addTask(value) } else { return }; defaultValue() }} disabled={props.inCompleteTasksArray.length >= 5 && true} >タスクの追加</Button>
      </div>
      <div>
        <h2>未完成のタスク</h2>
        {props.inCompleteTasksArray.length >= 5 && <h3>5個以上のタスクを抱えないでください。</h3>}
        {
          props.inCompleteTasksArray.map((inCompleteTask, index) => {
            return (
              <ul key={index} style={{ display: 'flex', alignItems: 'center' }}>
                <li >{inCompleteTask}</li>
                <Button variant="contained" onClick={() => { props.completeTasks(index) }}>完了</Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                  onClick={() => { props.deleteTasks(index) }}>削除</Button>
              </ul>
            )
          })
        }
        <h2>完成したタスク</h2>
        {
          props.completeTasksArray.map((completeTask, index) => {
            return (
              <ul key={index} style={{ display: 'flex', alignItems: 'center' }}>
                <li>{completeTask}</li>
                <Button variant="contained" color="primary" onClick={() => { props.backToTasks(index) }}>タスクを戻す</Button>
              </ul>
            )
          })
        }
      </div>
    </React.Fragment >
  );
}

const mapStateToProps = (state) => (
  {
    inCompleteTasksArray: state.inComplete.inCompleteTasksArray,
    completeTasksArray: state.inComplete.completeTasksArray,
  }
)


console.log('mapStateToPropsが発火します。')
console.log(mapStateToProps)

const mapDispatchToProps = dispatch => ({
  addTask: (value) => dispatch(addTask(value)),
  deleteTasks: (index) => dispatch(deleteTasks(index)),
  completeTasks: (index) => dispatch(completeTasks(index)),
  backToTasks: (index) => dispatch(backToTasks(index)),
})
console.log('mapDispatchToPropsが発火します。')
console.log(mapDispatchToProps)

export default connect(mapStateToProps, mapDispatchToProps)(App)
