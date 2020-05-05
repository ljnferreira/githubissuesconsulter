import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: #0D2636;
  &:hover{
    opacity:0.9;
  }
  span{
    font-weight: 600;
  }

`;
export const Nav = styled.nav`
  width: 100%;
  font-size: 36px;
  padding: 8px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 5px #ccc;
  & span{
    padding-left: 8px;
  }

`;
