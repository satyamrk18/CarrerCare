import "./heading.css"
const heading = ({title, stitle})=>
{
return (
<div>
<p className="personal-detail-heading">{title}</p>
<p className="personal-detail-heading-s">{stitle}</p>
</div>
);
}
export default heading;