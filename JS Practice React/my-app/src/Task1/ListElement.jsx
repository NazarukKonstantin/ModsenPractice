const ListElement = ({ element }) => {

  return (
    <div>
      <h1>{element.albumId}</h1>
      <h2>{element.id}</h2>
      <p>{element.title}</p>
      <img src={element.url} alt="img" />
      <img src={element.thumbnailUrl} alt="img" />
    </div>
  );
};

export default ListElement;
