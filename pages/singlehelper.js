import { useRouter } from "next/router"
import useHttp from "../hooks/use-http"

const singleHelper = () => {
    const router = useRouter()
    const helperId = router.query.id
    const {  sendRequest:sendHelperRequest }  = useHttp();
    
const load = () => {
    const helperDetails = ((response) => {
        console.log(response)
    })
    
    sendHelperRequest({
        "url": `/api/${helperId}`,
    }, helperDetails)

}
     

    return(
        <p onClick={load}>Single helper</p>
    )
}

export default singleHelper