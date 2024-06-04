import React from 'react'
import Icon from './Icon';
import '../btn.css'

const Button= function Button({type, className}) {
    switch(type){
        case 'delete':
            return <button className={className}><Icon type="delete"/>Delete</button>;
        case 'home':
            return <button className={className}><Icon type="home"/>Home</button>;
        case 'setting':
            return <button className={className}><Icon type="setting"/>Settings</button>;

        case 'submit':
            return <button className={className}>Submit</button>;
        case 'upload':
            return <button className={className}><Icon type="upload"/>Upload</button>;
        case 'play':
            return <button className={className}><Icon type="play"/>Play</button>;
        case 'icon':
            return <button className={className}>Icon</button>;
        case 'search':
            return <button className={className}>Search<Icon type="search"/></button>;
        case 'download':
            return <button className={className}><Icon type="download"/>Download</button>;
        case 'profile':
            return <button className={className}><Icon type="profile"/>Profile/Login</button>;
    }
  return (
    
    <button className={className}>{type}</button>
    
  )
}
export default Button;