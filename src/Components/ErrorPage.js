import {useLocation} from 'react-router-dom'

export default function ErrorPage() {
    let displayedErrMsg = "";
    
    const {state} = useLocation();

    if(state){
        console.log(state.errMsg)
        switch(state.errMsg){
            case 'Review id does not exist': displayedErrMsg = "Sorry, that review does not exist"; break;
            case 'Bad request: invalid data type': displayedErrMsg = "Invalid review id entered"; break;
            case 'Invalid request': displayedErrMsg = "Sorry that category does not exist"; break;
            case 'Endpoint not found': displayedErrMsg = "Sorry, that page does not exist"; break;
            default: displayedErrMsg = "Sorry an error has occurred, the page cannot be loaded, please try again"; break;
        }
    } else {
        displayedErrMsg = "Sorry, that page does not exist";
    }

  return (
    <p id="errorMsg">{displayedErrMsg}</p>
  )
}
