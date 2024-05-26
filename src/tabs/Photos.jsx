// import { getPhotos } from 'apiService/photos';
import { Form, Text } from 'components';
import { useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState("");

const onHandleSubmit = (searchQuery) => {
  console.log(searchQuery);
setQuery(searchQuery);
}

  return (
    <>
      <Text textAlign="center">Let`s begin search 🔎</Text>
    <Form onSubmit={onHandleSubmit}/>
    </>
  );
};
