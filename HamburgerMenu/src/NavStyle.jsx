import styled from "styled-components"

export const NavStyle = styled.nav`
    color: #eee;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    padding: 0.5rem 1rem;
    user-select: none;
    height: 3rem;
    
    a {
        color: inherit;
    }

    .navbar-items{
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;

        &.showNavbar {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            margin: 3rem;
            width: 100%;
            padding: 1rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        & .nav-link {
            margin-right: 1rem ;
            opacity: 0.8;
            padding: 0.15rem 0.34rem; 
            border: 1px solid transparent;
            border-radius: 3px;
            transition: all 0.2 ease;

            &:hover{
                border: 1px solid #dddd;
            }
            &.active {
                background: #fff;
                color: black;
                transition: all 0.2s ease;
            }
        }
        &.showNavbar {
        display: flex;
        justify-content: center;
        align-items: center;
        }

        
    }
`