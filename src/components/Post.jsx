export function Post(props) {
  console.log(props);
  return (
    <main>
      <h1>{props.titulo}</h1>
      <div>
        <p>{props.value}</p>
        <p>{props.valueTwo}</p>
      </div>
    </main>
  );
}
