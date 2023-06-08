import { HeaderContainer } from './Header.styles'
import logo from '../../assets/logo.png'
export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="brand logo todo" />
    </HeaderContainer>
  )
}
