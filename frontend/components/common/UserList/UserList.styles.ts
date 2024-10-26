import styled from "styled-components";

const Header = styled.span`
    width : 100%;
    display : flex;
    justify-content: space-between;
    align-items: center;
`

const Container = styled.div`
    width: 100%;
    display : flex;
    flex-direction: column;
    gap: 20px;
    border-bottom: 2px;
    border-bottom-color: #F3F3F3;
`

export { Header, Container };