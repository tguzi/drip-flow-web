import React from 'react'
import styled from 'styled-components'

interface IProps {
  children: any;
}

const Table = styled.table`
  th, td {
    text-align: center;
    padding: 6px 13px;
    border: 1px solid #abcdef;
  }
  thead {
    background: #abcdef;
  }
  tbody {
    tr {
      background: #fff;
      &:nth-of-type(2n) {
        background: #dfe2e5;
      }
    }
  }
`

const TableBlock: React.SFC<IProps> = ({
  children,
}) => (
  <Table>{children}</Table>
)

export default TableBlock
