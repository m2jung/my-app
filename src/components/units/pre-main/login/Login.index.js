import { useState } from 'react';
import * as C from './Login.styles'
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  // 1) input value 객체로 담을 state 선언 
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  // 2) input value state에 저장 
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  // 3) 로그인 클릭시 확인 (string으로 객체 저장 보내기)
  const handleSubmit = (event) => {
    event.preventDefault() // 창이 새로고침 되는 걸 막음
    
    // 4-2 로그인 클릭시 유효성 검사 함수 호출
    if(!values){
      setErrors(true);
    }
    alert(JSON.stringify(values, null,  2)); // 객체의 값을 사용하려면 stringify로 변환해야 한다.
    router.push('./main');
  }
  
  // 4) 유효성 검사 오류메세지 출력
  // 4-1 오류 메세지 담을 state 선언과 유효성 검사 함수 
  const [errors, setErrors] = '';
  const [errorMsg, setErrorMsg] = useState(
  "입력하신 이메일 주소 또는 비밀번호를 다시 확인해주세요.",);
  



  return (
    <C.Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='email'
          placeholder='Email Address'
          value={values.email}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={values.password}
          onChange={handleChange}
        />
        {errors? <span>{errorMsg}</span> : <></>}
        <br/>
        <C.LoginButton type='submit'>로그인</C.LoginButton>
        <C.FindPasswordButton>비밀번호를 잊으셨나요?</C.FindPasswordButton>
      </form>
    </C.Wrapper>
  );
}
