import styled from "styled-components"

export const TableStyle = styled.div`
    width: 700px;
    margin: auto;
    font-weight: 600;
    letter-spacing: 3px;

    ul.table-head{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        background-color: #333;
        color: #fff;
        border-radius: 3px;
        list-style: none;
        padding: 20px 20px;
    }

    ul.table-row{
        margin-bottom: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & li{
            width: 100%;
           margin-right: 40px;
           margin-bottom: 30px;
           padding: 10px 20px;
            list-style-type: none;
            background-color: #fff;
            box-shadow: 0 0 5px 1px rgba(0,0,0,0.2);
        &:hover{
            cursor: pointer;
            box-shadow: none;
            transition: all 0.3s ease;
        }
        &:nth-child(even){
            background-color: rgba(33, 177, 2, 0.3);
        }
        &:nth-child(odd){
            background-color: rgba(35, 190, 224, 0.3);
        }
        &.completed{
            background-color: #e6e5e5;
            text-decoration: line-through;
        }}
    }
    input {
        cursor: pointer;
    }

    .text {
        border :none;
        padding: 8px;
        width: 43%;
        border-bottom: 1px solid lightgrey;
        font-size: 17px;
        letter-spacing: 1px;
        
        &:focus{
            outline: none;
            border-radius: 5px;
            letter-spacing: 1px;
            font-size: 17px;
        }
    }

    .date {
        width: 20%;
        border: none;
        letter-spacing: 1px;
        font-size: 15px;
    }

    .add {
        width: 70px;
        font-size: 15px;
        cursor: pointer;
        background-color:rgba(33, 177, 2, 0.3);
        border: none;
    
    &:hover {
        box-shadow: 0 0 5px 1px rgba(0,0,0,0.3);
        transition: box-shadow 0.2s ease;
    }
    }
`
    export const NewTaskStyle = styled.li `
    display: flex;
    justify-content:space-between;

    .delete{
    font-size: 23px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: "#333";
    margin-top: 20px;

    &:hover {
        color: red;
        transition: color 0.3s ease;
    }
    }
    `