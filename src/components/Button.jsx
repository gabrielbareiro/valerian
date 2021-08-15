


export default function button(props) {
    return (
      <button className="btn btn-outline-secondary" onClick={() => props.onAdd()}>
        {props.text}
      </button>
    );
  }
  