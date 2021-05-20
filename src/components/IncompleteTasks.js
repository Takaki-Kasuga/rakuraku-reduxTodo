import React, { Component, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const IncompleteTasks = (props) => {
  const { inCompleteTodos, onClickComplete, onClickDelete } = props
  return (
    <div>
      <p>未完了のタスク</p>
      <ul>
        {inCompleteTodos.map((task, index) => {
          return (
            <div key={index}>
              <li>{task}</li>
              <Button variant="contained" onClick={() => { onClickComplete(index) }}>完了</Button>
              <Button variant="contained" color="secondary" onClick={() => { onClickDelete(index) }}>削除</Button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}