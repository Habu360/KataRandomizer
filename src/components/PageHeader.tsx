import obk_logo from "../assets/obk_logo.jpg";

interface Props {
  title: string;
}
function PageHeader({ title }: Props) {
  return (
    <>
      <div className="page-header">
        <img src={obk_logo} className="obk-logo"></img>
        <h3>{title}</h3>
      </div>
    </>
  );
}

export default PageHeader;
