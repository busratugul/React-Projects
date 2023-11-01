import React from 'react'
import { Contact } from './Contact'

export const ContactList = ({ contacts }) => {
  const generateRandomImg = () => {
    const types = [
      'personas',
      'avataaars',
      'lorelei',
      'pixel-art',
      'bottts',
      'croodles',
      'thumbs',
      'identicon',
      'micah',
      'notionists',
    ]
    //console.log(types);
    return types[Math.floor(Math.random() * types.length)]
  }
  return (
    <ul>
      {contacts.map((contact, id) => {
        return (
          <Contact
            key={id}
            icon={`
        https://api.dicebear.com/7.x/${generateRandomImg()}/svg`}
            firstName={contact.first_name}
            lastName={contact.last_name}
            phoneNr={contact.phone}
          />
        )
      })}
    </ul>
  )
}
