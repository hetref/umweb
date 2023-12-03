// import useCountStore from "../../store/isCounted";

const Users = () => {
  // const counted = useCountStore((state) => state.counted);
  // const count = useCountStore((state) => state.setCounted);

  return (
    <div id="users-wrapper">
      <div className="add-user">
        <div className="form-control">
          <input
            className="input input-alt"
            placeholder="Enter Email"
            required
            type="text"
          />
          <span className="input-border input-border-alt"></span>
        </div>
      </div>
      <div className="display-users"></div>
    </div>
  );
};

export default Users;
