import Button from './Button';

function Header() {

  return (
    <div>
      <div>
          <a href="">Tactics Ninja</a>
        </div>

        <div>
          <Button name="Solve" link="/solve" />
          <Button name="Analyze" link="/analyze" />
          <Button name="Changelog" link="/changelog" />
        </div>
    </div>
  )
}

export default Header;
