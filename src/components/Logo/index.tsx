import React from 'react'
import Image from 'next/image'

import styled from '@emotion/styled'

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const LogoImg = styled.div`
  width: 29px;
  height: 29px;

  img {
    width: 100%;
    height: 100%;
  }
`

const LogoText = styled.h2`
  font-size: 16px;
  margin: 0;
  margin-left: 4px;
  color: #222;
  font-weight: 500;
`

export default function Logo() {
  return (
    <LogoWrapper>
      <LogoImg>
        <Image
          src="/images/logo.png"
          alt="icon logo"
          width={100}
          height={100}
        />
      </LogoImg>
      <LogoText>I Cath</LogoText>
    </LogoWrapper>
  )
}
