import { useForm } from 'react-hook-form'; // 폼 기능 제공 라이브러리 


// 로그인시 유효검사 Hook
function useForm({ initialValues, validate, onSubmit }) {
    const [values, setValues] = useState(initialValues); // input value
    const [errors, setErrors] = useState({}) // error 확인
    const [touched, setTouched] = useState({}) //


    // input value State에 객체로 저장 
    const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        })
    }

    const handleBlur = e => {
        setTouched({
          ...touched,
          [e.target.name]: true,
        })
    }

    // 새로고침 방지 
    const handleSubmit = e => {
        e.preventDefault();
    }



}