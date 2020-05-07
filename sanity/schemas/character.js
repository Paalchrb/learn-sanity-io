export default {
  name: 'character',
  title: 'Character',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    }, 
    {
      name: 'gender',
      title: 'Gender',
      type: 'reference',
      to: [
        {type: 'gender'}
      ]
    },
    {
      name: 'mainClass',
      title: 'Main Class',
      type: 'reference',
      to: [
        {type: 'mainClass'}
      ]
    },
    {
      name: 'race',
      title: 'Race',
      type: 'reference',
      to: [
        {type: 'race'}
      ]
    },
    {
      name: 'experience',
      title: 'Experience',
      type: 'number',
    }
  ],
  initialValue: {
    experience: 0
  }
}
