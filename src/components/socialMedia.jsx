const SocialMedia = ({title, link}) => {
  return (
    <div>
      <ul>
        <li>
          <a href={link} target="new">
            {title}
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SocialMedia;