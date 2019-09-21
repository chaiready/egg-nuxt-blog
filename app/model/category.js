const { Schema, model } = require('mongoose')
const { ObjectId } = Schema.Types

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
)

module.exports = model('Category', CategorySchema)
