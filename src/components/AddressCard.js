import React from 'react'

export const AddressCard = ({addressTitle}) => {
    return (
        <div className='card'>
            <div className='card-header'>
                <p className='card-header-title'>
                    {addressTitle}
                </p>
            </div>
            <div className='card-content'>
                <div className='content'>
                    <address>
                        <strong>Khargahan Bhawan</strong><br/>
                        (near bhagalpur commitionary office),
                        Swami Vivekanand Path<br/>
                        Bhagalpur - 812001
                    </address>
                    <hr/>
                    <address>
                        Urdu Bazar, near Durga Mandir<br/>
                        Rekabganj, Bhagalpur,
                        (Pratap Sir Office)
                    </address>
                </div>
            </div>
        </div>
    )
}
