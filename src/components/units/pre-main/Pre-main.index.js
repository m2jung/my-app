import * as C from './Pre-main.styles'
import Login from './login/Login.index'

export default function PreMain(){

    return (
        <>
        <C.Wrapper>
            <C.Article src={'./images/welcome.png'}/>
            <Login/>
        </C.Wrapper>

        </>
    )
}