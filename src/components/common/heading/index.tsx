import './heading.css';

interface Props {
  firstWord: string;
  secondWord: string;
}

const Heading = (props: Props) => {
  return (
    <div className="heading">
      <h1>
        {props.firstWord}
        <span>{props.secondWord}</span>
      </h1>
    </div>
  );
};

export default Heading;
