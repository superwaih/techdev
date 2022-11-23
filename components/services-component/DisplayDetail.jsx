import React from 'react'

const DisplayDetail = ({active, data}) => {
  return (
    <>
     {
        active === data.title && (
            <div>
                <h3>

                {data.title}
                </h3>
            </div>
        )
    }
    </>
  )
}

export default DisplayDetail