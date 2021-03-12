export default function Button({ onChangePage }) {
  return (
    <div className="ContainerButton">
      <button className="Button" type="button" onClick={onChangePage}>
        Load more
      </button>
    </div>
  );
}
