import React, { useState, useEffect } from 'react';
import '../styling/menu.css'

function Menu() {

    const bell = './notification.png'
    const data = [
        {
            "image": "https://synergi-dev.s3.ap-southeast-1.amazonaws.com/profile-pictures/6b9.png",
            "message": "Lorem ipsum dolor sit amet.",
            "detailPage": "/events",
            "receivedTime": "12h ago"
        },
        {
            "image": "https://synergi-dev.s3.ap-southeast-1.amazonaws.com/profile-pictures/abc.png",
            "message": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "detailPage": "/news",
            "receivedTime": "1d ago"
        }
    ];

    function toggleNotifications(){
        console.log('toggla')
    }

    function acceptInvite(){
        console.log('hej hej')
    }

    function refuseInvite(){
        console.log('hej hej')
    }

    return (
        <>
<img src={bell} alt="Bell" onClick={toggleNotifications} />
        <div className='hidden'>
            {data ? (
                <div >
                    {data.map((item, index) => (
                        <div key={index} className='notificationsCard'>
                            <img src={item.image} alt="Profile" />
                            <p>{item.message}</p>
                            <a href={item.detailPage}>Läs mer</a>
                            <p>{item.receivedTime}</p>
                            <button onClick={acceptInvite}>ACCEPTERA</button>
                            <button onClick={refuseInvite}>NEKA</button>
                        </div>
                    ))}
                </div>
            ) : (
                'Laddar data...'
            )}
        </div>
        </>
    );
}

export default Menu;