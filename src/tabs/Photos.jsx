import { getPhotos } from 'apiService/photos';
import { Form, Text } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [images, setImages] =useState([]);
  const [query, setQuery] = useState("");
const [page, setPage] = useState(1);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);
const [empty, setEmpty] = useState(false);
const [isVisible, setIsVisible] = useState(false);
useEffect(() => {
  if (!query) return;
  const getImages = async () => {
setIsLoading(true);
try {
  const {photos, per_page, total_results} = await getPhotos(query, page);
if (!photos.length) {return setEmpty(true)}
setImages(prevImages => [...prevImages, ...photos])
setIsVisible(page < Math.ceil(total_results/per_page))
} catch (error) {
  setError(error);
}
finally {
  setIsLoading(false);
}
  }
  getImages()
}, [query, page])
const onHandleSubmit = (searchQuery) => {
  // console.log(searchQuery);
setQuery(searchQuery);
}
console.log(isVisible);
  return (
    <>
      <Text textAlign="center">Let`s begin search 🔎</Text>
    <Form onSubmit={onHandleSubmit}/>
    </>
  );
};
