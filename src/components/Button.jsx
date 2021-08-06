import 'bootstrap/dist/css/bootstrap.min.css'


export default function Button(props) {
    return (
      <button class="btn btn-outline-secondary" onClick={() => props.Click("hola")}>
        {props.text}
      </button>
    );
  }
  