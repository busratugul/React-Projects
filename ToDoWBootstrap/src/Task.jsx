import React from 'react'
import {IconButton } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const Task = ({...props}) => {

    const deleteClick = () => {
        props.onClick(props.id)
    }
  return (
    <div className='px-5 py-2 col-md-4'>
        <div className='border shadow p-3' style={{minWidth:"250px"}}>
            <h3 className='text-primary'>{props.title}</h3>
            <p>{props.content}</p>
            <div className='d-flex'
            style={{justifyContent: "space-between"}}>
            <IconButton>
            <CheckCircleOutlineIcon
            size={"small"}
            color='success'
            onClick={deleteClick}/>
            </IconButton>
            <IconButton 
            size='small'
            color='error'
            onClick={deleteClick}>
                <DeleteForeverIcon/>
            </IconButton></div>

        </div>
    </div>
  )
}
