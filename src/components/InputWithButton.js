import React, { useState } from 'react';

import { Input as AntdInput, Button } from 'antd';
import { PlayCircleFilled } from '@ant-design/icons';
import styled from 'styled-components';

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
                icon={<PlayCircleFilled />}
                onClick={() => setLoading(false)}
            >
                Go
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
        height: 2.5rem;
        align-items: center;
        font-size: medium;
        margin-right: 1rem;
        color: #555;

        :hover {
            border-color: #d3a3ff !important;
        }

        :focus {
            border-radius: 15px;
            border-color: #d3a3ff !important;
        }
    }

    .button {
        width: auto;
        background-color: #8A0CFF;
        border-color: #d3a3ff00;
        border-radius: 25px;
        height: 2.2rem;

        transition: all .5s ease;

        :active {
            border-color: #d3a3ff !important;
        }

        :hover {
            border-radius: 20px;
            border-color: #A13DFF ;
            background-color: #A13DFF;
        }

        :focus {
            border-color: #d3a3ff !important;
        }
    }
`;

 export default InputWithButton;