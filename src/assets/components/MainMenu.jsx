import Button from "./Button";

const MainMenu = () => {
  return (
    <nav className="main-menu d-none d-lg-block">
      <ul className="d-flex">
        <li>
          <Button type="homenav" text="Home" />
        </li>
        <li>
          <Button path="about" text="About" />
        </li>
        <li>
          <Button path="service" text="Service" />
        </li>
        <li>
          <Button path="works" text="Works" />
        </li>
        <li>
          <Button path="team" text="Team" />
        </li>
        <li>
          <Button path="contact" text="Contact" />
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
