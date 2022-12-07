import { Link, BrowserRouter } from 'react-router-dom'

export default function Root() {
  return (
    <BrowserRouter>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/welcome">@single-spa/welcome</Link>
          </li>
          <li>
            <Link to="/react-single">@poc/react-single</Link>
          </li>
          <li>
            <Link to="/react-multiples">@poc/react-multiples</Link>
          </li>
          <li>
            <Link to="/react-lazy">@poc/react-lazy</Link>
          </li>
          <li>
            <Link to="/react-form">@poc/react-form</Link>
          </li>
          <li>
            <Link to="/react-form-with-utility-model">
              @poc/react-form-with-utility-model
            </Link>
          </li>
        </ul>
      </header>
    </BrowserRouter>
  )
}
