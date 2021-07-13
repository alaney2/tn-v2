import Button from './Button';

function Header() {

  return (
    <header className="flex w-full p-5 justify-between text-alice-blue">
      <div className="flex space-x-4 items-center text-2xl italic">
        <Button link="/" className="italic">Tactics Ninja</Button>
      </div>

      <div className="flex space-x-4 items-center text-xl">
        
        <Button link="/solve">Solve</Button>
        <Button name="Analyze" link="/analyze">Analyze</Button>
        <Button name="Changelog" link="/changelog">Changelog</Button>
      </div>
    </header>
  )
}

export default Header;
