import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Waterfall, { MasonryItem } from 'components/Waterfall'
import Tag from 'components/Tag'
import useResponse from 'hooks/useResponse'
import { get } from 'utils/request'
import { encodeId } from 'utils/index'

import {
  Wrap,
  Box,
  Label,
  Time,
  Title,
  Cover,
  Empty
} from './styled'

const Content = () => {
  const [list, setList] = useState([])
  const history = useHistory()
  const noNull = list?.length
  useEffect(() => {
    getList()
  }, [])

  async function getList() {
    const [list] = await useResponse(get('/article/list'))
    setList(list)
  }

  function gotoArticleDetial(id: number) {
    history.push(`/article/${encodeId(id)}`)
  }

  return (
    <Wrap>
      {
        noNull ? (
          <Waterfall>
            {
              list.map((v: any, k) => (
                <MasonryItem key={k}>
                  <Box>
                    <Label>
                      <Tag text={v?.Label?.name ?? '札记'} />
                      <Time>{v.updatedAt}</Time>
                    </Label>
                    <Title title={v.title} onClick={() => gotoArticleDetial(v.id)}>{v.title}</Title>
                    {
                      v?.cover && (
                        <Cover onClick={() => gotoArticleDetial(v.id)}>
                          <img src={v.cover} alt={v.title} title={`${v?.Label?.name}-${v.title}`} />
                        </Cover>
                      )
                    }
                  </Box>
                </MasonryItem>
              ))
            }
          </Waterfall>
        ) : (
          <Empty>这里空空如也～</Empty>
        )
      }
    </Wrap>
  )
}

export default Content
