'use client'

import { Title3 } from '@fluentui/react-text'
import { OshimenCard } from '@/components/Card/OshimenCard'
import { Button } from '@fluentui/react-button'
import styled from '@emotion/styled'
import { Oshimen } from '@/oshimen/oshimen'
import { ShinkenTadoBoy } from '@/components/TadoBoy/ShinkenTadoBoy'

const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  min-height: 100%;
  padding: 24px 16px;
  box-sizing: border-box;
`

const Contents = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`

export function OshimenPage({ oshimen }: { oshimen: Oshimen }) {
  return (
    <Container>
      <Contents>
        <ShinkenTadoBoy shinkenIdolName={oshimen.name} />
        <Title3>もやしきんぐの推しメンは？</Title3>
        <OshimenCard oshimen={oshimen} />
        <Button>他の推しメンを見てみる</Button>
      </Contents>
    </Container>
  )
}
