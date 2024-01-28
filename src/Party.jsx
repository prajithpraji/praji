import React from 'react'
import ImageCard from './ImageCard'

const Party = () => {
  return (
<div className='ContainerMain'>
<h1 className='ehome'>Add - On Items</h1>
<h1 className='ehome'>(For Parties & Occasions)</h1>
    <div className='f1'>
<ImageCard className="pic1" url="/Images/party.webp" heading="Something Special" details="Vilot Cake"  price="&#8377; 80 "/>
<ImageCard className="pic1"  url="/Images/party1.webp"  heading="Premium Cakes" details="Red Rose Cake" price="&#8377; 70 "/>
<ImageCard  className="pic1" url="/Images/party2.webp"  heading="Something Special" details="Rasamulai Cake" price="&#8377; 100"/>
<ImageCard className="pic1"  url="/Images/party3.webp" heading="Ragular Cakes" details="White Forest" price="&#8377; 110"/>
</div>
<div className='f1'>
<ImageCard className="pic1" url="/Images/party4.webp" heading="Something Special" details="Vilot Cake"  price="&#8377; 190 "/>
<ImageCard className="pic1"  url="/Images/party5.webp"  heading="Premium Cakes" details="Red Rose Cake" price="&#8377; 270 "/>
<ImageCard  className="pic1" url="/Images/party6.webp"  heading="Something Special" details="Rasamulai Cake" price="&#8377; 330"/>
<ImageCard className="pic1"  url="/Images/party7.webp" heading="Ragular Cakes" details="White Forest" price="&#8377; 900"/>
</div>

    </div>
  )
}

export default Party