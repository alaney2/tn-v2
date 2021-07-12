import { useRouter } from 'next/router';

function Button( { link, className, children } ) {
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();

    router.push(link);
  }

  return <div>
    <button onClick={handleClick} className={className}> {children} </button>
  </div>
}

export default Button;