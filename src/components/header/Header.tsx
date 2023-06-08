import { DivHeaderContainer, HeaderContainer } from './Header.styles'
import logo from '../../assets/logo.png'
import { ClipboardText, Timer } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="brand logo todo" />
      <DivHeaderContainer>
        <NavLink to="/" title='to do list'>
          <ClipboardText size={24} />
        </NavLink>
        <NavLink to="/timer" title='timer'>
          <Timer size={24} />
        </NavLink>
      </DivHeaderContainer>
    </HeaderContainer>
  )
}
