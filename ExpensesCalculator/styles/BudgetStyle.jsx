import styled from 'styled-components'

export const BudgetStyle = styled.div`
display: flex;
input{
    outline: none;
    border: none;
    width: 100%;
    background: inherit;
    color: inherit;
    text-align: right;
    border-bottom: 1px solid #9999;
    padding: 0.1rem 0.5rem;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: 700;
    &::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &:focus {
        background-color: #fff;
        color: #333;
    }
}
`

export const Icon = styled.button `
    background-color: #333;
    color: #fff;
    margin:2px 5px;
    &:first-child:hover {
        background-color: #ffc007  
    }
    &:last-child:hover {
        background-color: red  
    }
`