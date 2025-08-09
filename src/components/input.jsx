import Heading from "./heading.jsx"
const inputs = ({heading, type, onChange }) => {
  return (
    <div>
      <form>
        <label><Heading title={heading}/></label>
        <input type={type} name="data" onChange={onChange} />
      </form>
    </div>
  );
};
export default inputs;
