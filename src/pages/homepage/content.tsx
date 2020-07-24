import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Waterfall, { MasonryItem } from 'components/Waterfall'
import Tag from 'components/Tag'
import Empty from 'components/Empty'
import { get } from 'src/fetch'
import { encodeId, timeFormat } from 'utils/index'

import {
  Wrap,
  Box,
  Label,
  Time,
  Title,
  Cover,
} from './styled'

const Content = () => {
  const [list, setList] = useState([])
  const history = useHistory()
  const noNull = list?.length
  useEffect(() => {
    (async () => {
      try {
        const data = await get('/article/list')
        setList(data?.data)
      } catch (e) {
        console.log('获取列表失败')
      }
    })()
  }, [])

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
                      <Time>{timeFormat(v.updatedAt)}</Time>
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
          <Empty />
        )
      }
    </Wrap>
  )
}

export default Content
