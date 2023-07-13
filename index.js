import yargs from 'yargs'
import { addContact, getContactById, listContacts, removeContact } from "./contacts.js"

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const allContacts = await listContacts()
            return console.log('allContacts', allContacts)
        
        case 'get':
            const oneContact = await getContactById(id)
            return console.log('oneContact', oneContact)
        
        case 'add':
            const newContact = await addContact(name, email, phone)
            return console.log('newContact', newContact)
        
        case 'remove':
            const removedContact = await removeContact(id)
            return console.log('removedContact', removedContact)
    
        default:
            console.warn('\x1B[31m Unknown action type!')
    }
}
const {argv} = yargs(process.argv.slice(2));

invokeAction(argv);
// invokeAction({action: 'list'})
// invokeAction({action: 'get', id:"AeHIrLTr6JkxGE6SN-0Rw"})
// invokeAction({ action: 'get', id: "Tr6JkxGE6SN-0Rw" })
// invokeAction({ action: 'add', name: "Oksana", email: "ok@gmail.com", phone: "0671111111" })
// invokeAction({ action: 'remove', id: "rLnAL3g1hIIxzRue9hhgJ" })