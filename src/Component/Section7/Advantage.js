import React from 'react'

const Advantage = (props) => {
    const {image,text}=props
  return (
<div className="col-md-4 advantagetile" data-aos="fade-up" data-aos-delay="50"             data-aos-once="true"
>
    <div className="adimg">
    <img src={image} alt="" />
    </div>
                 <div className="textadvg">
                  <p>{text}</p>
                 </div>
              </div>
)
}

export default Advantage