import React, { Component, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const CompleteTasks = (props) => {
  const { completeTodos, onClickToIncomplete } = props
  return (
    <div>
      <p>完了したタスク</p>
      <ul>
        {completeTodos.map((task, index) => {
          return (
            <div key={index}>
              <li>{task}</li>
              <Button variant="contained" color="primary" onClick={() => { onClickToIncomplete(index) }}>戻す</Button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}