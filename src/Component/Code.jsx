import React, { useContext } from 'react';
import { DataContext } from '../Context/DataProvider';
import { Box, styled } from '@mui/material';

const Container = styled(Box)`
    height: 41vh;
`;

const Code = () => {
    const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

    const handleHtmlChange = (e) => {
        setHtml(e.target.value);
    };

    const handleCssChange = (e) => {
        setCss(e.target.value);
    };

    const handleJsChange = (e) => {
        setJs(e.target.value);
    };

    return (
        <Container>
            <textarea
                value={html}
                onChange={handleHtmlChange}
                placeholder="HTML"
            ></textarea>
            <textarea
                value={css}
                onChange={handleCssChange}
                placeholder="CSS"
            ></textarea>
            <textarea
                value={js}
                onChange={handleJsChange}
                placeholder="JavaScript"
            ></textarea>
        </Container>
    );
};

export default Code;


