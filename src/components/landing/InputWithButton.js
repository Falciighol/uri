import React, { useState } from 'react';

import { Input as AntdInput, Button } from 'antd';
import styled from 'styled-components';
import { FaCut as FaCut } from "react-icons/fa";

const InputWithButton = ({
    placeholder, 
}) => {
    const [loading, setLoading] = useState(false)

    return (
        <Container>
            <AntdInput placeholder={placeholder} />
            <Button
                className="button"
                type="primary"
                loading={loading}
                icon={<FaCut />}
                onClick={() => setLoading(false)}
            >
                &nbsp; Shorten
            </Button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    flex-wrap: wrap;
    min-height: 3rem;

    @media screen and (max-width: 600px) {
        justify-content: center;

        .ant-input {
            width: 100% !important;
            margin-right: 0 !important;
        }

        .button {
            margin-top: 1rem;
        }
    }

    @media screen 
        and (min-width: 601px)
        and (max-width: 1280px) {
        justify-content: left;
        
        .ant-input {
            width: 22rem !important;
        }

        .button {
            
        }
    }

    .ant-input {
        width: 25rem;
        border-radius: 5px;
        border-color: var(--border);
        height: 2.5rem;
        align-items: center;
        font-size: medium;
        font-family: Rubik;
        margin-right: 1rem;
        color: var(--text);

        :hover {
            border-color: var(--primary-shadow) !important;
        }

        :focus {
            border-radius: 15px;
            border-color: var(--primary-shadow) !important;
            box-shadow: 0 0 5px var(--primary-shadow);
        }
    }

    .button {
        width: auto;
        display: flex;
        align-items: center;
        font-family: Rubik;
        background-color: var(--primary);
        border-color: var(--primary-shadow)00;
        border-radius: 25px;
        height: 2.2rem;

        transition: all .5s ease;

        :active {
            border-color: var(--primary-shadow);
            box-shadow: 0 0 5px var(--primary-shadow);
        }

        :hover {
            border-radius: 20px;
            box-shadow: 0 0 5px var(--primary-shadow);
            border-color: var(--primary-hover);
            background-color: var(--primary-hover);
        }

        :focus {
            border-color: var(--primary-shadow);
            box-shadow: 0 0 5px var(--primary-shadow);
        }
    }
`;

 export default InputWithButton;