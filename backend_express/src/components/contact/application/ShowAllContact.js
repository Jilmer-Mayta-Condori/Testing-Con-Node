/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoContactRepository')} obj.ContactRepository
 */
module.exports = ({ ContactRepository }) => {
  return async () => {
    return await ContactRepository.getAll()
  }
}
