import React from 'react'
import Badge from 'react-bootstrap/Badge'

const Tags = ({ colorBadge, textBadge }) => {
  return (
    <>
      <Badge className="dogBadge" bg={colorBadge}>
        {textBadge}
      </Badge>
    </>
  )
}

export default Tags
