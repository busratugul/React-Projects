import styled, {keyframes} from 'styled-components'
import imageProfil from './img/userimage.jpg'

const animateContainer = keyframes`
0%{
    transform: rotate(0deg);
}
25%{
    transform: rotate(45deg);
}
50%{
    transform: rotate(90deg);
}
75%{
    transform: rotate(100deg);
}
100%{
    opacity: 0;
}
`

export const LoginContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  & .btn-link {
    margin-left: auto;
    color: #333;
    font-weight: bold;
  }
  &.animate{
    animation: ${animateContainer} 1s linear ;
    transform: rotate(180deg) translateY(1000px);
    transition: 1s linear;
  }
`

export const FormAnimation = styled.div`
  width: 250px;
  height: 250px;
  background: ${(props) => props.background || `url(${imageProfil}) center/cover`};
  margin: 10px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 75px;
  border: 10px solid ${(props)=> props.borderColor || "red"};
  border-radius: 5px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.2);
`

export const Form = styled.div`
  & input {
    border: 1px solid #fff;
    border-bottom: 1px solid lightgray;
    padding: 5px;
  }
  & button {
    width: 95%;
  }
`

