import styled from 'styled-components';

export const CardContener = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    gap: 1rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    background-color: #ffff;
    border-radius: 0.3rem;
    padding: 0.9rem;
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
        width: 60%;
        object-fit: cover;
        object-position: center;
    }
`