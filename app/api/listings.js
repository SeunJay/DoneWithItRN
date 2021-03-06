import client from './client';

const endPoint = '/listings';

const getListings = () => client.get(endPoint);

const addListing = (listing, onUploadProgress) => {
  const data = new FormData();

  data.append('title', listing.title);
  data.append('price', listing.price);
  data.append('categoryId', listing.category.value);
  data.append('description', listing.description);

  listing.images.map((image, index) =>
    data.append('images', {
      name: `name ${index}`,
      type: 'image/jpeg',
      uri: image,
    })
  );

  if (listing.location)
    data.append('location', JSON.stringify(listing.location));

  return client.post(endPoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  getListings,
  addListing,
};
