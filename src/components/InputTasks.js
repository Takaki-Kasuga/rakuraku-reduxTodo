import React, { Component, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const InputTasks = (props) => {
  const { todoText, onChange, onClick, disabled } = props
  return (
    <div>
      <TextField
        label="ToDoを入力"
        id="filled-size-small"
        variant="filled"
        size="small"
        value={todoText}
        onChange={(event) => { onChange(event) }}
        disabled={disabled}
      />
      <Button disabled={disabled} color="primary" onClick={onClick}>追加</Button>
      {disabled && <p style={{ color: 'red' }}>5個以上タスクを抱えてはいけません。</p>}
    </div>
  )
}