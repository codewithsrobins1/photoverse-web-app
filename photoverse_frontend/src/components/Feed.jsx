import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import { Spinner, MasonryLayout } from '../components/index'
import { feedQuery, searchQuery } from '../utils/data';

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    //If there is a category, grab those other wise grab em all
    if(categoryId) {
      const query = searchQuery(categoryId);

      client.fetch(query)
        .then((data) => {
          setPins(data);
          setLoading(false);
        })
    }
    else {
      client.fetch(feedQuery)
        .then((data) => {
          setPins(data);
          setLoading(false)
        })
    }
  }, [categoryId])

  if(loading) return <Spinner message="We are adding new ideas to your feed!"/> 

  return (
    <div>
        {pins && <MasonryLayout pins={pins} />}
    </div>
  );
};

export default Feed;