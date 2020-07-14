import React from 'react'
import { HeartLoadingWrap, HeartLoadingList, HeartLoadingItem } from './styled'

const HeartLoading = () => (
  <HeartLoadingWrap>
    <HeartLoadingList>
      {new Array(9).fill(0).map((item, key) => {
        return (
          <HeartLoadingItem
            className={`line-${key + 1}`}
            index={key}
            key={key}
          />
        )
      })}
    </HeartLoadingList>
  </HeartLoadingWrap>
)

export default HeartLoading
