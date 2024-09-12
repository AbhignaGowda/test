import ListingMapView from '@/app/_components/ListingMapView'

import React from 'react'

function ForRent() {
  
  return (
    <div className=" p-10">
    <ListingMapView types={['dry','wet']}  />
 </div>
  )
}

export default ForRent