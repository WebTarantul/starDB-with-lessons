import React from 'react'

import './row.css'

const Row = ({leftContent, rightContent}) => {
  return (
    <React.Fragment>
      <div className="row mb2">
        <div className="col-md-6">
         {leftContent}
        </div>
        <div className="col-md-6">
         {rightContent}
        </div>
      </div>
    </React.Fragment>
  )
} 

export default Row;