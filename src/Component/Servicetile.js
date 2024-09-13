import React from 'react'

const Servicetile = (props) => {
    const {image,head1,head2,text1,text2}=props
  return (
<div className="row">
                <div className="col-md-4">
                 <img src={image} alt="" />
                </div>
                <div className="col-md-8">
                  <div className="service-heading">
                    <h3>{head1}</h3>
                    <p>{head2}</p>
                    <div className="line"></div>
                  </div>
                  <div className="service-text">
                    <p>{text1}</p>
                    <p>{text2}</p>
                  </div>
                </div>
                </div>
  )
}

export default Servicetile