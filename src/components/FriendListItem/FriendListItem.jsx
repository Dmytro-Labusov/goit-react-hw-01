import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.card}>
      <span
        className={`${css.status} ${isOnline ? css.online : css.offline}`}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={`${css.statusText} ${isOnline ? css.online : css.offline}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;
