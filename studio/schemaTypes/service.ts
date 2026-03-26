export default {
  name: 'service',
  title: 'Usługi',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nazwa usługi',
      type: 'string',
      description: 'Np. Konsolidacja dla wojskowych, konsola dla nauczycieli',
    },
    {
      name: 'slug',
      title: 'Adres URL (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'Kliknij "Generate", aby stworzyć końcówkę adresu strony',
    },
    {
      name: 'mainImage',
      title: 'Zdjęcie główne',
      type: 'image',
      options: {
        hotspot: true, // Pozwala ustawić punkt skupienia na zdjęciu
      },
    },
    {
      name: 'description',
      title: 'Krótki opis',
      type: 'text',
      rows: 3,
    },
    {
      name: 'content',
      title: 'Treść szczegółowa',
      type: 'array',
      of: [{type: 'block'}], // To stworzy edytor tekstu (bold, italic, listy itp.)
    },
    {
      name: 'price',
      title: 'Cena (PLN)',
      type: 'number',
    },
  ],
}