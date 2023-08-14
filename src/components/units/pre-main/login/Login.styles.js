import styled from '@emotion/styled'


export const Wrapper = styled.div`
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 30px;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    border-radius: 20px;
    
    input {
        width: 100%;
        height: 25px;
        margin-bottom: 3px;
    }
`
export const LoginButton = styled.button`
    width: 100%;
    height: 30px;
    margin: 3px 0;
    display: block;
     
`
export const FindPasswordButton = styled.button`
    width: 100%;
    height: 30px;
    display: block;
    
`