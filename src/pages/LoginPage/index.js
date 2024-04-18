/**
 * 로그인 페이지 파일입니다. 이 앱에서는 Firebase에서 제공하는 Google 인증 시스템을 사용하기 때문에, `지금 가입` 버튼을 클릭하면 `Google 계정 만들기` 페이지로 이동합니다.
 */

import React from 'react'
import styled from 'styled-components'

const LoginPage = () => {
  return (
    <Container>
      <Content>
        <Center>
          <LogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUpLink href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2F&ec=GAZAmgQ&hl=ko&passive=true&ifkv=ARZ0qKJi7RFINrsiPI-vSbKDcTffDAEEv0nkeduxjbsaY-QgP0cg1FCI9DApo2DLRJareUSYdJTZ&theme=mn&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin" target="_blank">지금 가입</SignUpLink>
          <Description>
            영화에 대한 프리미어 액세스를 얻으십시오.
            디즈니 플러스 가격은 다음 주부터 1000원 인상됩니다.
          </Description>
          <LogoTwo src="/images/cta-logo-two.png" alt="" />
        </Center>
        <BgImage />
      </Content>
    </Container>
  )
}

export default LoginPage

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`

const Center = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const LogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`

const SignUpLink = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`

const LogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`