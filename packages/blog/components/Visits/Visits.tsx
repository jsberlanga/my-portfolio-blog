import * as React from 'react';

interface VisitsProps {
  slug: string;
}

const Visits: React.FC<VisitsProps> = ({ slug }) => {
  const [visits, setVisits] = React.useState(0);

  React.useEffect(() => {
    const getVisits = async () => {
      try {
        const response = await fetch(`/api/visits/?slug=${slug}`, {
          method: 'GET',
        });
        if (response.status === 200) {
          const data = await response.json();

          setVisits(data.post.visits);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getVisits();
  }, [slug]);

  return (
    <div
      className="small"
      style={{ visibility: !visits ? 'hidden' : 'visible' }}
    >
      {visits} views
    </div>
  );
};

export default Visits;
