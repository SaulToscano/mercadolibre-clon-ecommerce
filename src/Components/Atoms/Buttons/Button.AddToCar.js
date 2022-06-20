import styled from 'styled-components';

export const AddToCar = styled.button`
    background-color: rgba(65,137,230,.15);
    border-color: transparent;
    color: #3483fa;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        background-color: rgba(65,137,230,.2);
        border-color: transparent;
        color: #3483fa;
        transition: background-color .2s ease-in;
    }
`