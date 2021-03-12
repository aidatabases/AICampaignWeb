import React, {useState} from 'react'
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import './Profile.scss'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import personPic from '../images/profilesample.png' 
import { ArrowDownward, ArrowUpward, CalendarToday, Facebook, Instagram, LinkedIn, Phone, Today, Twitter } from '@material-ui/icons';

const editFields = [
    {title: "Name", placeholder: "Your Name is Here"},
    {title: "Post of Party", placeholder: "Your Name is Here"},
    {title: "Party Name", placeholder: "Your Name is Here"},
    {title: "Your Area", placeholder: "Your Name is Here"},
    {title: "Your City", placeholder: "Your Name is Here"},
    {title: "Your State", placeholder: "Your Name is Here"},
]

const instaIconStyles = {
    background: '#f09433', 
    background: '-moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', 
    background: '-webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', 
    background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', 
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#f09433\', endColorstr=\'#bc1888\',GradientType=1 )',
    borderRadius: '5px',
    color: '#f1f1f1'
}

const cardField = [
    {icon: <Twitter style={{color: '#1DA1F2', fontSize: '1.8rem'}}/>, followerCount: 1920, changeBy: '20%', sign: 'positive', link: 'https://twitter.com', notification: true},
    {icon: <LinkedIn style={{color: '#4c68d7', fontSize: '1.8rem'}}/>, followerCount: 1920, changeBy: '20%', sign: 'positive', link: 'https://twitter.com', notification: true},
    {icon: <Facebook style={{color: '#4267B2', fontSize: '1.8rem'}}/>, followerCount: 1920, changeBy: '20%', sign: 'positive', link: 'https://twitter.com', notification: true},
    {icon: <Instagram style={instaIconStyles}/>, followerCount: 1920, changeBy: '20%', sign: 'positive', link: 'https://twitter.com', notification: true}
]

