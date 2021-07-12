import { useRouter } from 'next/router';

function Button( { name, link } ) {
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();

    router.push(link);
  }

  return <div>
    <button onClick={handleClick}>{name}</button>
  </div>
}

export default Button;