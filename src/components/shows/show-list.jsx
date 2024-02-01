import ShowItem from './show-item';
import './show-list.css';

const ShowList = ({ shows }) => {
  return (
    <div className="show-list-container">
      {shows.map((show, index) => (
        <ShowItem key={index} show={show} />
      ))}
    </div>
  );
};

export default ShowList;