const contactsData = [
    {id: 1, name: "Akshay Kumar", detail: "Chairperson, New Delhi", email: "randommail@gmail.com", phone: ["+91 8269682928", "+91 9832039102", "+29 290980903894"], profile: personPic},
    {id: 2, name: "Hritik Roshan", detail: "Chairperson, New Delhi", email: "mail@random.com", phone: ["+91 8269682928", "+91 9832039102"], profile: personPic},
    {id: 3, name: "Amir Khan", detail: "Chairperson, New Delhi", email: "gmail@gmail.com", phone: ["+91 8269682928", "+91 9832039102"], profile: personPic},
    {id: 4, name: "Salman Khan", detail: "Chairperson, New Delhi", email: "arandomMail@gmail.com", phone: ["+91 8269682928", "+91 9832039102"], profile: personPic},
    {id: 5, name: "Shahrukh Khan", detail: "Chairperson, New Delhi", email: "arandomMail@gmail.com", phone: ["+91 8269682928", "+91 9832039102"], profile: personPic},
    {id: 6, name: "Some Random Name", detail: "Chairperson, New Delhi", email: "arandomMail@gmail.com", phone: ["+91 8269682928", "+91 9832039102"], profile: personPic},
    {id: 7, name: "New  Name", detail: "Chairperson, New Delhi", email: "arandomMail@gmail.com", phone: ["+91 8269682928", "+91 9832039102"], profile: personPic},
    {id: 8, name: "New  Name", detail: "Chairperson, New Delhi", email: "arandomMail@gmail.com", phone: ["+91 8269682928", "+91 9832039102"], profile: personPic},
    {id: 9, name: "New  Name", detail: "Chairperson, New Delhi", email: "arandomMail@gmail.com", phone: ["+91 8269682928", "+91 9832039102"], profile: personPic},
    {id: 10, name: "New  Name", detail: "Chairperson, New Delhi", email: "arandomMail@gmail.com", phone: ["+91 8269682928", "+91 9832039102"], profile: personPic},
    {id: 11, name: "New  Name", detail: "Chairperson, New Delhi", email: "arandomMail@gmail.com", phone: ["+91 8269682928", "+91 9832039102"], profile: personPic},
    {id: 12, name: "New  Name", detail: "Chairperson, New Delhi", email: "arandomMail@gmail.com", phone: ["+91 8269682928"], profile: personPic},
    {id: 13, name: "New  Name", detail: "Chairperson, New Delhi", email: "arandomMail@gmail.com", phone: ["+91 8269682928", "+91 9832039102"], profile: personPic},
    {id: 14, name: "New  Name", detail: "Chairperson, New Delhi", email: "arandomMail@gmail.com", phone: ["+91 8269682928", "+91 9832039102"], profile: personPic},
    {id: 15, name: "New  Name", detail: "Chairperson, New Delhi", email: "arandomMail@gmail.com", phone: ["+91 8269682928", "+91 9832039102"], profile: personPic},
    {id: 16, name: "New  Name", detail: "Chairperson, New Delhi", email: "arandomMail@gmail.com", phone: ["+91 8269682928", "+91 9832039102"], profile: personPic},
    {id: 17, name: "New  Name", detail: "Chairperson, New Delhi", email: "arandomMail@gmail.com", phone: ["+91 8269682928", "+91 9832039102"], profile: personPic},
    {id: 18, name: "New  Name", detail: "Chairperson, New Delhi", email: "arandomMail@gmail.com", phone: ["+91 8269682928", "+91 9832039102"], profile: personPic},
    {id: 19, name: "New  Name", detail: "Chairperson, New Delhi", email: "arandomMail@gmail.com", phone: ["+91 8269682928", "+91 9832039102"], profile: personPic},
    {id: 20, name: "New  Name", detail: "Chairperson, New Delhi", email: "arandomMail@gmail.com", phone: ["+91 8269682928", "+91 9832039102"], profile: personPic},
    {id: 21, name: "New  Name", detail: "Chairperson, New Delhi", email: "arandomMail@gmail.com", phone: ["+91 8269682928", "+91 9832039102"], profile: personPic}
]
const Profile = () => {

    const [currentContact, setCurrentContact] = useState(contactsData[0])
    const [filterOption, setFilterOption] = useState('Filter by')
    const getNameLetters = (name) => {
        return name.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()
    }
    const currentContactHandler = (contact) => {
        if(contact.id !== currentContact.id) setCurrentContact(contact) 
    }


    return (
        <div className="prof-page-container">
            <div className='prof-cover-photo-container'>
                <div className='camera-container'>
                    <AddAPhotoOutlinedIcon className="camera"/>
                </div>
                <div className="camera-text">Add Cover Photo</div>
            </div>
            <div style={{display: 'flex', position: 'relative'}}>
            <div className='prof-edit-area'>
                <div className='prof-edit-photo-container'>
                    <img src={personPic} className="prof-photo"/>
                </div>
                
                {editFields.map((field,i) => 
                    <div className="edit-field-container">
                        <label>{field.title}</label>
                        <div className="edit-field-holder">
                            <input type="text" id ={`edit-field-input-${i}`} placeholder={field.placeholder}/>
                            <CreateOutlinedIcon className='pencil-icon' onClick={() => document.getElementById(`edit-field-input-${i}`).focus()}/>
                        </div>
                    </div>
                )}
            </div>

            <div className='prof-main-area'>

                <div className='prof-card-area'>
                    {cardField.map(card => 
                        <div className='social-card'>
                            <div className='social-icon-container'>
                                {card.icon}
                                <div className={card.notification ? 'social-notification-dot red-dot' : 'social-notification-dot'}/>
                            </div>

                            <div className='followers-container'>
                                <div className='followers-numbers'>
                                    <div className='followers-numbers-current'>
                                        {card.followerCount} |
                                    </div>
                                    {card.sign === 'positive' ? 
                                        <div style={{color: 'green', display: 'flex', alignItems: 'center'}}>
                                            <ArrowUpward style={{fontSize: '1.1rem', margin: 0, padding: 0}}/>{card.changeBy}
                                        </div>
                                        : 
                                        <div style={{color: 'red', display: 'flex', alignItems: 'center'}}>
                                            <ArrowDownward  style={{fontSize: '1.1rem', margin: 0, padding: 0}}/>{card.changeBy}
                                        </div>
                                    }
                                    {/* <div className='followers-numbers-increase'> */}
                                </div>
                                <p>Followers</p>
                            </div>

                            <a target='__blank' href={card.link} className='prof-social-card-link'>See Notification</a>
                        </div>
                    )}
                </div>
                <div className='prof-filter-area'>
                    <input className='prof-filter-input' placeholder='Search'/>
                    <select className='prof-filter-input' onChange={(e) => setFilterOption(e.target.value)} value={filterOption}>
                        <option value='name'>Name</option>
                        <option value='date'>Date</option>
                    </select>
                    <div className='calendar-holder'>
                        <Today/>
                        <p>My calendar</p>
                    </div>
                </div>
                <div className='prof-main-contact-area'>
                    <div className='prof-contact-container'>
                        <h3>Contact List</h3>
                        {contactsData.map((contact, i) => 
                            <div className={contact.id === currentContact.id ? 'prof-contact-card bg-gray' : 'prof-contact-card'} key={i} onClick={() => currentContactHandler(contact)}>
                                <div className='prof-contact-name-circle'>{getNameLetters(contact.name)}</div>
                                <div className='prof-contact-details'>
                                    <p className='prof-contact-name'>{contact.name}</p>
                                    <p className='prof-contact-designation'>{contact.detail}</p>
                                </div>
                            </div>
                        )}
                        

                    </div>
                    <div className='prof-view-container'>
                        <div className='prof-view-holder'>
                            <img src={personPic} className='prof-view-photo'/>
                            <p className='prof-view-name'>{currentContact.name}</p>
                            <p>{currentContact.email}</p>
                            <p>{currentContact.detail}</p>
                            <div className='prof-view-phone-container'><Phone className='prof-view-phone'/><p>{currentContact.phone.map(ph => `${ph} | `)}</p></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Profile
