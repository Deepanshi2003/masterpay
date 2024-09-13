import React from 'react'

const Section5 = (props) => {
    const {image,head,text}=props
  return (
    <div>
                <img className="section-5img" src={image} alt="" />
                  <div className="servicetile-text">
                    <h4>{head}</h4>
                    <p>
                   {text}
                    </p>
                    <div className="readservice">
                      <label>Read More</label>
                    </div>{" "}
                  </div>
    </div>
  )
}

export default Section5