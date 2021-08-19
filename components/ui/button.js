import Link from "next/link";

function Button(props) {
  return (
    <Link href={props.link}>
      <a className="bg-red-500 hover:bg-red-700">{props.children}</a>
    </Link>
  );
}

export default Button;
