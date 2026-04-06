export const CONTACT_INFO = {
  whatsapp: {
    number: '+90 533 265 93 04',
    message: 'Merhaba, ürünleriniz hakkında bilgi almak istiyorum.',
    getLink: (message?: string) => {
      const encodedMessage = encodeURIComponent(message || CONTACT_INFO.whatsapp.message);
      return `https://wa.me/${CONTACT_INFO.whatsapp.number.replace(/\s/g, '').replace('+', '')}?text=${encodedMessage}`;
    }
  },
  instagram: {
    username: 'modaasapkaa',
    url: 'https://instagram.com/modaasapkaa'
  },
  address: {
    text: 'Konak Mahallesi, 863 Sokak, No:27, Kemeraltı, Konak, İzmir',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Konak+Mah+863+Sok+No:27+Kemeraltı+İzmir'
  }
};
