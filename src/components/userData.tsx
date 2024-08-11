import { THandleLoginProps, THod } from "../context/auth/_type/TYPE"
import { findAllUsers } from "../services/userService"
import { login } from "../services/authService"



export const handleLogin = async(props:THandleLoginProps & THod) => {
    await login(props).then((res) => {
        props.success(res)
    }).catch(err => {
        props.failed(err)
    }) 
}
