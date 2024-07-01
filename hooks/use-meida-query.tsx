import { useState, useEffect } from 'react';

interface MediaQueryOptions {
  query: string;
  initialValue?: boolean;
}

const useMediaQuery = ({
  query,
  initialValue = false,
}: MediaQueryOptions): boolean => {
  const [matches, setMatches] = useState<boolean>(initialValue);

  useEffect(() => {
    const media = window.matchMedia(query);
    const handleChange = () => setMatches(media.matches);

    handleChange();
    media.addEventListener('change', handleChange);

    return () => {
      media.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
