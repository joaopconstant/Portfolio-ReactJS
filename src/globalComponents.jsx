import React from "react";
import styled from 'styled-components';

export const PrimaryButton = styled.button`
    font-weight: 600;
    transition: all 300ms ease;
    padding: 1rem;
    width: 8rem;
    border-radius: 2rem;
    border: rgb(53, 53, 53) 0.1rem solid;
    cursor: pointer;

    &:hover {
        background-color: rgb(53, 53, 53);
        color: white;
    }
`;

export const Secondarybutton = styled.button`
    background-color: rgb(53, 53, 53);
    color: white;
    font-weight: 600;
    transition: all 300ms ease;
    padding: 1rem;
    width: 8rem;
    border-radius: 2rem;
    border: rgb(53, 53, 53) 0.1rem solid;
    cursor: pointer;

    &:hover {
        background-color: rgb(0, 0, 0);
    }
`;