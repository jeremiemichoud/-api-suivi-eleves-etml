import vine from '@vinejs/vine'

export const ClassGroupValidator = vine.create({
  name: vine.string().minLength(2).maxLength(255),
})
