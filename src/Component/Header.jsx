import { AppBar, Toolbar, styled } from "@mui/material";

const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
`;

const Header = () => {
    const logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAbFBMVEX///8LCwoAAABPT09zc3MDAwCvr6/m5uYGBgWzs7Pg4ODr6+v7+/vy8vJubm6lpaVUVFSenp5lZWVeXl5ZWVkeHh5BQUEUFBQ8PDzX19eQkJCYmJgzMzMtLS25ubl+fn5ISEgmJibHx8eHh4ipv4Y0AAAEl0lEQVRogc1b63qCMAyNYQhyUedd59zt/d9xZQq2TVoqCBnf/myMnp6mPU3TBKD7U57O8flU9mihxzObIKqfdCqAnawUdvUgrpKxwWfbK/Yf/nY2KnZZE7/B43pE608N7Cv+WNZP1hhP7CfG9SjWv+xt4jf6++Gtn8/JqN/pz/NhwdUad2APb/08Yixu0o8Go+8nfqM/kPQlK6fFzdEfQvp0cWvB3z6bfkmIa7/TV6unSh8RtxQ35/pPeF5jauM/jz4VN8QFLBv0Je1djJsnWZ+Im1pXR4CoQY8AsiXp4FOkj4ob4mv1wkAHeKX0+0vfLCUWP2TAoEN2oNbvR78k4nYjzqAz9FP87EF/aoubmupZ/ZKiQ7Yh9DtLHxU3NdWL5jWDDsXCNlRX6SPipsYx095z6Ir+J6HfwevjxO3N+A8enbH+414fI26RNYIudEiW/aSPFzfrcaIDLOjaD/f6HOIWjl5Jnz38kzDrO8XtAfTO0kccmEbcHkJnpa/N+tRz44m3o7P0/V7fjNnHWeIh6JX0ESpu+oy4pZq4PYyupM82o1v6GHHbuYiHofPSx9FvF7cu6Kz0Ua+PEbelXyAC0QOkL0jcOqKz0qd7fWHi1hmd8/oa6QsVt+7oHuk7Uovz4tYHnZU+Nbx5J+KqOe00EdJZbvLncDL/FrvFzXh0HcFJ2wy99teWPjzB2UCPt25x0x6linpDgdt3sTD1DM9gWiPMCZmS0A3ugz6cmd+lYDfj1be/p1wzB3nETbvz9mp/Z6NP8L1lpdNgXY3fQv/4Tj4k6KqVH4/pE3Javo+j/9z6w/Saold+u5P+1BvB8EQtjhHXawb9b3dj6VOLEwVZs95L8cabi0V37OwXqopIFexCP8x2DnPx6FUrJ6uJnPWTuJ3Zpu8g7kFXbe8M65M1jlcHIGdcd8P6x517qmjojG/TWJ/ZB/e1vC5ov1YN/eKNnmo5dNx9kV2wtj6NS2N0nxjZkkrfpbG4ba4vbSw09I/SsdFzLp+5DxLv5ea8sU7dB4v+AvBNOR6OzFQnp4Kcei94OdI9ff8N8OJCh4LST2k0hNtQSdSiWo52h+bVRHKjKxOf/YLiPN1kRIPtXr9fJ4MPvZreniC8z8knVjZ7XZ9hveiMpmlN7Hw7ID25aL1uNLAFnbF+3USbC0Umf/3h/L5xtKEr+nQvVv/x2e4/JRH34Zcu/u3oys9mwENCTwUDj4a5/jd3UbtLznm13l1NTAZf75JaJ6rzgnuc7P4u6tsM5dd5LjH/j09rtd3dn7f1+FF/vs9ZhonDP3aW6XGO2/Q9x/U5wzp3odAzrOj5XTR2MXLcRjZmJRuvk41VysZpZWPUQvF5vF9NCtxN6BkpovcyIHsnBcL3cSB7FwnC97AgewcCwvfvMGzuQUDqhWjeBcjmnIBwvg3I5hqBcJ4VyOaYASt98Wj5dcCu/dFyC0E4rxJkc0pBOJ8WZHOJQTiPGmRzyEE4fx4eqx0YoHBGtG4CAmtGhiuZEa2XgfZaoYFLpUTrpEC2RgyE6+NAtjYQhOsiQbYmFITrYUG2FhiqOuhDfOhVB/0LbhJU79FjD+AAAAAASUVORK5CYII=' ;


    return (
        <Container>
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 40 }} /> <h1>Code-Playground</h1> 
            </Toolbar>
        </Container>
    );
};

export default Header;
