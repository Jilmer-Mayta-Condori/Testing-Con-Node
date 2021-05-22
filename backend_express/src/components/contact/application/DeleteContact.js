/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoContactRepository')} obj.ContactRepository
 */
module.exports = ({ ContactRepository }) => {
  return async ({ id }) => {
    return await ContactRepository.delete({ id })
  }
}
