import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    background: #1a2027;
    height: 100vh;

    padding: 0 20px;
`

export const Header = styled.header`
    height: 100%;
`

export const Button = styled.button`
    background: white;

    padding: 8px 16px;
    font-weight: 700;
    border-radius: 4px;
    font-size: 21px;
`

export const Container = styled.div`
    margin-top: auto;
    width: 30%;
    
    h2{

    }
    
    ul{
        padding: 0;
        max-height: 600px;
        overflow-y: auto;
        &::-webkit-scrollbar {
            width: 4px;
        }
        
        &::-webkit-scrollbar-track {
         box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
        }
        
        &::-webkit-scrollbar-thumb {
            background-color: #d2d2d2;
        }
    }

`