export default function User(props) {
  return (
    <div className="profile">
      <img className="profile-img" src={props.user.img} alt={props.a} />

      <h1>{props.user.name}</h1>
      <p>Age: {props.user.age}</p>
      <p>phone: {props.user.phone}</p>
      <p>email: {props.user.email} </p>
    </div>
  );
}