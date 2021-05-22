const MongoContactRepository = require('./infraestructure/MongoContactRepository')
const CreateContact = require('./application/CreateContact')
const ShowAllContact = require('./application/ShowAllContact')
const DeleteContact = require('./application/DeleteContact')
const GetContact = require('./application/GetContact')

const ContactRepository = new MongoContactRepository()
/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const createNewContact = async (req, res, next) => {
  try {
    const query = CreateContact({ ContactRepository })
    // await query(req.body)
    const contact = await query(req.body)
    //  res.status(201).json({
    //    data: contact,
    //    message: 'Contact created'
    // })
    //Redireccionamos para que nos muestre la lista modificada
    //res.redirect('/api/personas')
    res.status(201).json({
      data: contact,
      message: 'Contact created'
    })
  } catch (e) {
    next(e)
  }
}

const showAllContacts = async (_, res, next) => {
  try {
    const query = ShowAllContact({ ContactRepository })
    const allcontact = await query()
    res.json(allcontact)
  } catch (e) {
    next(e)
  }
}

const DeleteUniqueContact = async (req, res, next) => {
  try {
    const query = DeleteContact({ ContactRepository })
    const id = await query(req.params)
    console.log(id)
    res.status(204).end()
  } catch (e) {
    next(e)
  }
}

const GetContactById = async (req, res, next) => {
  try {
    const query = GetContact({ ContactRepository })
    const UniqueContact = await query(req.params)
    if (UniqueContact) {
      res.json(UniqueContact)
    } else {
      res.send('<h3>no existe persona con el id enviado</h3>')
    }
  } catch (e) {
    next(e)
  }
}

module.exports = {
  createNewContact,
  showAllContacts,
  DeleteUniqueContact,
  GetContactById
}
