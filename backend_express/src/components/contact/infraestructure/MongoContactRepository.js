const MongoLib = require('../../../lib/mongo')

class MongoContactRepository {
  constructor () {
    this.collection = 'Agenda'
    this.mongoDB = new MongoLib()
  }

  async add (contact) {
    await this.mongoDB.create(this.collection, contact)
    return { ...contact }
  }

  // async update ({ id, user }) {
  //   return this.mongoDB.update(this.collection, id, user)
  // }

  async delete ({ id }) {
    return this.mongoDB.delete(this.collection, id)
  }

  async getById ({ id }) {
    return await this.mongoDB.get(this.collection, id)
  }

  async getAll () {
    const query = null
    return this.mongoDB.getAll(this.collection, query)
  }
}

module.exports = MongoContactRepository
