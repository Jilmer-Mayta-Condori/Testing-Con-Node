/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoContactRepository')} obj.ContactRepository
 */
module.exports = ({ ContactRepository }) => {
  return async ({ name, number }) => {
    const newPerson = {
      name: name,
      number: number
    }

    return await ContactRepository.add(newPerson)
  }
}
