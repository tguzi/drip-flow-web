import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Waterfall, { MasonryItem } from 'components/Waterfall'
import Tag from 'components/Tag'
import { get } from 'src/fetch'
import { encodeId } from 'utils/index'

import {
  Wrap,
  Box,
  Label,
  Time,
  Title,
  Cover
} from './styled'

const Content = () => {
  const [list, setList] = useState([])
  const history = useHistory()
  const noNull = list?.length
  useEffect(() => {
    (async () => {
      try {
        const data = await get('/api/article/list')
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
                      <Tag text={v.label_id} />
                      <Time>{v.updatedAt}</Time>
                    </Label>
                    <Title title={v.article_title} onClick={() => gotoArticleDetial(v.article_id)}>{v.article_title}</Title>
                    <Cover onClick={() => gotoArticleDetial(v.article_id)}>
                      <img src={v.article_cover} alt={v.article_title} title={`${v.label_id}-${v.article_title}`} />
                    </Cover>
                  </Box>
                </MasonryItem>
              ))
            }
          </Waterfall>
        ) : (
          <div>空空如也</div>
        )
      }
    </Wrap>
  )
}

export default Content
