import {defineType, defineField} from 'sanity'

const supportedLanguages = [
  { id: 'no', title: 'Norsk', isDefault: true },
  { id: 'en', title: 'English' },
]

export const baseLanguage = supportedLanguages.find(l => l.isDefault)

export default {
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],

  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
    validation: (Rule) => Rule.required().max(200),
    fieldset: lang.isDefault ? null : 'translations'
  }))
}