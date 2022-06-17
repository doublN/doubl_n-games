import {useLocation} from 'react-router-dom'

export default function ErrorPage() {

    const {state} = useLocation();
    console.log(state);

  return (
  <div id="error">
    {state === null ? <p>Sorry, that page doesnt exist!</p> : <p>{state.errMsg}</p>}
  </div>
  )
}
