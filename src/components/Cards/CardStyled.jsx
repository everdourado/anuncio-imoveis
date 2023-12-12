import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 100%;

    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: #fff;
    padding: 2rem;
`

export const CardBody = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h2{
        margin-bottom: 1rem;
    }

    img{
        width: 50%;
        object-fit: cover;
        object-position: center;
    }
`