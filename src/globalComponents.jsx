import React from "react";
import styled from 'styled-components';

export const PrimaryButton = styled.button`
    color: #263238;
    font-weight: 600;
    transition: all 300ms ease;
    padding: 1rem;
    width: 8rem;
    border-radius: 2rem;
    border: #263238 0.1rem solid;
    cursor: pointer;

    &:hover {
        background-color: #263238;
        color: white;
    }
`;

export const Secondarybutton = styled.button`
    background-color: #455a64;
    color: white;
    font-weight: 600;
    transition: all 300ms ease;
    padding: 1rem;
    width: 8rem;
    border-radius: 2rem;
    border: #455a64 0.1rem solid;
    cursor: pointer;

    &:hover {
        background-color: #263238;
    }
`;

export const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
    line-height: 1;
    padding: 0.5rem 0;
`;

export const SectionSubtitle = styled.p`
    text-align: center;
`;