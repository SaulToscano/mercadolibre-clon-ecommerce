import styled from 'styled-components';

export const AddToCarButton = styled.button`
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

export const BuyNowButton = styled.button`
    background-color: #3483fa;
    border-color: transparent;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    border-radius: 6px;
    &:hover{
        background-color: #2968c8;
        border-color: transparent;
        color: #fff;
        transition: background-color .2s ease-in;
    }
`

export const SearchInputButton = styled.button`
    height: 39px;
    padding-top: 2px;
    cursor: pointer;
`