import styled from 'styled-components'

const StyledFooter = styled.footer`

/* Footer Section*/

display: flex;
align-items: start;
justify-content: space-between;
background-color: #303435;
color: #fff;
padding: 2rem;

ul {
    display: flex;
}

ul li {
    margin-left: 16px;
}

p {
    text-transform: uppercase;
    font-size: 14px;
    opacity: 0.6;
    align-self: center;
}
nav{
  display: flex;
  width: 100%;
  margin-left: 2rem;
  & a:last-child{
    margin-left: auto;
  }
}
.logo{
  height: 4rem;
}

@media screen and (max-width: 800px) {
  display: none;
}
`;


export default StyledFooter;
