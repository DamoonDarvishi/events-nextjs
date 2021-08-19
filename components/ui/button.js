import Link from "next/link";

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className="bg-red-500 hover:bg-red-700">{props.children}</a>
      </Link>
    );
  }

  return <button onClick={props.onClick}>{props.children}</button>;
}

export default Button;
