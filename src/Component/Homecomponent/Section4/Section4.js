import React from 'react'

const Section4 = (props) => {
    const{image,head,text}=props
  return (
    <div>
        <div className="svg">
             <img src={image} alt="" />
            </div>
            <div className="svg-content">
              <h3>{head}</h3>
              <p>
                {text}
              </p>
            </div>
    </div>
  )
}

export default Section4