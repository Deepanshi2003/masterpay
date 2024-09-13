import React from 'react'

const Map = (props) => {
    const {name,add1,add2}=props
  return (
    <div className="col-md-4 map22">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8128820663082!2d77.32448607495463!3d28.57538108667473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44de4079aaf%3A0x90bdc69b12f688c9!2s154%2C%20Sector%2019%20St%2C%20Block%20D%2C%20Pocket%20D%2C%20Sector%2027%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1721905798913!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='b154'></iframe>
                     <h2>{name}</h2>
                    <div className="address">
                        <p>{add1}</p>
                        <p>{add2}</p>
                    </div>
                    </div>
  )
}

export default Map